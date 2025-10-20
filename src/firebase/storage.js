import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject,
  listAll 
} from 'firebase/storage';
import { storage } from './index.js';
import { STORAGE_PATHS } from './collections.js';

export const storageService = {
  // Upload a file to storage
  async uploadFile(file, folder = STORAGE_PATHS.GALLERY) {
    try {
      const fileName = `${folder}${Date.now()}_${file.name}`;
      const storageRef = ref(storage, fileName);
      
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      return { 
        success: true, 
        url: downloadURL, 
        path: snapshot.ref.fullPath 
      };
    } catch (error) {
      console.error('Error uploading file:', error);
      return { success: false, error: error.message };
    }
  },

  // Upload multiple files
  async uploadMultipleFiles(files, folder = STORAGE_PATHS.GALLERY) {
    try {
      const uploadPromises = files.map(file => this.uploadFile(file, folder));
      const results = await Promise.all(uploadPromises);
      
      return { 
        success: true, 
        results: results.filter(result => result.success) 
      };
    } catch (error) {
      console.error('Error uploading multiple files:', error);
      return { success: false, error: error.message };
    }
  },

  // Delete a file from storage
  async deleteFile(filePath) {
    try {
      const fileRef = ref(storage, filePath);
      await deleteObject(fileRef);
      return { success: true };
    } catch (error) {
      console.error('Error deleting file:', error);
      return { success: false, error: error.message };
    }
  },

  // Get all files in a folder
  async listFiles(folder = STORAGE_PATHS.GALLERY) {
    try {
      const listRef = ref(storage, folder);
      const result = await listAll(listRef);
      
      const urlPromises = result.items.map(item => getDownloadURL(item));
      const urls = await Promise.all(urlPromises);
      
      const files = result.items.map((item, index) => ({
        name: item.name,
        fullPath: item.fullPath,
        url: urls[index]
      }));
      
      return { success: true, data: files };
    } catch (error) {
      console.error('Error listing files:', error);
      return { success: false, error: error.message, data: [] };
    }
  }
};

// Specific gallery operations
export const galleryService = {
  async uploadToGallery(file) {
    return await storageService.uploadFile(file, STORAGE_PATHS.GALLERY);
  },

  async getAllGalleryImages() {
    return await storageService.listFiles(STORAGE_PATHS.GALLERY);
  },

  async uploadEventImage(file) {
    return await storageService.uploadFile(file, STORAGE_PATHS.EVENT_IMAGES);
  }
};

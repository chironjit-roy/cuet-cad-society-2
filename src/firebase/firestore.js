import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './index.js';
import { COLLECTIONS } from './collections.js';

// Generic CRUD operations
export const firestore = {
  // Create a new document
  async add(collectionName, data) {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
      return { success: false, error: error.message };
    }
  },

  // Get all documents from a collection
  async getAll(collectionName, orderByField = 'createdAt', order = 'desc') {
    try {
      const q = query(
        collection(db, collectionName), 
        orderBy(orderByField, order)
      );
      const querySnapshot = await getDocs(q);
      
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      
      return { success: true, data: documents };
    } catch (error) {
      console.error(`Error getting ${collectionName}:`, error);
      return { success: false, error: error.message, data: [] };
    }
  },

  // Get a single document by ID
  async getById(collectionName, id) {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: 'Document not found' };
      }
    } catch (error) {
      console.error(`Error getting ${collectionName}/${id}:`, error);
      return { success: false, error: error.message };
    }
  },

  // Update a document
  async update(collectionName, id, data) {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp()
      });
      return { success: true };
    } catch (error) {
      console.error(`Error updating ${collectionName}/${id}:`, error);
      return { success: false, error: error.message };
    }
  },

  // Delete a document
  async delete(collectionName, id) {
    try {
      await deleteDoc(doc(db, collectionName, id));
      return { success: true };
    } catch (error) {
      console.error(`Error deleting ${collectionName}/${id}:`, error);
      return { success: false, error: error.message };
    }
  }
};

// Specific operations for your use cases
export const registreeService = {
  async registerForEvent(registreeData) {
    return await firestore.add(COLLECTIONS.REGISTREES, {
      ...registreeData,
      status: 'registered'
    });
  },

  async getEventRegistrees(eventId) {
    try {
      const q = query(
        collection(db, COLLECTIONS.REGISTREES),
        where('eventId', '==', eventId),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      const registrees = [];
      querySnapshot.forEach((doc) => {
        registrees.push({ id: doc.id, ...doc.data() });
      });
      
      return { success: true, data: registrees };
    } catch (error) {
      console.error('Error getting registrees:', error);
      return { success: false, error: error.message, data: [] };
    }
  }
};

export const eventService = {
  async getAllEvents() {
    return await firestore.getAll(COLLECTIONS.EVENTS, 'date', 'desc');
  },

  async getActiveEvents() {
    try {
      const q = query(
        collection(db, COLLECTIONS.EVENTS),
        where('active', '==', true),
        orderBy('date', 'asc')
      );
      const querySnapshot = await getDocs(q);
      
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      
      return { success: true, data: events };
    } catch (error) {
      console.error('Error getting active events:', error);
      return { success: false, error: error.message, data: [] };
    }
  },

  async createEvent(eventData) {
    return await firestore.add(COLLECTIONS.EVENTS, {
      ...eventData,
      active: true
    });
  }
};

export const alumniService = {
  async getAllAlumni() {
    return await firestore.getAll(COLLECTIONS.ALUMNI, 'name', 'asc');
  },

  async addAlumni(alumniData) {
    return await firestore.add(COLLECTIONS.ALUMNI, alumniData);
  }
};

export const committeeService = {
  async getCommitteeMembers() {
    return await firestore.getAll(COLLECTIONS.COMMITTEE, 'name', 'asc');
  }
};

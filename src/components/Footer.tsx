import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">CUET CAD Club</h3>
            <p className="text-sm text-muted-foreground">
              Empowering students with Computer-Aided Design skills and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </NavLink>
              <NavLink to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </NavLink>
              <NavLink to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </NavLink>
              <NavLink to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resources
              </NavLink>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>CUET Campus, Chittagong</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>cadclub@cuet.ac.bd</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CUET CAD Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

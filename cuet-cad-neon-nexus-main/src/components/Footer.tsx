import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4 text-glow">CUET CAD Society</h3>
            <p className="text-muted-foreground mb-4">
              Empowering students with cutting-edge CAD knowledge and skills at Chittagong University
              of Engineering & Technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>CUET, Chittagong, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@cuetcad.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+880 1234-567890</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all glow-sm"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all glow-sm"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} CUET CAD Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/events", label: "Events" },
    { to: "/workshops", label: "Workshops" },
    { to: "/committee", label: "Committee" },
    { to: "/alumni", label: "Alumni" },
    { to: "/join", label: "Join Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover effect */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-primary/50 transition-all duration-300">
              CUET CAD Club
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, -1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 hover:text-primary px-2 py-1 rounded-lg ${
                    isActive 
                      ? "text-primary bg-primary/10 font-semibold" 
                      : "text-muted-foreground hover:bg-accent/50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Button asChild variant="default" size="sm" className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <NavLink to="/join">
                Get Started
              </NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transform transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={24} className="transform transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}>
          <div className="border-t border-border/60 pt-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                    isActive 
                      ? "text-primary bg-primary/10 border-l-4 border-primary font-semibold" 
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button 
              asChild 
              variant="default" 
              size="sm" 
              className="w-full mt-4 rounded-lg py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <NavLink to="/join" onClick={() => setIsOpen(false)}>
                Get Started
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { 
      to: "/about", 
      label: "About",
      submenu: [
        { to: "/about/mission", label: "Our Mission" },
        { to: "/about/team", label: "Team" },
        { to: "/about/achievements", label: "Achievements" }
      ]
    },
    { 
      to: "/events", 
      label: "Events",
      submenu: [
        { to: "/events/upcoming", label: "Upcoming Events" },
        { to: "/events/past", label: "Past Events" },
        { to: "/events/gallery", label: "Gallery" }
      ]
    },
    { to: "/workshops", label: "Workshops" },
    { to: "/committee", label: "Committee" },
    { to: "/alumni", label: "Alumni" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-primary/10 border-b border-white/20" 
        : "bg-gradient-to-r from-white via-blue-50/30 to-white backdrop-blur-lg border-b border-blue-100/50"
    }`}>
      {/* Premium accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 shadow-lg" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              {/* Logo Container */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-500 group-hover:scale-105">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Sparkles className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </div>
              
              {/* Animated ping effect */}
              <div className="absolute -top-1 -right-1">
                <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg animate-ping" />
                <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg absolute top-0 left-0" />
              </div>
            </div>
            
            {/* Logo Text - Hidden on mobile, shown on desktop */}
            <div className="hidden sm:block">
              <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                CUET CAD
              </div>
              <div className="text-xs text-gray-500 font-medium tracking-wider">
                INNOVATION HUB
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.to} className="relative group" ref={dropdownRef}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1 px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-2xl mx-1 ${
                      isActive 
                        ? "text-blue-600 bg-blue-50 shadow-inner" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-white/80 hover:shadow-lg"
                    }`
                  }
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                  
                  {/* Active indicator */}
                  {!link.submenu && (
                    <span className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`} />
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2">
                      {link.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.to}
                          to={subItem.to}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-2 font-medium"
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              asChild 
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 border-0 rounded-2xl px-8 py-2 font-bold transition-all duration-300 hover:scale-105 group"
            >
              <NavLink to="/join">
                Join Now
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} className="text-gray-700 transform transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={20} className="text-gray-700 transform transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[800px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}>
          <div className="border-t border-gray-200/50 pt-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => !link.submenu && setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 px-6 text-base font-semibold rounded-2xl transition-all duration-300 border-2 ${
                      isActive 
                        ? "bg-blue-50 text-blue-600 border-blue-200 shadow-inner" 
                        : "bg-white/80 text-gray-700 border-transparent hover:border-blue-200 hover:shadow-lg"
                    }`
                  }
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  )}
                </NavLink>
                
                {/* Mobile Submenu */}
                {link.submenu && (
                  <div className="ml-6 mt-2 space-y-1 bg-white/50 rounded-2xl p-3">
                    {link.submenu.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 text-sm text-gray-600 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium"
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Button 
              asChild 
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 border-0 rounded-2xl py-4 text-base font-bold transition-all duration-300 hover:scale-[1.02]"
            >
              <NavLink to="/join" onClick={() => setIsOpen(false)}>
                Join Now
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

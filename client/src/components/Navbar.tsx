import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [location] = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeMobileMenu();
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
    
    // If we're not on the home page, navigate there first
    if (location !== "/") {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-primary font-bold text-2xl flex items-center">
              <span className="bg-primary text-white p-1 rounded-md mr-2">S.ai</span>
              <span>Simlionics.ai</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="font-medium text-slate-800 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="font-medium text-slate-800 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium text-slate-800 hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium text-slate-800 hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Get Started
            </Button>
          </nav>
          
          <button
            className="md:hidden text-slate-800"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-b border-slate-200 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-left px-3 py-2 rounded-md font-medium text-slate-800 hover:bg-slate-100"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="block w-full text-left px-3 py-2 rounded-md font-medium text-slate-800 hover:bg-slate-100"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-3 py-2 rounded-md font-medium text-slate-800 hover:bg-slate-100"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-3 py-2 rounded-md font-medium text-slate-800 hover:bg-slate-100"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

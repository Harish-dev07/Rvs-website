import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import rvsLogo from "@/assets/rvs-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);


  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Roles", href: "#roles" },
    { label: "What Next", href: "#whats-next" },
    { label: "Clients", href: "#clients" },
    { label: "Summary", href: "#summary" },
    { label: "Team", href: "#team" },
    { label: "Contact Us", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* Stop body scroll when menu is open */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  /* Close menu on clicking outside */
 useEffect(() => {
  const handleOutsideClick = (e) => {
    if (
      isMenuOpen &&
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);
  return () => document.removeEventListener("mousedown", handleOutsideClick);
}, [isMenuOpen]);
  

  /* Header hide / show on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }

      if (currentScrollY < 10) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#0f172a]/95 via-[#1e293b]/90 to-[#0f172a]/95 backdrop-blur-xl shadow-md transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 md:px-14 max-w-full">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={rvsLogo} alt="RVS Logo" className="h-8 w-8 sm:h-12 sm:w-12" />
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-primary">RVS</span>
              <span className="text-[10px] sm:text-xs text-white hidden sm:block">
                Royal Value Solutions
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white/90 hover:text-[#00e0ff] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
<Button
  ref={toggleRef}
  variant="ghost"
  size="icon"
  className="md:hidden text-white z-50"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? (
    <X className="w-6 h-6" />
  ) : (
    <Menu className="w-6 h-6" />
  )}
</Button>


        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden mt-4 pb-4 border-t border-white/10 bg-[#0f172a]/95 backdrop-blur-xl rounded-lg"
          >
            <div className="flex flex-col space-y-3 pt-4 px-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 px-2 text-white/90 hover:text-[#00e0ff] transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

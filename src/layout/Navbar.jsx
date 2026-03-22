import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = href.replace("/#", "");

    if (location.pathname === "/") {
      // already on home page, just scroll
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate home first, then scroll after page loads
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Navbar Click Outside - START
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);
  // Navbar Click Outside - END

  // Navbar Body Scroll Lock — START
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMobileMenuOpen]);
  // Navbar Body Scroll Lock — END

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? `glass-strong pt-3 ${isMobileMenuOpen ? "pb-0" : "pb-3"}` : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          CLM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" onClick={(e) => handleNavClick(e, "/#contact")}>
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in mt-3">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button
              onClick={(e) => {
                handleNavClick(e, "/#contact");
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;

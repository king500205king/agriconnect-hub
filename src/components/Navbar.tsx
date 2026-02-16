import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-mono font-bold text-sm">X</span>
          </div>
          <span className="font-mono text-lg font-bold text-foreground tracking-tighter uppercase glitch-hover">
            NEXUS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 border-b-2 ${
                location.pathname === link.to
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground"
              } glitch-hover`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-6 py-2 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-all duration-200 brutal-shadow"
        >
          Let's Talk →
        </Link>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-0">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 font-mono text-sm uppercase tracking-widest border-b border-border ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-4 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-bold text-center"
          >
            Let's Talk →
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

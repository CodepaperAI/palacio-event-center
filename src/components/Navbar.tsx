import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const menuCategories = [
  {
    group: "Asian Cuisine",
    items: [
      { label: "South Asian", href: "/menus/south-asian" },
      { label: "Pakistani Halal", href: "/menus/pakistani-halal" },
      { label: "Gujarati", href: "/menus/gujarati" },
    ],
  },
  {
    group: "International",
    items: [
      { label: "European", href: "/menus/european" },
      { label: "Middle Eastern", href: "/menus/middle-eastern" },
      { label: "Caribbean", href: "/menus/caribbean" },
    ],
  },
  {
    group: "Packages",
    items: [
      { label: "Bar Packages", href: "/menus/bar-packages" },
      { label: "Outside Catering", href: "/menus/outside-catering" },
      { label: "Holiday / Prom", href: "/menus/holiday-prom" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Events",
    href: "/weddings",
    children: [
      { label: "Weddings", href: "/weddings" },
      { label: "Social Events", href: "/social-events" },
      { label: "Corporate Events", href: "/corporate-events" },
    ],
  },
  { label: "Menus", href: "/menus", hasMegaMenu: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  solid?: boolean;
}

const Navbar = ({ solid = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenusOpen, setMobileMenusOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const showSolid = solid || scrolled;

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-background border-b border-border/30 shadow-soft`}
    >
      <div className="container-luxury flex items-center justify-between h-20 lg:h-22">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl lg:text-2xl font-semibold tracking-wide text-foreground"
        >
          Palacio
          <span className="hidden sm:inline text-muted-foreground">
            {" "}Event Centre
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => {
                if (link.hasMegaMenu) setMegaMenuOpen(true);
                if (link.children) setEventsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (link.hasMegaMenu) setMegaMenuOpen(false);
                if (link.children) setEventsDropdownOpen(false);
              }}
            >
              <Link
                to={link.href}
                className={`relative px-4 py-2 text-[12px] font-medium tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-1.5 rounded-lg ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]"
                }`}
              >
                {link.label}
                {(link.hasMegaMenu || link.children) && (
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                    (link.hasMegaMenu && megaMenuOpen) || (link.children && eventsDropdownOpen) ? "rotate-180" : ""
                  }`} />
                )}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>

              {/* Events Dropdown */}
              {link.children && (
                <AnimatePresence>
                  {eventsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-background border border-border/50 rounded-xl shadow-luxury p-2 min-w-[200px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={`block px-4 py-2.5 text-[12px] tracking-wider uppercase rounded-lg transition-all duration-200 ${
                              isActive(child.href)
                                ? "text-gold bg-gold/5"
                                : "text-foreground/70 hover:text-gold hover:bg-gold/5"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Mega Menu */}
              {link.hasMegaMenu && (
                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full -left-20 pt-2"
                    >
                      <div className="bg-background border border-border/50 rounded-2xl shadow-luxury p-8 min-w-[520px]">
                        <div className="flex items-center justify-between mb-6">
                          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold font-sans">
                            Our Menus
                          </p>
                          <Link
                            to="/menus"
                            className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors font-sans"
                          >
                            View All →
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                          {menuCategories.map((group) => (
                            <div key={group.group}>
                              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground/60 mb-3 font-sans">
                                {group.group}
                              </p>
                              <div className="space-y-0.5">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    to={item.href}
                                    className="block px-3 py-2 text-sm text-foreground/70 hover:text-gold hover:bg-gold/5 rounded-lg transition-all duration-200 font-sans"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link to="/contact" className="ml-3">
            <Button variant="gold" size="sm">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2 rounded-lg transition-all duration-300 text-foreground hover:bg-foreground/5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden bg-background/98 backdrop-blur-2xl border-t border-border/30 overflow-hidden"
          >
            <div className="container-luxury py-6 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasMegaMenu ? (
                    <>
                      <button
                        onClick={() => setMobileMenusOpen(!mobileMenusOpen)}
                        className={`flex items-center justify-between w-full py-3.5 px-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                          mobileMenusOpen ? "text-gold bg-gold/5" : "text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]"
                        }`}
                      >
                        <span className="tracking-wider uppercase text-[12px]">{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileMenusOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileMenusOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1">
                              <Link
                                to="/menus"
                                className="block py-2 px-3 text-[11px] tracking-wider uppercase font-medium text-gold rounded-lg"
                              >
                                All Menus →
                              </Link>
                              {menuCategories.flatMap((g) => g.items).map((item) => (
                                <Link
                                  key={item.label}
                                  to={item.href}
                                  className="block py-2 px-3 text-sm text-foreground/60 hover:text-gold transition-colors rounded-lg font-sans"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : link.children ? (
                    <>
                      <button
                        onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                        className={`flex items-center justify-between w-full py-3.5 px-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                          mobileEventsOpen ? "text-gold bg-gold/5" : "text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]"
                        }`}
                      >
                        <span className="tracking-wider uppercase text-[12px]">{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileEventsOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileEventsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block py-2 px-3 text-sm text-foreground/60 hover:text-gold transition-colors rounded-lg font-sans"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block py-3.5 px-3 text-[12px] tracking-wider uppercase font-medium rounded-xl transition-all duration-300 ${
                        isActive(link.href) ? "text-gold bg-gold/5" : "text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-3">
                <Link to="/contact">
                  <Button variant="gold" className="w-full">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

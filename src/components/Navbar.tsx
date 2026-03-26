import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/palacio-logo.png";
import { cuisineMenuCollections, serviceMenuCollections } from "@/data/menuCollections";

const phoneNumber = "905-949-0555";

const spacesLinks = [
  { label: "Explore Spaces", href: "/#spaces" },
  { label: "Ibiza Grand Ballroom", href: "/spaces/ibiza-grand-ballroom" },
  { label: "Ibiza A", href: "/spaces/ibiza-a" },
  { label: "Ibiza B", href: "/spaces/ibiza-b" },
  { label: "Arriba", href: "/spaces/arriba" },
];

const eventLinks = [
  { label: "Weddings", href: "/weddings" },
  { label: "Social Events", href: "/social-events" },
  { label: "Corporate Events", href: "/corporate-events" },
];

const serviceGroups = [
  {
    group: "Cuisine Menus",
    items: cuisineMenuCollections.map((item) => ({
      label: item.title,
      href: item.route,
      pdfUrl: item.pdfUrl,
    })),
  },
  {
    group: "Services",
    items: [
      ...serviceMenuCollections.map((item) => ({
        label: item.title,
        href: item.route,
        pdfUrl: item.pdfUrl,
      })),
      { label: "About Palacio", href: "/about" },
    ],
  },
];

const navLinks = [
  { label: "Spaces", href: "/#spaces", children: spacesLinks },
  { label: "Events", href: "/weddings", children: eventLinks },
  { label: "Menu", href: "/menus", hasMegaMenu: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  solid?: boolean;
}

const Navbar = ({ solid = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSpacesOpen, setMobileSpacesOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [spacesDropdownOpen, setSpacesDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const showSolid = solid || scrolled;

  const isActive = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const targetPath = path || "/";
      return location.pathname === targetPath && location.hash === `#${hash}`;
    }

    return href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);
  };

  const desktopLinkClass = (active: boolean) =>
    `relative flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
      active
        ? showSolid
          ? "bg-gold/12 text-charcoal"
          : "bg-white/10 text-white"
        : showSolid
          ? "text-charcoal/82 hover:bg-charcoal/5 hover:text-charcoal"
          : "text-white hover:bg-white/12 hover:text-white"
    }`;

  const mobileAccordionButtonClass = (open: boolean) =>
    `flex w-full items-center justify-between rounded-2xl px-3 py-3.5 text-sm font-medium transition-all duration-300 ${
      open ? "bg-gold/5 text-gold" : "text-foreground/72 hover:bg-foreground/[0.03] hover:text-foreground"
    }`;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out ${
        showSolid
          ? "bg-white shadow-soft backdrop-blur-xl"
          : "bg-charcoal/58 shadow-none backdrop-blur-md"
      }`}
    >
      <div className="container-luxury flex h-20 items-center justify-between gap-4 lg:h-[5.4rem]">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Palacio Event Centre"
            className="h-10 w-auto lg:h-11"
          />
        </Link>

        <div className="hidden items-center gap-2 lg:flex xl:hidden">
          <a
            href={`tel:${phoneNumber}`}
            className={`inline-flex min-h-11 items-center justify-center rounded-full border px-3 py-2 transition-all duration-300 ${
              showSolid
                ? "border-charcoal/12 bg-charcoal/[0.03] text-charcoal/82 hover:border-gold/35 hover:bg-gold/5 hover:text-charcoal"
                : "border-white/40 bg-white/8 text-white hover:border-white/60 hover:bg-white/12 hover:text-white"
            }`}
            aria-label="Call Palacio Event Centre"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link to="/contact">
            <Button variant={showSolid ? "gold" : "goldOutline"} size="sm">
              Book Consultation
            </Button>
          </Link>
        </div>

        <div className="hidden items-center gap-1.5 xl:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => {
                if (link.label === "Spaces") setSpacesDropdownOpen(true);
                if (link.label === "Events") setEventsDropdownOpen(true);
                if (link.hasMegaMenu) setServicesMenuOpen(true);
              }}
              onMouseLeave={() => {
                if (link.label === "Spaces") setSpacesDropdownOpen(false);
                if (link.label === "Events") setEventsDropdownOpen(false);
                if (link.hasMegaMenu) setServicesMenuOpen(false);
              }}
            >
              <Link to={link.href} className={desktopLinkClass(isActive(link.href))}>
                {link.label}
                {(link.children || link.hasMegaMenu) && (
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${
                      (link.label === "Spaces" && spacesDropdownOpen) ||
                      (link.label === "Events" && eventsDropdownOpen) ||
                      (link.hasMegaMenu && servicesMenuOpen)
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                )}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-1.5 left-4 right-4 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>

              {link.label === "Spaces" && link.children && (
                <AnimatePresence>
                  {spacesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="card-panel min-w-[230px] rounded-[1.35rem] p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block rounded-xl px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-foreground/72 transition-all duration-200 hover:bg-gold/5 hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {link.label === "Events" && link.children && (
                <AnimatePresence>
                  {eventsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="card-panel min-w-[230px] rounded-[1.35rem] p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={`block rounded-xl px-4 py-3 text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
                              isActive(child.href)
                                ? "bg-gold/5 text-gold"
                                : "text-foreground/72 hover:bg-gold/5 hover:text-gold"
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

              {link.hasMegaMenu && (
                <AnimatePresence>
                  {servicesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full -left-20 pt-2"
                    >
                      <div className="card-panel-strong min-w-[580px] p-8">
                        <div className="mb-6 flex items-center justify-between">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold font-sans">
                            Menu
                          </p>
                          <Link
                            to="/menus"
                            className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-gold font-sans"
                          >
                            View All
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                          {serviceGroups.map((group) => (
                            <div key={group.group}>
                              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 font-sans">
                                {group.group}
                              </p>
                              <div className="space-y-1">
                                {group.items.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gold/5"
                                  >
                                    <span className="text-sm text-foreground/72 transition-colors duration-200 hover:text-gold font-sans">
                                      {item.label}
                                    </span>
                                    <span className="rounded-full border border-border/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 hover:border-gold/35 hover:text-gold font-sans">
                                      PDF
                                    </span>
                                  </a>
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

          <a
            href={`tel:${phoneNumber}`}
            className={`ml-1 inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
              showSolid
                ? "border-charcoal/12 bg-charcoal/[0.03] text-charcoal/82 hover:border-gold/35 hover:bg-gold/5 hover:text-charcoal"
                : "border-white/40 bg-white/8 text-white hover:border-white/60 hover:bg-white/12 hover:text-white"
            }`}
          >
            <Phone className="h-3.5 w-3.5" />
            {phoneNumber}
          </a>

          <Link to="/contact" className="ml-1">
            <Button variant="goldOutline" size="sm">
              Book Consultation
            </Button>
          </Link>
        </div>

        <button
          className={`touch-target rounded-full p-2 transition-all duration-300 xl:hidden ${
            showSolid ? "text-foreground hover:bg-foreground/5" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden overflow-hidden border-t border-border/30 bg-background/98 backdrop-blur-2xl"
          >
            <div className="container-luxury space-y-1 py-6">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.label === "Spaces" ? (
                    <>
                      <button onClick={() => setMobileSpacesOpen(!mobileSpacesOpen)} className={mobileAccordionButtonClass(mobileSpacesOpen)}>
                        <span className="text-[12px] font-medium uppercase tracking-wider">{link.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileSpacesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSpacesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-2 pl-4">
                              {spacesLinks.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block rounded-xl px-3 py-2.5 text-sm text-foreground/60 transition-colors hover:text-gold font-sans"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : link.hasMegaMenu ? (
                    <>
                      <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className={mobileAccordionButtonClass(mobileServicesOpen)}>
                        <span className="text-[12px] font-medium uppercase tracking-wider">{link.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-2 pl-4">
                              <Link
                                to="/menus"
                                className="block rounded-xl px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-gold"
                              >
                                View All
                              </Link>
                              {serviceGroups.flatMap((group) => group.items).map((item) => (
                                <a
                                  key={item.label}
                                  href={item.pdfUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between rounded-xl px-3 py-2.5"
                                >
                                  <span className="text-sm text-foreground/60 transition-colors hover:text-gold font-sans">
                                    {item.label}
                                  </span>
                                  {item.pdfUrl && (
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold font-sans">
                                      PDF
                                    </span>
                                  )}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : link.children ? (
                    <>
                      <button onClick={() => setMobileEventsOpen(!mobileEventsOpen)} className={mobileAccordionButtonClass(mobileEventsOpen)}>
                        <span className="text-[12px] font-medium uppercase tracking-wider">{link.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileEventsOpen ? "rotate-180" : ""}`} />
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
                            <div className="space-y-1 pb-2 pl-4">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block rounded-xl px-3 py-2.5 text-sm text-foreground/60 transition-colors hover:text-gold font-sans"
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
                      className={`block rounded-2xl px-3 py-3.5 text-[12px] font-medium uppercase tracking-wider transition-all duration-300 ${
                        isActive(link.href)
                          ? "bg-gold/5 text-gold"
                          : "text-foreground/72 hover:bg-foreground/[0.03] hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="px-3 pt-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="mb-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border/60 py-3 text-sm text-muted-foreground transition-all duration-300 hover:border-gold/30 hover:text-gold font-sans"
                >
                  <Phone className="h-4 w-4" />
                  {phoneNumber}
                </a>
                <Link to="/contact">
                  <Button variant="gold" className="w-full">
                    Book Consultation
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

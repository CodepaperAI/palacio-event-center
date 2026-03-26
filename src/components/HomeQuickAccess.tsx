import { Link } from "react-router-dom";
import { Camera, LayoutGrid, Phone, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  {
    label: "Spaces",
    description: "Ballroom, Room A, Room B, Arriba",
    href: "/#spaces",
    icon: LayoutGrid,
  },
  {
    label: "Gallery",
    description: "See the venue and event atmosphere",
    href: "/gallery",
    icon: Camera,
  },
  {
    label: "Menus",
    description: "Cuisine packages and services",
    href: "/menus",
    icon: UtensilsCrossed,
  },
  {
    label: "Contact",
    description: "Talk with our event team",
    href: "/contact",
    icon: Phone,
  },
];

const HomeQuickAccess = () => {
  return (
    <section className="relative -mt-14 sm:-mt-16 z-20">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="group rounded-[1.75rem] border border-white/25 bg-white/10 px-8 py-6 transition-all duration-300 hover:-translate-y-[3px] hover:bg-white/[0.15]"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <div className="flex flex-col items-center justify-center text-center gap-4 min-h-[170px]">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-white/15">
                  <link.icon className="w-5 h-5 text-gold" strokeWidth={1.6} />
                </div>
                <div className="min-w-0 flex flex-col items-center justify-center">
                  <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-gold font-sans mb-1">
                    {link.label}
                  </p>
                  <p className="font-sans text-[1.25rem] text-foreground mb-2">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground font-sans">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeQuickAccess;

import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/palacio-logo.png";
import { menuCollections } from "@/data/menuCollections";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Weddings", href: "/weddings" },
  { label: "Social Events", href: "/social-events" },
  { label: "Corporate Events", href: "/corporate-events" },
  { label: "Menus", href: "/menus" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const menuLinks = menuCollections.map((collection) => ({
  label: collection.title,
  href: collection.route,
}));

const contactItems = [
  { icon: MapPin, text: "3410 Semenyk Ct, Mississauga, ON L5C 4P8" },
  { icon: Phone, text: "905-949-0555", href: "tel:905-949-0555" },
  { icon: Mail, text: "Sales@Palacioeventcentre.com", href: "mailto:Sales@Palacioeventcentre.com" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(40 45% 60%) 1px, transparent 0)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="container-luxury relative z-10 pt-16 pb-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.1fr] lg:gap-10">
          <div className="lg:pr-8">
            <img
              src={logo}
              alt="Palacio Event Centre"
              className="mb-5 h-12 w-auto"
            />
            <p className="max-w-xs text-sm text-ivory/78 font-sans">
              Mississauga&apos;s luxury event venue for weddings, corporate functions, and milestone celebrations with polished service and elevated spaces.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/58 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/76 transition-colors duration-300 hover:text-gold font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/58 font-sans">
              Menus & Services
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/76 transition-colors duration-300 hover:text-gold font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/58 font-sans">
              Contact
            </h4>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.text} className="flex gap-3.5">
                  <item.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/80" strokeWidth={1.5} />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-ivory/76 transition-colors duration-300 hover:text-gold font-sans"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-ivory/76 font-sans">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/[0.12] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] tracking-[0.12em] text-ivory/52 font-sans">
            {"\u00A9"} {new Date().getFullYear()} Palacio Event Centre. All rights reserved.
          </p>
          <p className="text-[11px] tracking-[0.12em] text-ivory/52 font-sans">
            3410 Semenyk Ct, Mississauga, ON L5C 4P8
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Weddings", href: "/weddings" },
  { label: "Social Events", href: "/social-events" },
  { label: "Corporate Events", href: "/corporate-events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const menuLinks = [
  { label: "South Asian", href: "/menus/south-asian" },
  { label: "Pakistani Halal", href: "/menus/pakistani-halal" },
  { label: "European", href: "/menus/european" },
  { label: "Middle Eastern", href: "/menus/middle-eastern" },
  { label: "Gujarati", href: "/menus/gujarati" },
  { label: "Caribbean", href: "/menus/caribbean" },
  { label: "Bar Packages", href: "/menus/bar-packages" },
];

const contactItems = [
  { icon: MapPin, text: "3410 Semenyk Ct, Mississauga, ON L5C 4P8" },
  { icon: Phone, text: "905-949-0555", href: "tel:905-949-0555" },
  { icon: Mail, text: "Sales@Palacioeventcentre.com", href: "mailto:Sales@Palacioeventcentre.com" },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory/80 relative">
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container-luxury pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:pr-6">
            <h3 className="font-serif text-2xl text-ivory mb-4">Palacio</h3>
            <p className="text-sm leading-relaxed text-ivory/40 max-w-xs font-sans">
              Mississauga's premier luxury event venue. Elegant spaces and exceptional
              service for weddings, celebrations, and corporate events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-ivory/25 mb-5 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/40 hover:text-gold transition-colors duration-300 font-sans cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menus */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-ivory/25 mb-5 font-sans">
              Our Menus
            </h4>
            <ul className="space-y-2.5">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/40 hover:text-gold transition-colors duration-300 font-sans cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/menus"
                  className="text-sm text-gold/60 hover:text-gold transition-colors duration-300 font-sans cursor-pointer"
                >
                  View All Menus →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-ivory/25 mb-5 font-sans">
              Contact
            </h4>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.text} className="flex gap-3">
                  <item.icon className="w-4 h-4 text-gold/40 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-ivory/40 hover:text-gold transition-colors duration-300 font-sans cursor-pointer"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-ivory/40 font-sans">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/[0.06] mt-14 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-ivory/20 font-sans tracking-wider">
            © {new Date().getFullYear()} Palacio Event Centre. All rights reserved.
          </p>
          <p className="text-[11px] text-ivory/20 font-sans tracking-wider">
            3410 Semenyk Ct, Mississauga, ON L5C 4P8
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

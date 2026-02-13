import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_DETAILS } from "@/constants";
import Image from "next/image";
import LogoLight from "@/assets/logo-light.png";

const Footer = () => {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceAreas = [
    { name: "Northern Suburbs", href: "/bathroom-renovations/region/brisbane-northern-suburbs" },
    { name: "Southern Suburbs", href: "/bathroom-renovations/region/brisbane-southern-suburbs" },
    { name: "Western Suburbs", href: "/bathroom-renovations/region/brisbane-western-suburbs" },
    { name: "City Suburbs", href: "/bathroom-renovations/region/brisbane-city-suburbs" },
    { name: "Carindale", href: "/bathroom-renovations/carindale" },
    { name: "View All Areas", href: "/#service-areas", highlight: true },
  ];

  const socialLinks = [
    { icon: Facebook, href: CONTACT_DETAILS.socials.facebook, label: "Facebook" },
    { icon: Instagram, href: CONTACT_DETAILS.socials.instagram, label: "Instagram" },
    // Linkedin removed as it's not in the new details, or keep if preferred. Keeping for now but setting to # if no data
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-charcoal pt-16 pb-8 lg:pt-24 lg:pb-12 text-cream border-t border-cream/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-16 justify-between">
          {/* Brand Column - Left Side */}
          <div className="lg:w-1/3 xl:w-1/4">
            <Link href="/" className="inline-block font-display font-semibold -mt-2">
              <Image src={LogoLight} alt="Brisbane Bath Co Logo" width={100} height={100} />
            </Link>
            <p className="text-sm text-cream/60 leading-relaxed max-w-sm">
              Brisbane's trusted bathroom renovation specialists.
              Transforming homes with precision craftsmanship since 2010.
            </p>
            <div className="space-y-3 pt-6">
              <a href={CONTACT_DETAILS.phone.href} className="flex items-center gap-3 text-sm text-cream/70 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-full bg-cream/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                {CONTACT_DETAILS.phone.display}
              </a>
              <a href={CONTACT_DETAILS.email.href} className="flex items-center gap-3 text-sm text-cream/70 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-full bg-cream/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                {CONTACT_DETAILS.email.display}
              </a>
            </div>
          </div>

          {/* Links Columns - Right Side Grouped */}
          <div className="lg:w-2/3 xl:w-3/4 grid grid-cols-2 md:flex md:flex-row gap-10 md:gap-20 xl:gap-32 lg:justify-end">
            {/* Quick Links */}
            <div>
              <h4 className="font-display text-sm font-semibold tracking-wide uppercase text-cream mb-6">
                Explore
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-primary transition-colors duration-300 block w-fit"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="font-display text-sm font-semibold tracking-wide uppercase text-primary-foreground mb-6">
                Service Areas
              </h4>
              <ul className="space-y-3">
                {serviceAreas.map((area) => (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className={`text-sm transition-colors duration-300 block w-fit ${area.highlight
                        ? "text-primary hover:text-white font-medium"
                        : "text-cream/60 hover:text-primary"
                        }`}
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials & Connect */}
            <div className="md:ml-auto lg:ml-0">
              <h4 className="font-display text-sm font-semibold tracking-wide uppercase text-primary-foreground mb-6">
                Connect
              </h4>
              <p className="text-sm text-cream/60 mb-6 leading-relaxed max-w-[200px]">
                Follow our latest projects on social media.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40 text-center md:text-left">
            © {new Date().getFullYear()} Brisbathco. All rights reserved. <br className="hidden sm:block" />
            QBCC Licence #12345678. ABN 12 345 678 901.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-cream/40 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-primary-foreground/40 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
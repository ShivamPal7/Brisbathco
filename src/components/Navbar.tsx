"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { CONTACT_DETAILS } from "@/constants";
import Image from "next/image";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import Link from "next/link";

const Navbar = ({ forceScrolled = false }: { forceScrolled?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceScrolled);

  useEffect(() => {
    const handleScroll = () => setScrolled(forceScrolled || window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top vignette overlay — visible only when navbar is transparent */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 pointer-events-none transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
        style={{
          height: "clamp(120px, 20vh, 200px)",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
        }}
      />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent border-b border-transparent"}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="font-display text-xl lg:text-2xl font-semibold tracking-tight">
              {scrolled ? <Image src={logoDark} alt="Logo" width={80} height={80} /> : <Image src={logoLight} alt="Logo" width={80} height={80} />}
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-cream/70 hover:text-cream"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href={CONTACT_DETAILS.phone.href} className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-cream/70 hover:text-cream"}`}>
                <Phone className="w-4 h-4" />
                {CONTACT_DETAILS.phone.display}
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-gold text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity shadow-gold"
              >
                Free Quote
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-cream"}`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-5 py-2.5 bg-gold text-accent-foreground text-sm font-medium rounded-sm text-center shadow-gold"
                >
                  Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
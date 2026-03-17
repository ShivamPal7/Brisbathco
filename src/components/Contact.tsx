"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Facebook, Instagram, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { CONTACT_DETAILS } from "@/constants";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Ready to Start Your
              <br />
              <span className="italic">Dream Bathroom?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-sm">
              Book your free, no-obligation consultation today. We'll visit your home,
              discuss your ideas, and provide a detailed quote — all at no cost.
            </p>

            <div className="flex flex-col gap-4">
              <a href={CONTACT_DETAILS.phone.href} className="flex items-center gap-3 text-sm text-foreground hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                {CONTACT_DETAILS.phone.display}
              </a>
              <a href={CONTACT_DETAILS.email.href} className="flex items-center gap-3 text-sm text-foreground hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                {CONTACT_DETAILS.email.display}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" />
                {CONTACT_DETAILS.address}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={CONTACT_DETAILS.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="p-8 rounded-sm bg-card border border-border text-center shadow-elegant">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-sm text-muted-foreground">
                  We'll be in touch within 24 hours to arrange your free consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 lg:p-8 rounded-sm bg-card border border-border shadow-elegant"
              >
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-6">
                  Request a Free Quote
                </h3>
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      disabled={isSubmitting}
                      className="px-4 py-3 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-shadow disabled:opacity-50"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      disabled={isSubmitting}
                      className="px-4 py-3 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-shadow disabled:opacity-50"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                    className="px-4 py-3 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-shadow disabled:opacity-50"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    disabled={isSubmitting}
                    className="px-4 py-3 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-shadow disabled:opacity-50"
                  />
                  <select
                    name="projectType"
                    className="px-4 py-3 text-sm bg-background border border-border rounded-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-shadow disabled:opacity-50"
                    defaultValue=""
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>Type of Project</option>
                    <option value="Full Bathroom Renovation">Full Bathroom Renovation</option>
                    <option value="Ensuite Renovation">Ensuite Renovation</option>
                    <option value="Shower Replacement">Shower Replacement</option>
                    <option value="Tiling & Waterproofing">Tiling & Waterproofing</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project... (Optional)"
                    rows={3}
                    disabled={isSubmitting}
                    className="px-4 py-3 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none transition-shadow disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-3.5 bg-gold text-accent-foreground font-medium text-sm rounded-sm hover:shadow-gold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Sending...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Get My Free Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam. We'll respond within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
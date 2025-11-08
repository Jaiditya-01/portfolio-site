import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal, socials } = portfolioData;

  const contactInfo = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: "Location", value: personal.location },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: socials.github },
    { icon: Linkedin, label: "LinkedIn", href: socials.linkedin },
    { icon: Twitter, label: "Twitter", href: socials.twitter },
    { icon: ExternalLink, label: "Portfolio", href: socials.portfolio },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Let's connect and build something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-glass border border-border rounded-xl p-8 md:p-12 shadow-card"
        >
          {/* Contact Info */}
          <div className="space-y-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground mb-6">Connect with me on</p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="mr-2 h-5 w-5" />
                      {social.label}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personal.fullName}. Built with React, Tailwind & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

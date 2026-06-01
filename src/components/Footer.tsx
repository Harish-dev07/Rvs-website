import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-300 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="pt-20 pb-12 relative z-10"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RVS</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">RVS</h3>
                  <p className="text-xs text-slate-400">Digital Excellence</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                AI-driven technology company specializing in digital transformation, enterprise solutions, and workforce development.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary/80 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                {[
                  { label: "SAAS Solutions", href: "#services" },
                  { label: "IT Consulting", href: "#services" },
                  { label: "Training Programs", href: "#services" },
                  { label: "Recruitment", href: "#services" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={item.href}
                      className="text-slate-400 hover:text-primary text-sm flex items-center gap-2 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Team", href: "#team" },
                  { label: "Insights", href: "#blogs" },
                  { label: "Careers", href: "#contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={item.href}
                      className="text-slate-400 hover:text-primary text-sm flex items-center gap-2 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold mb-6 text-lg">Get In Touch</h4>
              <div className="space-y-4">
                <motion.a
                  href="mailto:info@rvs-consultancy.in"
                  className="flex gap-3 hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm text-slate-300 group-hover:text-primary transition-colors">
                      info@rvs-consultancy.in
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+917604979189"
                  className="flex gap-3 hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm text-slate-300 group-hover:text-primary transition-colors">
                      +91 7604979189
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm text-slate-300 group-hover:text-primary transition-colors">
                      Thanjavur, India
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-slate-700/50 my-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ originX: 0 }}
          />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-sm text-slate-400 mb-2">
                © {currentYear} Royal Value Solutions. All rights reserved.
              </p>
              <p className="text-xs text-slate-500">
                Empowering businesses through Technology • Training • Talent
              </p>
            </div>

            <div className="flex gap-6 flex-wrap justify-center">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact Us", href: "#contact" },
              ].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-primary transition-colors"
                  whileHover={{ opacity: 0.8 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://spatakal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-primary transition-colors mt-6 md:mt-0"
              whileHover={{ opacity: 0.8 }}
            >
              Powered by
              <span className="text-primary font-semibold ml-1">Spatakal</span>
            </motion.a>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            className="mt-12 pt-12 border-t border-slate-700/50 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ↑ Back to Top
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import siebrains from "@/assets/sie-brains.png";
import joyit from "@/assets/JOY-IT.jpg";
import shell from "@/assets/shell-info.png";
import ubique from "@/assets/ubique.png";
import abacus from "@/assets/abacus.png";
import seyyone from "@/assets/seyyone.png";
import altez from "@/assets/altezza.webp";
import whiztek from "@/assets/whiztekcorp.png";
import artek from "@/assets/artech.png";
import talod from "@/assets/talodyn.jpg";
import sumeru from "@/assets/sumeru-global.png";
import techno from "@/assets/techno.png";
import resorce from "@/assets/resourse-tree.png";

const partners = [
  { name: "Abacus Services", url: "https://abacusservice.com", img: abacus },
  { name: "ALTEZZASYS", url: "https://altezzasys.com", img: altez },
  { name: "ARTECH", url: "https://artech.com", img: artek },
  { name: "Joy IT Consulting", url: "https://joyitconsulting.com", img: joyit },
  { name: "Resource Tree", url: "https://resourcetree.co.in", img: resorce },
  { name: "Shell Infotech", url: "https://shellinfotech.com", img: shell },
  { name: "Seyyone", url: "https://seyyone.com", img: seyyone },
  { name: "Sie Brains", url: "https://siebrains.com", img: siebrains },
  { name: "SUMERU GLOBAL", url: "https://sumeruglobal.com", img: sumeru },
  { name: "TALODYN", url: "https://in.linkedin.com/company/talodyn", img: talod },
  { name: "Techno-facts", url: "https://www.techno-facts.com", img: techno },
  { name: "Ubique Systems", url: "https://ubiquesystems.com", img: ubique },
  { name: "WHIZTEK", url: "https://whiztekcorp.com", img: whiztek },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="clients"
      className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            Our Trusted Clients
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with industry-leading organizations to deliver innovative solutions and exceptional value.
          </motion.p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative max-w-7xl mx-auto">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 120,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 sm:gap-12 w-max"
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.a
                  key={`${partner.name}-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 p-4 sm:p-6 min-w-[160px] sm:min-w-[200px] lg:min-w-[220px] flex flex-col items-center justify-center group"
                >
                  <motion.div
                    className="relative w-full h-24 sm:h-28 md:h-32 flex items-center justify-center mb-4 rounded-xl bg-white/50 backdrop-blur-sm border border-primary/10 group-hover:border-primary/30 group-hover:bg-white/70 transition-all"
                    whileHover={{
                      borderColor: "hsl(214 95% 45% / 0.3)",
                    }}
                  >
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xs sm:text-sm md:text-base font-semibold text-foreground text-center line-clamp-2 group-hover:text-primary transition-colors"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {partner.name}
                  </motion.h3>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/60 text-sm sm:text-base">
            Growing partnerships across industries | Committed to mutual success
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;

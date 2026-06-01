import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Advanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-primary/50 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent z-[2]" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Animated wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-[3]">
        <svg
          className="relative block w-full h-20 sm:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 C300,20 600,60 900,40 C1050,25 1150,50 1200,40 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
            animate={{
              d: [
                "M0,40 C300,20 600,60 900,40 C1050,25 1150,50 1200,40 L1200,120 L0,120 Z",
                "M0,50 C300,60 600,30 900,50 C1050,45 1150,35 1200,50 L1200,120 L0,120 Z",
                "M0,40 C300,20 600,60 900,40 C1050,25 1150,50 1200,40 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-[4] container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-20 flex items-center justify-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl w-full">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 hover:border-primary/50 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Welcome to RVS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Empowering Business
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Through Innovation
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Empowering Businesses through AI  Technology • Transformation • Training
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We deliver cutting-edge IT consulting, custom enterprise applications, strategic digital transformation, and industry-ready talent solutions to help businesses scale and innovate.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("#services")}
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-base font-semibold h-auto"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
               className="border-2 bg-primary border-white text-[#FFD700] hover:bg-white/10 px-8 py-6 text-base font-bold h-auto backdrop-blur-md transition-all"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto" 
          >
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Professionals Trained" },
              { number: "100+", label: "Projects Completed" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffd700] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

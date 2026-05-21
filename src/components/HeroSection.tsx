import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import rvsLogo from "@/assets/rvs-logo.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative  min-h-screen flex items-center overflow-hidden bg-black "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
<div
  className="absolute inset-0 z-0   bg-gradient-to-br  from-black/30 via-black/40 to-black/60 lg:from-black/50 lg:via-black/70 lg:to-black/80"/>
        
            {/* Animated Wave SVG */}
            <div className="absolute bottom-0 left-0 right-0 w-full">
              <svg
                className="relative block w-full h-32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,60 C300,20 600,100 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z"
                  fill="rgba(255, 255, 255, 0.05)"
                  animate={{
                    d: [
                      "M0,60 C300,20 600,100 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z",
                      "M0,50 C300,80 600,30 900,70 C1050,60 1150,40 1200,60 L1200,120 L0,120 Z",
                      "M0,60 C300,20 600,100 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M0,80 C300,40 600,120 900,70 C1050,50 1150,90 1200,70 L1200,120 L0,120 Z"
                  fill="rgba(255, 255, 255, 0.03)"
                  animate={{
                    d: [
                      "M0,80 C300,40 600,120 900,70 C1050,50 1150,90 1200,70 L1200,120 L0,120 Z",
                      "M0,70 C300,100 600,50 900,90 C1050,80 1150,60 1200,80 L1200,120 L0,120 Z",
                      "M0,80 C300,40 600,120 900,70 C1050,50 1150,90 1200,70 L1200,120 L0,120 Z",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </svg>
            </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
{/* LEFT */}
<motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative z-30 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
>
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-tight drop-shadow-xl">
    RVS
  </h1>

  <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground/90 drop-shadow-md">
    IT CONSULTING & SERVICES
  </h2>

  <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
    Empowering businesses through Technology • Training • Talent.
      </p>
  <p className="text-md md:text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
    We deliver modern IT solutions, corporate-ready training programs,
    and expert talent placement services.
  </p>

  <div className="flex flex-row sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
    <Button
      size="lg"
      onClick={() => scrollToSection("#services")}
      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl px-8 py-6 text-lg"
    >
      Explore Services <ArrowRight className="ml-2 h-5 w-5" />
    </Button>

    <Button
      size="lg"
      variant="outline"
      onClick={() => scrollToSection("#contact")}
      className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground/20 px-8 py-6 text-lg backdrop-blur-md"
    >
      Contact Us
    </Button>
  </div>
</motion.div>


          {/* RIGHT LOGO */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 flex justify-center"
          >
            <motion.img
              src={rvsLogo}
              alt="RVS Logo"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.03, 1],
                rotateZ: [0, 2, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="h-52 w-52 md:h-72 md:w-72 lg:h-96 lg:w-96 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

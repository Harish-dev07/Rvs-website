import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Award, Zap, Globe, Lock } from "lucide-react";

const initiatives = [
  {
    icon: Rocket,
    title: "Expanding Global Client Acquisition",
    description: "Through AI-driven digital solutions and strategic market expansion"
  },
  {
    icon: Zap,
    title: "Scaling IT Solutions Division",
    description: "With modern enterprise technologies and cloud-native architectures"
  },
  {
    icon: Users,
    title: "Building Strategic Partnerships",
    description: "For innovation and talent development with industry leaders"
  },
  {
    icon: Award,
    title: "Strengthening Certification Cell",
    description: "With industry-aligned programs and placement services"
  },
  {
    icon: Lock,
    title: "Expanding Advanced Training",
    description: "In AI, cloud, cybersecurity, and modern development technologies"
  },
  {
    icon: Globe,
    title: "Creating Scalable Solutions",
    description: "Future-ready solutions for enterprises across industries"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const WhatsNextSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="whats-next" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            Looking Ahead
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Our strategic roadmap for continued growth, innovation, and market leadership in AI-driven IT solutions and workforce development.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="relative bg-white/50 backdrop-blur-xl border border-primary/10 rounded-2xl p-8 h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  whileHover={{ y: -8, borderColor: "hsl(214 95% 45% / 0.3)" }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(135deg, hsl(214 95% 45% / 0.1), hsl(210 90% 55% / 0.05))"
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg"
                    animate={{ rotateY: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-10"
                    style={{
                      background: "linear-gradient(135deg, hsl(214 95% 45%), transparent)",
                      clipPath: "polygon(100% 0, 0 0, 100% 100%)"
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsNextSection;

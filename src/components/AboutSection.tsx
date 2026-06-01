import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, GraduationCap } from "lucide-react";
import officeImage from "@/assets/office_room.png";

const pillars = [
  {
    icon: Zap,
    title: "AI-Powered Technology Services",
    description: "We deliver end-to-end digital solutions through custom enterprise applications, cloud solutions, AI automation, analytics dashboards, and managed IT services."
  },
  {
    icon: Users,
    title: "IT Consulting & Digital Transformation",
    description: "Strategic IT consulting, cloud modernization, AI adoption, enterprise architecture, and scalable digital transformation solutions."
  },
  {
    icon: GraduationCap,
    title: "Hi-Fi Talent & Workforce Solutions",
    description: "Human Insight & Background Verification System integrated with AI-enabled training, assessment, certification, recruitment, and industry-ready workforce development."
  }
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 w-[600px] h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              Who We Are
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
            >
              RVS is an AI-driven technology company specializing in digital transformation, enterprise IT solutions, consulting, and modern workforce development. We help businesses scale through intelligent automation, cloud technologies, and innovative enterprise systems.
            </motion.p>
          </motion.div>

          {/* Core Pillars Section */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Pillars</h3>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                  >
                    <motion.div
                      className="p-8 rounded-2xl bg-white/50 backdrop-blur-xl border border-primary/10 h-full"
                      whileHover={{ 
                        y: -10, 
                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                        borderColor: "hsl(214 95% 45% / 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:shadow-lg"
                        animate={{ rotateY: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">{pillar.title}</h4>
                      <p className="text-foreground/70 leading-relaxed">{pillar.description}</p>
                      
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 pointer-events-none"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Mission & Office Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-12 border border-primary/20"
            >
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                To empower businesses through AI-driven IT solutions & HI-FI workforce transformation while enabling organizations to access quality engineers.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Focus on transforming aspiring and unemployed individuals into industry-ready professionals through advanced training, mentorship, and real-world exposure, contributing to national growth through innovation, technology, and digital excellence.
              </p>
            </motion.div>

            {/* Office Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl"
                whileHover={{ borderColor: "hsl(214 95% 45% / 0.5)" }}
              >
                <motion.img
                  src={officeImage}
                  alt="RVS Office"
                  className="w-full h-auto object-cover rounded-3xl"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />

                {/* Badge */}
                <motion.div
                  className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary font-semibold text-sm">Our Workspace</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white/50 backdrop-blur-xl border border-primary/10 rounded-3xl p-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Continuously pushing boundaries with cutting-edge AI and emerging technologies."
                },
                {
                  title: "Excellence",
                  description: "Delivering superior solutions and services that exceed client expectations."
                },
                {
                  title: "Integrity",
                  description: "Building trust through transparency, honesty, and ethical business practices."
                }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

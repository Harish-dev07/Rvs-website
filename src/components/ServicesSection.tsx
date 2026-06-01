import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Users, GraduationCap, ClipboardCheck, Bot, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "SAAS – Solutions as a Service",
    description: "Delivering AI-enabled enterprise software solutions using .NET and cloud technologies to automate business operations, improve productivity, and accelerate digital transformation.",
    features: [
      "Workflow automation",
      "AI chatbots",
      "Analytics dashboards",
      "Custom enterprise applications",
      "End-to-end support & maintenance"
    ],
    color: "hsl(214 95% 45%)"
  },
  {
    icon: Users,
    title: "CAAS – Consulting as a Service",
    description: "Providing strategic IT, AI, and digital transformation consulting services to help organizations optimize processes, modernize technology, and drive business innovation.",
    features: [
      "Strategic IT consulting",
      "Cloud modernization",
      "AI adoption strategies",
      "Enterprise architecture",
      "Scalable solutions design"
    ],
    color: "hsl(210 90% 55%)"
  },  
  {
    icon: GraduationCap,
    title: "TAAS – Training as a Service",
    description: "Empowering professionals and students with industry-focused technology training programs designed to create corporate-ready IT talent.",
    features: [
      "Practical learning modules",
      "Real-time projects",
      "AI-enabled skill development",
      "Certification programs",
      "Expert instructors"
    ],
    color: "hsl(43, 96%, 55%)"
  },
  {
    icon: ClipboardCheck,
    title: "HI-FI – Human Insight & Future Intelligence",
    description: "An AI-driven recruitment and background verification framework that combines human intelligence with smart analytics for intelligent hiring and secure verification.",
    features: [
      "AI recruitment framework",
      "Smart candidate evaluation",
      "Background verification",
      "Intelligent hiring solutions",
      "Talent analytics"
    ],
    color: "hsl(43, 96%, 55%)"
  },
  {
    icon: Bot,
    title: "AI-Enabled Culture",
    description: "We foster an AI-first culture focused on innovation, automation, continuous learning, and human + AI collaboration to build future-ready solutions.",
    features: [
      "AI-first mindset",
      "Innovation & automation",
      "Continuous learning",
      "Human-AI collaboration",
      "Intelligent workflows"
    ],
    color: "hsl(214 95% 45%)"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="group relative"
    >
      <motion.div
        className="relative bg-white/50 backdrop-blur-xl border border-primary/10 rounded-2xl p-8 h-full
          overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        whileHover={{ y: -8, borderColor: "hsl(214 95% 45% / 0.3)" }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg"
          style={{ backgroundColor: service.color }}
          animate={{ rotateY: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Icon className="h-7 w-7 text-white" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            {service.title}
          </h3>

          <p className="text-foreground/70 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                className="flex items-center gap-3 text-foreground/80"
              >
                <motion.span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: service.color }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Decorative corner */}
        <div
          className="absolute top-0 right-0 w-24 h-24 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${service.color}, transparent)`,
            clipPath: "polygon(100% 0, 0 0, 100% 100%)"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive AI-powered solutions designed to empower your business with cutting-edge technology, strategic consulting, and world-class talent.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

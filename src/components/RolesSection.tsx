import { motion } from "framer-motion";
import { Code2, FlaskRound, Users, Cpu, Zap, Shield } from "lucide-react";

const roles = [
  {
    icon: Zap,
    title: "IT Consulting & Digital Transformation",
    items: [
      "Custom Enterprise Application Development",
      "Managed IT Services & Technical Support",
      "Cloud Solutions & Migration Services",
      "SaaS Product Development & Support",
    ],
  },
  {
    icon: Code2,
    title: "Development & Automation",
    items: [
      "Workflow & Business Process Automation",
      "Enterprise Application Development",
      "Cloud-Native Development",
      "Full Stack Development",
    ],
  },
  {
    icon: Users,
    title: "Resource & Talent Solutions",
    items: [
      "Resource Augmentation",
      "Dedicated Development Teams",
      "Recruitment & Technical Screening",
      "Placement Services",
    ],
  },
  {
    icon: FlaskRound,
    title: "Training & Certification",
    items: [
      "Corporate Training Programs",
      "Up-skilling & Re-skilling",
      "Certification Programs",
      "Industry-Aligned Curriculum",
    ],
  },
  {
    icon: Shield,
    title: "Support & Optimization",
    items: [
      "Maintenance & Performance Optimization",
      "Technical Support & Troubleshooting",
      "System Monitoring & Management",
      "Security & Compliance Services",
    ],
  },
  {
    icon: Cpu,
    title: "Emerging Technologies",
    items: [
      "AI & Machine Learning Solutions",
      "Cloud Architecture",
      "DevOps & Automation",
      "Advanced Analytics & BI",
    ],
  },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RolesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden" id="roles">
      {/* Background animations */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* HEADER */}
        <motion.div 
          className="text-center mb-20 max-w-3xl"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Roles We Cover
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            From enterprise application development to emerging technologies, we cover the complete spectrum of IT and talent solutions to drive your business forward.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {roles.map((role, index) => {
            const Icon = role.icon;

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
                  {/* Background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(135deg, hsl(214 95% 45% / 0.1), hsl(210 90% 55% / 0.05))"
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <motion.div 
                    className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg"
                    animate={{ rotateY: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      {role.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {role.items.map((item, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="px-3 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
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
}

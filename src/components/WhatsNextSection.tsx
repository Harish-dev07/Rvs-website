import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, Cog, Handshake } from "lucide-react";

const initiatives = [
  {
    icon: Brain,
    number: "1",
    title: "AI-Powered Training Platform",
    description: "Launch proprietary AI learning platform"
  },
  {
    icon: Globe,
    number: "2",
    title: "Global Expansion",
    description: "Open offices in North America & Europe"
  },
  {
    icon: Cog,
    number: "3",
    title: "Automation Services",
    description: "Introduce RPA & intelligent automation"
  },
  {
    icon: Handshake,
    number: "4",
    title: "Industry Partnerships",
    description: "Partner with top educational & tech organizations"
  }
];

const WhatsNextSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="whats-next" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 md:px-14">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            What's Next?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our strategic roadmap for continued growth and innovation in the IT consulting space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.08,
                  rotateZ: [0, -2, 2, 0],
                  transition: { duration: 0.5 }
                }}
                className="relative glass-card rounded-xl p-6 cursor-pointer group"
              >
                <motion.div 
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 10px 20px rgba(33, 150, 243, 0.3)",
                      "0 10px 30px rgba(33, 150, 243, 0.5)",
                      "0 10px 20px rgba(33, 150, 243, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {initiative.number}
                </motion.div>
                <div className="mt-4">
                  <motion.div 
                    className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "hsl(214 95% 45% / 0.2)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{initiative.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsNextSection;

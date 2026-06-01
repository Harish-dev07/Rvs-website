import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 15, label: "Years of", suffix: "Experience" },
  { value: 500, label: "Professionals", suffix: "Trained" },
  { value: 100, label: "Projects", suffix: "Completed" },
  { value: 80, label: "Customer", suffix: "Satisfaction %" },
  { value: 13, label: "Partner", suffix: "Organizations" },
  { value: 4, label: "Growth Rate", suffix: "Last Quarter %" },
];

const Counter = ({
  value,
  label,
  suffix,
}: {
  value: number;
  label: string;
  suffix: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5 });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="text-center">
      <motion.span className="text-4xl sm:text-5xl md:text-6xl font-bold">
        {rounded}
      </motion.span>
      <span className="text-lg sm:text-xl font-semibold ml-1">+</span>
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
      id="summary"
      className="py-24 bg-gradient-to-br from-slate-900 via-primary/80 to-accent/70 relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Our Impact
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Proven results that demonstrate our commitment to excellence, customer satisfaction, and continuous innovation.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="relative bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-10 h-full hover:bg-white/20 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, borderColor: "rgba(255, 255, 255, 0.3)" }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                  }}
                />

                <div className="relative z-10 text-center">
                  {/* Counter Value */}
                  <div className="mb-4">
                    <Counter
                      value={stat.value}
                      label={stat.label}
                      suffix={stat.suffix}
                    />
                  </div>

                  {/* Label and Suffix */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.6 }}
                    className="text-center"
                  >
                    <p className="text-white/90 font-semibold text-sm sm:text-base">
                      {stat.label}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm font-light mt-1">
                      {stat.suffix}
                    </p>
                  </motion.div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.2), transparent)",
                      clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-white/80 text-lg font-light">
            Ready to join the growing number of businesses transforming with RVS?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

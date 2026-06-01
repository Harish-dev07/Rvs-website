import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/founder-wide1.png";

const teamMembers = [
  {
    name: "Raja Venkatesan",
    role: "Managing Director & Founder",
    experience: "15+ Years",
    description: "A visionary technology leader with extensive experience in IT strategy, digital transformation, consulting, and enterprise leadership. Spearheads business growth initiatives by leveraging AI-driven innovation, cloud technologies, and modern enterprise solutions.",
    vision: "Passionate about fostering a modern technology culture, empowering high-performing teams, and driving continuous innovation through agile methodologies and emerging technologies that accelerate business success.",
    email: "info@rvs-consultancy.in",
    phones: ["+91 7604979189", "+91 8248948143"],
    skills: ["IT Strategy", "Digital Transformation", "Enterprise Leadership", "AI Innovation", "Cloud Technologies", "Business Growth"],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
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
            Meet Our Leadership
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Led by a visionary founder dedicated to driving innovation, transformation, and exceptional growth through AI-powered solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <motion.div 
                className="relative bg-white/50 backdrop-blur-xl border border-primary/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ y: -8 }}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Left Content */}
                  <motion.div
                    className="flex flex-col justify-between"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <motion.div
                        className="inline-block mb-4"
                      >
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                          {member.role}
                        </span>
                      </motion.div>

                      <h3 className="text-4xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold mb-6 text-lg">{member.experience} of Experience</p>

                      <motion.p 
                        className="text-foreground/80 leading-relaxed mb-6"
                      >
                        {member.description}
                      </motion.p>

                      <motion.p 
                        className="text-foreground/70 leading-relaxed mb-8 italic border-l-4 border-primary pl-4"
                      >
                        "{member.vision}"
                      </motion.p>

                      {/* Skills */}
                      <div className="mb-8">
                        <p className="text-sm font-semibold text-foreground mb-4">Core Competencies:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Mail className="w-4 h-4 text-primary" />
                          <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors text-sm">
                            {member.email}
                          </a>
                        </div>
                        {member.phones.map((phone, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-foreground/70">
                            <Phone className="w-4 h-4 text-primary" />
                            <a href={`tel:${phone}`} className="hover:text-primary transition-colors text-sm">
                              {phone}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex gap-3 flex-wrap">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          onClick={() => (window.location.href = `mailto:${member.email}`)}
                          className="gap-2"
                        >
                          <Mail className="h-4 w-4" />
                          Email
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => (window.location.href = `tel:${member.phones[0].replace(/\s/g, '')}`)}
                          className="gap-2"
                        >
                          <Phone className="h-4 w-4" />
                          Call
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open("https://linkedin.com", "_blank")}
                          className="gap-2"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Right Side - Founder Image */}
                  <motion.div
                    className="relative hidden md:flex items-center justify-center"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-full h-full min-h-96 rounded-2xl overflow-hidden">
                      {/* Image Container */}
                      <motion.img
                        src={founderImage}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-2xl"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />

                      {/* Decorative elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 border-2 border-primary/40 rounded-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      
                      <motion.div
                        className="absolute bottom-4 left-4 w-12 h-12 border-2 border-accent/40 rounded-lg"
                        animate={{
                          scale: [1, 0.95, 1],
                          rotate: [0, -5, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-foreground/60 text-lg">
            Committed to excellence and innovation in every project we undertake.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

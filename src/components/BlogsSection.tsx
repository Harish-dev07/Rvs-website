import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Calendar, User, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "AI-Driven Digital Transformation: The Future of Enterprise IT",
    excerpt: "Explore how AI and machine learning are revolutionizing enterprise IT solutions and digital transformation strategies.",
    category: "AI & Automation",
    author: "Tech Team",
    date: "May 2026",
    readTime: "5 min read",
    image: "linear-gradient(135deg, hsl(214 95% 45%), hsl(210 90% 55%))"
  },
  {
    id: 2,
    title: "Cloud Migration: Best Practices for Enterprise Success",
    excerpt: "A comprehensive guide to planning and executing successful cloud migration projects without disrupting operations.",
    category: "Cloud Solutions",
    author: "Infrastructure Team",
    date: "May 2026",
    readTime: "7 min read",
    image: "linear-gradient(135deg, hsl(210 90% 55%), hsl(43, 96%, 55%))"
  },
  {
    id: 3,
    title: "Building Future-Ready Workforce: The Power of AI-Enabled Training",
    excerpt: "Discover how AI-enabled training programs are transforming workforce development and creating industry-ready professionals.",
    category: "Training & Development",
    author: "Talent Team",
    date: "April 2026",
    readTime: "6 min read",
    image: "linear-gradient(135deg, hsl(43, 96%, 55%), hsl(214 95% 45%))"
  },
  {
    id: 4,
    title: "Enterprise Applications: Custom Solutions for Complex Business Challenges",
    excerpt: "Learn how custom enterprise applications powered by .NET and cloud technologies solve real-world business problems.",
    category: "Development",
    author: "Dev Team",
    date: "April 2026",
    readTime: "8 min read",
    image: "linear-gradient(135deg, hsl(214 95% 45%), hsl(43, 96%, 55%))"
  },
  {
    id: 5,
    title: "HI-FI Recruitment Framework: AI-Powered Talent Acquisition",
    excerpt: "Understand how AI-driven recruitment frameworks are revolutionizing talent acquisition and candidate evaluation.",
    category: "HR Tech",
    author: "Talent Solutions",
    date: "March 2026",
    readTime: "6 min read",
    image: "linear-gradient(135deg, hsl(210 90% 55%), hsl(214 95% 45%))"
  },
  {
    id: 6,
    title: "Business Process Automation: Driving Efficiency and Innovation",
    excerpt: "Explore how workflow automation and intelligent systems optimize operations and unlock new business opportunities.",
    category: "Automation",
    author: "Operations Team",
    date: "March 2026",
    readTime: "7 min read",
    image: "linear-gradient(135deg, hsl(43, 96%, 55%), hsl(210 90% 55%))"
  }
];

const BlogCard = ({ blog, index }: { blog: typeof blogs[0], index: number }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="group cursor-pointer h-full"
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden bg-white/50 backdrop-blur-xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
        whileHover={{ y: -8 }}
      >
        {/* Image/Gradient Background */}
        <motion.div
          className="relative h-48 overflow-hidden bg-gradient-to-br"
          style={{ backgroundImage: blog.image }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
          />
          
          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-sm font-semibold text-primary border border-primary/20"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {blog.category}
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-foreground/70 text-sm mb-4 line-clamp-2 flex-grow">
            {blog.excerpt}
          </p>

          {/* Meta Information */}
          <div className="space-y-3 mb-4 pt-4 border-t border-primary/10">
            <div className="flex items-center gap-2 text-xs text-foreground/60">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
              <span className="text-foreground/40">•</span>
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/60">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
          </div>

          {/* Read More Link */}
          <motion.div
            className="flex items-center gap-2 text-primary font-semibold text-sm cursor-pointer"
            whileHover={{ x: 5 }}
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const totalSlides = Math.ceil(blogs.length / itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const displayedBlogs = blogs.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

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
    <section id="blogs" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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
            Latest Insights & Resources
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Stay updated with our latest articles, case studies, and insights on AI-driven transformation, cloud solutions, and workforce development.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Blog Cards - Animated Carousel */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {displayedBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            className="flex justify-center items-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={prev}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all border border-primary/20 hover:border-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Carousel Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 w-2 hover:bg-primary/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all border border-primary/20 hover:border-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Slide Counter */}
          <motion.div
            className="text-center mt-8 text-foreground/60 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            {currentIndex + 1} / {totalSlides}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

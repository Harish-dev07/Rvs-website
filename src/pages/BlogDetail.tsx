import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogs = [
  {
    id: 1,
    title: "AI-Driven Digital Transformation: The Future of Enterprise IT",
    excerpt:
      "Explore how AI and machine learning are revolutionizing enterprise IT solutions and digital transformation strategies.",
    category: "AI & Automation",
    author: "Tech Team",
    date: "May 2026",
    readTime: "5 min read",
    image: "linear-gradient(135deg, hsl(214 95% 45%), hsl(210 90% 55%))",
    content: `
      <h2>Introduction</h2>
      <p>The convergence of artificial intelligence and enterprise IT is creating unprecedented opportunities for digital transformation. Organizations are leveraging AI to automate complex processes, gain deeper insights from data, and accelerate innovation.</p>

      <h2>The AI Revolution in Enterprise IT</h2>
      <p>Modern enterprises face challenges in managing vast amounts of data, maintaining security, and scaling operations efficiently. AI-driven solutions address these challenges by providing intelligent automation, predictive analytics, and proactive risk management.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Automated Business Process Optimization</li>
        <li>Intelligent Data Analysis and Insights</li>
        <li>Enhanced Security and Threat Detection</li>
        <li>Predictive Maintenance and Optimization</li>
        <li>Personalized Customer Experiences</li>
      </ul>

      <h2>Implementation Strategy</h2>
      <p>Successful AI implementation requires a structured approach. Organizations should start with clear objectives, assess current capabilities, and gradually scale AI initiatives across the enterprise.</p>

      <h2>The Future</h2>
      <p>As AI technology matures, we expect to see even more sophisticated applications in enterprise IT, from autonomous system management to intelligent decision-making frameworks.</p>
    `,
  },
  {
    id: 2,
    title: "Cloud Migration: Best Practices for Enterprise Success",
    excerpt:
      "A comprehensive guide to planning and executing successful cloud migration projects without disrupting operations.",
    category: "Cloud Solutions",
    author: "Infrastructure Team",
    date: "May 2026",
    readTime: "7 min read",
    image: "linear-gradient(135deg, hsl(210 90% 55%), hsl(43, 96%, 55%))",
    content: `
      <h2>Understanding Cloud Migration</h2>
      <p>Cloud migration is a critical initiative for modern enterprises seeking scalability, cost efficiency, and operational agility. This guide covers best practices for successful migration.</p>

      <h2>Pre-Migration Planning</h2>
      <p>Before migrating to the cloud, organizations must conduct thorough assessments of their current infrastructure, applications, and data.</p>

      <h2>Migration Approaches</h2>
      <ul>
        <li>Rehost (Lift and Shift)</li>
        <li>Replatform (Lift, Tinker, and Shift)</li>
        <li>Refactor (Modernize)</li>
        <li>Repurchase (Move to SaaS)</li>
        <li>Retire (Decommission)</li>
      </ul>

      <h2>Post-Migration Optimization</h2>
      <p>After successful migration, focus on optimization, cost management, and ensuring compliance with organizational policies.</p>
    `,
  },
  {
    id: 3,
    title: "Building Future-Ready Workforce: The Power of AI-Enabled Training",
    excerpt:
      "Discover how AI-enabled training programs are transforming workforce development and creating industry-ready professionals.",
    category: "Training & Development",
    author: "Talent Team",
    date: "April 2026",
    readTime: "6 min read",
    image: "linear-gradient(135deg, hsl(43, 96%, 55%), hsl(214 95% 45%))",
    content: `
      <h2>The Changing Landscape of Workforce Development</h2>
      <p>The rapid evolution of technology demands a workforce that is continuously upskilling and adapting. AI-enabled training solutions offer personalized, scalable approaches to workforce development.</p>

      <h2>Benefits of AI-Enabled Training</h2>
      <ul>
        <li>Personalized Learning Paths</li>
        <li>Real-Time Performance Analytics</li>
        <li>Adaptive Content Delivery</li>
        <li>Faster Skill Acquisition</li>
        <li>Continuous Learning Culture</li>
      </ul>

      <h2>Implementation Best Practices</h2>
      <p>Organizations should integrate AI training tools with existing HR systems, ensure instructor support, and maintain focus on business outcomes.</p>

      <h2>Measuring Success</h2>
      <p>Track training effectiveness through skill assessments, project performance metrics, and career progression indicators.</p>
    `,
  },
  {
    id: 4,
    title: "Enterprise Applications: Custom Solutions for Complex Business Challenges",
    excerpt:
      "Learn how custom enterprise applications powered by .NET and cloud technologies solve real-world business problems.",
    category: "Development",
    author: "Dev Team",
    date: "April 2026",
    readTime: "8 min read",
    image: "linear-gradient(135deg, hsl(214 95% 45%), hsl(43, 96%, 55%))",
    content: `
      <h2>Introduction</h2>
      <p>Custom enterprise applications are essential for organizations seeking to gain competitive advantages and solve unique business challenges that off-the-shelf solutions cannot address.</p>

      <h2>Why Custom Applications Matter</h2>
      <p>Enterprise-specific challenges require tailored solutions. Custom applications provide the flexibility, scalability, and integration capabilities needed for enterprise success.</p>

      <h2>Technology Stack</h2>
      <p>.NET framework combined with cloud technologies provides a robust foundation for building scalable, secure, and maintainable enterprise applications.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Modular Architecture Design</li>
        <li>Comprehensive Testing Strategies</li>
        <li>Security-First Approach</li>
        <li>Scalability Planning</li>
        <li>Continuous Integration and Deployment</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: "HI-FI Recruitment Framework: AI-Powered Talent Acquisition",
    excerpt:
      "Understand how AI-driven recruitment frameworks are revolutionizing talent acquisition and candidate evaluation.",
    category: "HR Tech",
    author: "Talent Solutions",
    date: "March 2026",
    readTime: "6 min read",
    image: "linear-gradient(135deg, hsl(210 90% 55%), hsl(214 95% 45%))",
    content: `
      <h2>The Recruitment Challenge</h2>
      <p>Traditional recruitment processes are time-consuming and often miss qualified candidates. The HI-FI framework leverages AI to revolutionize how organizations identify and evaluate talent.</p>

      <h2>How HI-FI Works</h2>
      <ul>
        <li>AI-Powered Candidate Screening</li>
        <li>Skills Assessment and Matching</li>
        <li>Background Verification</li>
        <li>Cultural Fit Analysis</li>
        <li>Predictive Performance Indicators</li>
      </ul>

      <h2>Benefits for Organizations</h2>
      <p>Organizations using HI-FI experience faster hiring cycles, improved candidate quality, and better long-term employee retention.</p>

      <h2>Future of Recruitment</h2>
      <p>As AI continues to evolve, recruitment processes will become increasingly sophisticated, focusing on human potential and organizational fit.</p>
    `,
  },
  {
    id: 6,
    title: "Business Process Automation: Driving Efficiency and Innovation",
    excerpt:
      "Explore how workflow automation and intelligent systems optimize operations and unlock new business opportunities.",
    category: "Automation",
    author: "Operations Team",
    date: "March 2026",
    readTime: "7 min read",
    image: "linear-gradient(135deg, hsl(43, 96%, 55%), hsl(210 90% 55%))",
    content: `
      <h2>Understanding Business Process Automation</h2>
      <p>Business process automation (BPA) uses technology to eliminate repetitive tasks, reduce errors, and increase efficiency across organizational processes.</p>

      <h2>Key Automation Opportunities</h2>
      <ul>
        <li>Invoice Processing and Approval</li>
        <li>Customer Onboarding</li>
        <li>Data Entry and Validation</li>
        <li>Report Generation</li>
        <li>Compliance and Audit Tasks</li>
      </ul>

      <h2>Implementation Approach</h2>
      <p>Successful BPA requires process analysis, tool selection, change management, and continuous optimization.</p>

      <h2>ROI and Benefits</h2>
      <p>Organizations typically see 30-50% reduction in processing time, significant cost savings, and improved employee satisfaction through automation initiatives.</p>
    `,
  },
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === parseInt(id || "0"));

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Blog Not Found
          </h1>
          <Button onClick={() => navigate("/#blogs")}>Back to Blogs</Button>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-96 flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundImage: blog.image }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-4">
              <span className="text-primary font-semibold text-sm">
                {blog.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
              {blog.title}
            </h1>
          </motion.div>
        </motion.section>

        {/* Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="py-16 px-4"
        >
          <div className="max-w-3xl mx-auto">
            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 mb-12 pb-8 border-b border-border">
              <div className="flex items-center gap-2 text-foreground/60">
                <Calendar className="w-5 h-5" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60">
                <User className="w-5 h-5" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Blog Content */}
            <div
              className="prose prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{
                __html: blog.content
                  .replace(/<h2>/g, '<h2 className="text-3xl font-bold mt-8 mb-4">')
                  .replace(/<h3>/g, '<h3 className="text-2xl font-semibold mt-6 mb-3">')
                  .replace(/<p>/g, '<p className="text-foreground/80 leading-relaxed mb-4">')
                  .replace(/<ul>/g, '<ul className="list-disc list-inside space-y-2 mb-4">')
                  .replace(/<li>/g, '<li className="text-foreground/80">'),
              }}
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-foreground/70 mb-6">
                Discover how our solutions can help you achieve your digital transformation goals.
              </p>
              <Button
                onClick={() => navigate("/#contact")}
                className="px-8 py-3"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="py-16 px-4 bg-muted/30"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                More Insights
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedBlogs.map((relBlog) => (
                  <motion.button
                    key={relBlog.id}
                    onClick={() => navigate(`/blog/${relBlog.id}`)}
                    whileHover={{ y: -8 }}
                    className="text-left"
                  >
                    <div className="rounded-xl overflow-hidden bg-white/50 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col"
                    >
                      <div
                        className="h-40 bg-gradient-to-br"
                        style={{ backgroundImage: relBlog.image }}
                      />
                      <div className="p-6 flex-grow flex flex-col">
                        <span className="text-xs text-primary font-semibold mb-2">
                          {relBlog.category}
                        </span>
                        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
                          {relBlog.title}
                        </h3>
                        <p className="text-foreground/60 text-sm flex-grow mb-4 line-clamp-2">
                          {relBlog.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <span>{relBlog.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="py-12 text-center"
        >
          <Button
            variant="outline"
            onClick={() => navigate("/#blogs")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Blogs
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;

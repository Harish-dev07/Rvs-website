import { motion } from "framer-motion";
import { Code2, FlaskRound, Headphones, Cpu } from "lucide-react";

const roles = [
  {
    icon: Code2,
    bgIcon: Code2,
    title: "Development",
    items: [
      ".NET Developers",
      "Java Developers",
      "Full Stack Developers",
      "Frontend Developers",
      "Backend Developers",
      "Mobile App Developers",
    ],
  },
  {
    icon: FlaskRound,
    bgIcon: FlaskRound,
    title: "Testing & Quality",
    items: [
      "QA Engineers",
      "Test Automation Engineers",
      "Performance Testers",
      "Manual Testers",
      "Quality Analysts",
    ],
  },
  {
    icon: Headphones,
    bgIcon: Headphones,
    title: "Support & Operations",
    items: [
      "Help Desk Technicians",
      "IT Support Specialists",
      "System Administrators",
      "Network Administrators",
      "Database Administrators",
    ],
  },
  {
    icon: Cpu,
    bgIcon: Cpu,
    title: "Emerging Technologies",
    items: [
      "Cloud Engineers",
      "DevOps Engineers",
      "Data Scientists",
      "Machine Learning Engineers",
      "Cybersecurity Analysts",
      "AI Developers",
    ],
  },
];

export default function RolesSection() {
  return (
    <section className="py-20 bg-muted/30" id="roles">
      <div className="container mx-auto px-6 md:px-14 flex flex-col items-center">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            Roles We Cover
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            From traditional IT roles to modern emerging technologies, we cover the complete IT workforce spectrum.
          </p>
        </div>

        {/* 2×2 CENTER GRID */}
        <div className="grid md:grid-cols-2 gap-12 max-w-[1800px] mx-auto place-items-stretch ">
          {roles.map((role, index) => {
            const Icon = role.icon;
            const Bg = role.bgIcon;

            // animation directions
            const animations = [
              { x: -80, y: 0 },
              { x: 80, y: 0 },
              { x: -60, y: 60 },
              { x: 60, y: 60 },
            ];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: animations[index].x,
                  y: animations[index].y,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="relative bg-white/70 backdrop-blur-xl border border-blue-100 shadow-xl rounded-2xl p-8 w-full max-w-[900px] flex flex-col items-center text-center overflow-hidden"
              >
                {/* BACKGROUND BLUR ICON */}
                <Bg className="absolute -right-6 -bottom-4 w-40 h-40 text-blue-200 opacity-20" />

                {/* TOP ICON */}
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl mb-5">
                  <Icon className="w-7 h-7 text-blue-700" />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-blue-800 mb-5">
                  {role.title}
                </h3>

                {/* TAG PILLS */}
                <div className="flex flex-wrap justify-center gap-3">
                  {role.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

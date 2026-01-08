import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Co-Founder & AI Architect",
    company: "AI Agentic Verse",
    duration: "Current",
    type: "Venture",
    description:
      "Co-founded a specialized AI agency focused on delivering autonomous automation solutions for businesses.",
    achievements: [
      "Expert in end-to-end hosting and deployment of scalable AI web applications",
      "Architected smart chat agents and operational workflows using advanced LLM technologies",
      "Integrated AI tools with custom backend solutions for social media automation and call scheduling",
    ],
  },
  {
    title: "Full Stack Developer (Consultant)",
    company: "Neshama Training - Beit Yisrael International",
    duration: "Project Based",
    type: "Consulting",
    description:
      "Collaborated with Neshama Training to design, develop, and deploy the official digital platform.",
    achievements: [
      "Executed complete hosting strategy and deployment pipeline for global access",
      "Built a robust, globally accessible website with high performance and responsive design",
      "Assisted in LLM integration for multilingual podcast content across 70 languages",
    ],
    links: [
      { label: "Website", url: "#" },
      { label: "YouTube", url: "#" },
    ],
  },
  {
    title: "Technical Volunteer & Web Developer",
    company: "Harvest of Mercy Charity Organization",
    duration: "Volunteer",
    type: "Non-Profit",
    description:
      "Lead developer for the creation of the charity's online presence.",
    achievements: [
      "Designed and developed the organization's website to facilitate donations",
      "Ensured user-friendly navigation and global accessibility",
    ],
  },
];

// Smooth spring for hover effects
const smoothSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: (isEven: boolean) => ({ 
    opacity: 0, 
    x: isEven ? -60 : 60,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Timeline line animation based on scroll
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="experience" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 right-0 w-72 h-72 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 30, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary font-medium text-sm uppercase tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Experience
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Professional Journey
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Animated Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 overflow-hidden">
              <div className="absolute inset-0 bg-border/30" />
              <motion.div 
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-primary to-primary/50"
                style={{ height: lineHeight }}
              />
            </div>

            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.title}
                  variants={cardVariants}
                  custom={isEven}
                  className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot with pulse animation */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-6">
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-primary border-4 border-background relative"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4, type: "spring" }}
                    >
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ml-8 md:ml-0 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <motion.div 
                      className="glass p-6 rounded-2xl hover:border-primary/40 transition-all duration-300 will-change-transform relative overflow-hidden group"
                      whileHover={{ 
                        y: -6, 
                        boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.15)",
                      }}
                      transition={smoothSpring}
                    >
                      {/* Glassmorphism blur effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />

                      <div className="relative z-10">
                        <div
                          className={`flex items-center gap-2 mb-2 ${
                            isEven ? "md:justify-end" : ""
                          }`}
                        >
                          <motion.span 
                            className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px hsl(var(--primary) / 0.3)" }}
                            transition={smoothSpring}
                          >
                            {exp.type}
                          </motion.span>
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <div
                          className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                            isEven ? "md:justify-end" : ""
                          }`}
                        >
                          <Calendar size={14} />
                          {exp.duration}
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <ul
                          className={`space-y-2 text-sm text-muted-foreground ${
                            isEven ? "md:text-right" : ""
                          }`}
                        >
                          {exp.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                            >
                              <motion.span 
                                className="text-primary mt-1.5 flex-shrink-0"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              >
                                •
                              </motion.span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                        {exp.links && (
                          <div
                            className={`flex gap-3 mt-4 ${
                              isEven ? "md:justify-end" : ""
                            }`}
                          >
                            {exp.links.map((link) => (
                              <motion.a
                                key={link.label}
                                href={link.url}
                                className="flex items-center gap-1 text-sm text-primary hover:underline"
                                whileHover={{ x: 3 }}
                                transition={smoothSpring}
                              >
                                {link.label}
                                <ExternalLink size={12} />
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

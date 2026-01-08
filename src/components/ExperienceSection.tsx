import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Professional Journey
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ originY: 0 }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={cardVariants}
                custom={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                />

                {/* Content */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <motion.div 
                    className="glass p-6 rounded-2xl hover:border-primary/30 transition-colors"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <motion.span 
                        className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary"
                        whileHover={{ scale: 1.1 }}
                      >
                        {exp.type}
                      </motion.span>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <div
                      className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul
                      className={`space-y-2 text-sm text-muted-foreground ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                    {exp.links && (
                      <div
                        className={`flex gap-3 mt-4 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.links.map((link) => (
                          <motion.a
                            key={link.label}
                            href={link.url}
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                            whileHover={{ x: 3 }}
                          >
                            {link.label}
                            <ExternalLink size={12} />
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

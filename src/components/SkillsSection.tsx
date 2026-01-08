import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Layers,
  Wrench,
  Lightbulb,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "Next.js", "Node.js", "Vue.js", "Angular"],
  },
  {
    title: "AI Stack & Tools",
    icon: Brain,
    skills: ["Cursor", "Lovable", "Replit", "Windsurf", "Supabase"],
  },
  {
    title: "Methodologies",
    icon: Wrench,
    skills: ["Vibe Coding", "AI-Assisted Dev", "Prompt Engineering", "Git"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Adaptability", "Resilience", "Problem-Solving", "Leadership"],
  },
  {
    title: "Specializations",
    icon: Lightbulb,
    skills: ["AI Agents", "Automation", "Full Stack", "LLM Integration"],
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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Technical Competencies
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={smoothSpring}
                className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors group cursor-pointer will-change-transform"
              >
                <div className="flex items-center gap-4 mb-5">
                  <motion.div 
                    className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ rotate: 8 }}
                    transition={smoothSpring}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3 className="font-display font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + skillIndex * 0.04, duration: 0.25 }}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground cursor-default will-change-transform"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
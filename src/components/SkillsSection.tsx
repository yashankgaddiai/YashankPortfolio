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
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "Next.js", "Node.js", "Vue.js", "Angular"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "AI Stack & Tools",
    icon: Brain,
    skills: ["Cursor", "Lovable", "Replit", "Windsurf", "Supabase"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Methodologies",
    icon: Wrench,
    skills: ["Vibe Coding", "AI-Assisted Dev", "Prompt Engineering", "Git"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Adaptability", "Resilience", "Problem-Solving", "Leadership"],
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Specializations",
    icon: Lightbulb,
    skills: ["AI Agents", "Automation", "Full Stack", "LLM Integration"],
    color: "from-rose-500/20 to-red-500/20",
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
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 10,
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
            My Skills
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Technical Competencies
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ perspective: 1000 }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                custom={categoryIndex}
                className="glass p-6 rounded-2xl transition-colors relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-semibold text-lg">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        custom={skillIndex}
                        variants={skillVariants}
                        className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
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

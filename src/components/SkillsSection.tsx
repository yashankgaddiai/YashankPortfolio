import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Technical Competencies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground"
                    >
                      {skill}
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
};

export default SkillsSection;

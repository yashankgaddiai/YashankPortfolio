import { motion, useScroll, useTransform } from "framer-motion";
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
    skills: ["Full-Stack Development", "Blockchain & Web3 Development", "Artificial Intelligence (AI) & Machine Learning (ML)", "Large Language Model (LLM) Integration"],
    color: "from-rose-500/20 to-red-500/20",
  },
];

// Cinematic easing
const cinematicEase = [0.16, 1, 0.3, 1] as const;

const smoothSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
};

// Wave animation for cards
const cardVariants = {
  hidden: (i: number) => ({ 
    opacity: 0, 
    y: 80, 
    rotateX: -15,
    rotateY: i % 2 === 0 ? -10 : 10,
    scale: 0.9,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      delay: i * 0.1,
      ease: cinematicEase,
    },
  }),
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: cinematicEase,
    },
  }),
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary font-medium text-sm uppercase tracking-widest inline-block"
            initial={{ opacity: 0, y: 30, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: cinematicEase }}
          >
            My Skills
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: cinematicEase }}
          >
            Technical Competencies
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: cinematicEase }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1200 }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                custom={categoryIndex}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="glass p-6 rounded-2xl relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: categoryIndex * 0.2,
                        }}
                      >
                        <Icon size={24} />
                      </motion.div>
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
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground"
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
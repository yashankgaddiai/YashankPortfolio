import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroProfileImage from "@/assets/hero-profile.png";
import { 
  Code2, 
  Brain, 
  Layers, 
  Database, 
  Cpu,
  Terminal
} from "lucide-react";

// Cinematic easing
const cinematicEase = [0.16, 1, 0.3, 1] as const;

const smoothSpring = {
  type: "spring" as const,
  stiffness: 150,
  damping: 25,
  mass: 0.8,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 1,
      ease: cinematicEase,
    },
  },
};

// Slide from sides animation with blur
const slideFromLeft = {
  hidden: { opacity: 0, x: -100, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 1.2,
      ease: cinematicEase,
    },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 1.2,
      ease: cinematicEase,
    },
  },
};

// Scale and fade reveal for center content
const scaleReveal = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 1.4,
      ease: cinematicEase,
    },
  },
};

// Staggered text reveal
const textReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      delay: i * 0.15,
      ease: cinematicEase,
    },
  }),
};

// Tech stack icons
const techStack = [
  { icon: Code2, label: "React" },
  { icon: Layers, label: "Next.js" },
  { icon: Brain, label: "AI/LLM" },
  { icon: Database, label: "Supabase" },
  { icon: Cpu, label: "Node.js" },
  { icon: Terminal, label: "Python" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >


        {/* About Me Bio */}
        <motion.div
          className="mt-16 md:mt-20 max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: cinematicEase }}
        >
          <motion.h3
            className="text-primary font-semibold text-base uppercase tracking-widest mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h3>
          <motion.p
            className="text-foreground text-xl md:text-2xl leading-snug font-bold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: cinematicEase }}
          >
            I'm a technology-focused builder passionate about{" "}
            <span className="text-primary">Artificial Intelligence</span>, scalable systems, and modern web architecture. I specialize in designing intelligent digital solutions that are not just functional, but efficient, automated, and future-ready.
          </motion.p>
          <motion.p
            className="text-foreground text-xl md:text-2xl leading-snug font-bold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: cinematicEase }}
          >
            What drives me is solving real-world problems using clean architecture and smart system design. I enjoy working at the intersection of{" "}
            <span className="text-primary">AI and software development</span>, where ideas turn into high-impact products.
          </motion.p>
          <motion.p
            className="text-foreground text-xl md:text-2xl leading-snug font-bold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8, ease: cinematicEase }}
          >
            I believe technology should reduce friction, increase leverage, and create meaningful outcomes. My goal is to build systems that{" "}
            <span className="text-primary">think, adapt, and scale</span>.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
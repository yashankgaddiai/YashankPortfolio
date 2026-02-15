import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.png";
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
  stiffness: 200,
  damping: 30,
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
        {/* Main Content Grid */}
        <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
          
          {/* Large ABOUT Text Background - Parallax */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            style={{ y: backgroundY }}
          >
            <motion.span 
              className="text-[120px] md:text-[200px] lg:text-[280px] font-display font-bold text-foreground/[0.03] tracking-wider"
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: cinematicEase }}
            >
              ABOUT
            </motion.span>
          </motion.div>

          {/* Center Profile Image - Floating with parallax */}
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center"
            style={{ y: imageY, scale: imageScale }}
          >
            <motion.div 
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              variants={scaleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              {/* Animated glow ring */}
              <motion.div 
                className="absolute inset-[-20px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.3), transparent, hsl(var(--accent) / 0.3), transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/30 to-transparent blur-2xl" />
              <div className="w-full h-full rounded-full overflow-hidden relative z-10 border-2 border-primary/20">
                <img
                  src={profileImage}
                  alt="Yashank Gaddi"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/60 via-transparent to-transparent z-20 pointer-events-none" />
            </motion.div>
            
            {/* Name below image */}
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mt-6"
              variants={textReveal}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Yashank Gaddi
            </motion.h2>

            {/* Entrepreneur title */}
            <motion.p 
              className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mt-2 text-center"
              variants={textReveal}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Entrepreneur
            </motion.p>
            
            {/* Tagline below */}
            <motion.p 
              className="text-center text-sm text-muted-foreground/80 mt-3 italic"
              variants={textReveal}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Building the AI-First Future
            </motion.p>
          </motion.div>

        </div>
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
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: cinematicEase }}
          >
            I'm a technology-focused builder passionate about{" "}
            <span className="text-primary">Artificial Intelligence</span>, scalable systems, and modern web architecture. I specialize in designing intelligent digital solutions that are not just functional, but efficient, automated, and future-ready.
          </motion.p>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: cinematicEase }}
          >
            What drives me is solving real-world problems using clean architecture and smart system design. I enjoy working at the intersection of{" "}
            <span className="text-primary">AI and software development</span>, where ideas turn into high-impact products.
          </motion.p>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
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
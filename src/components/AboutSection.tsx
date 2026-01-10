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
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: cinematicEase,
    },
  },
};

// Slide from sides animation
const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 1,
      ease: cinematicEase,
    },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 1,
      ease: cinematicEase,
    },
  },
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
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: cinematicEase }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: cinematicEase }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8, ease: cinematicEase }}
            >
              Entrepreneur
            </motion.p>
            
            {/* Tagline below */}
            <motion.p 
              className="text-center text-sm text-muted-foreground/80 mt-3 italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8, ease: cinematicEase }}
            >
              Building the AI-First Future
            </motion.p>
          </motion.div>

          {/* Left Column - Slides from left */}
          <motion.div 
            className="absolute left-0 top-1/2 -translate-y-1/2 max-w-xs space-y-8 hidden md:block"
            style={{ y: textY }}
            variants={slideFromLeft}
          >
            {/* Experience */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={smoothSpring}
            >
              <motion.h3 
                className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Experience
              </motion.h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Co-Founder at AI Agentic Verse
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Full Stack Developer for international organizations
                </motion.p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={smoothSpring}
            >
              <motion.h3 
                className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Achievements
              </motion.h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  Built platforms reaching 70+ languages
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  Deployed AI solutions for global clients
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Slides from right */}
          <motion.div 
            className="absolute right-0 top-1/2 -translate-y-1/2 max-w-xs space-y-8 text-right hidden md:block"
            style={{ y: textY }}
            variants={slideFromRight}
          >
            {/* Tech Stack */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: -10 }}
              transition={smoothSpring}
            >
              <motion.h3 
                className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Tech Stack
              </motion.h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  React, Next.js, Node.js
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Python, TypeScript
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  AI/LLM Integration
                </motion.p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: -10 }}
              transition={smoothSpring}
            >
              <motion.h3 
                className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Contact
              </motion.h3>
              <div className="text-sm text-muted-foreground">
                <motion.a 
                  href="#contact" 
                  className="text-primary hover:underline inline-block"
                  whileHover={{ scale: 1.05, x: -5 }}
                  transition={smoothSpring}
                >
                  Visit Contact Section
                </motion.a>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-8">
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Experience</h3>
              <p className="text-xs text-muted-foreground">Co-Founder at AI Agentic Verse</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Achievements</h3>
              <p className="text-xs text-muted-foreground">Built platforms reaching 70+ languages</p>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6 text-right" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Tech Stack</h3>
              <p className="text-xs text-muted-foreground">React, Next.js, Python</p>
            </motion.div>
          </motion.div>
        </div>

        {/* My Creative Stack - Bottom Section */}
        <motion.div 
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: cinematicEase }}
        >
          <motion.p 
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            My Creative Stack
          </motion.p>
          
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {/* Tech Icons */}
            <div className="flex items-center gap-6 md:gap-8">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 30, rotateY: -30 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6, ease: cinematicEase }}
                    whileHover={{ scale: 1.2, y: -8, rotateY: 15 }}
                    className="group relative cursor-pointer"
                    style={{ perspective: 500 }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl bg-card border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.4)" }}
                    >
                      <Icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                    <motion.span 
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ y: 5 }}
                      whileHover={{ y: 0 }}
                    >
                      {tech.label}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>

            {/* Description Text */}
            <motion.p 
              className="flex-1 text-muted-foreground text-sm md:text-base max-w-md ml-auto"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8, ease: cinematicEase }}
            >
              I leverage a vast ecosystem of{" "}
              <motion.span 
                className="text-primary"
                whileHover={{ textShadow: "0 0 20px hsl(var(--primary) / 0.5)" }}
              >
                industry standard tools
              </motion.span> and
              cutting edge <motion.span 
                className="text-primary"
                whileHover={{ textShadow: "0 0 20px hsl(var(--primary) / 0.5)" }}
              >
                AI integration
              </motion.span> to
              transform ambitious ideas into high impact digital experiences.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.png";
import { 
  Code2, 
  Brain, 
  Layers, 
  Database, 
  Cpu,
  Terminal
} from "lucide-react";

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
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
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
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Main Content Grid */}
        <div className="relative min-h-[600px] md:min-h-[700px]">
          
          {/* Large ABOUT Text Background */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[120px] md:text-[200px] lg:text-[280px] font-display font-bold text-foreground/[0.03] tracking-wider">
              ABOUT
            </span>
          </motion.div>

          {/* Center Profile Image */}
          <motion.div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              whileHover={{ scale: 1.03 }}
              transition={smoothSpring}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/20 to-transparent blur-2xl" />
              <img
                src={profileImage}
                alt="Yashank Gaddi"
                className="w-full h-full object-cover rounded-full border-2 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Tagline below image */}
            <motion.p 
              className="text-center text-sm text-muted-foreground mt-4 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Building the AI-First Future
            </motion.p>
          </motion.div>

          {/* Left Column */}
          <motion.div 
            className="absolute left-0 top-1/2 -translate-y-1/2 max-w-xs space-y-8 hidden md:block"
            variants={containerVariants}
          >
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Experience
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Co-Founder at AI Agentic Verse</p>
                <p>Full Stack Developer for international organizations</p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Achievements
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Built platforms reaching 70+ languages</p>
                <p>Deployed AI solutions for global clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="absolute right-0 top-1/2 -translate-y-1/2 max-w-xs space-y-8 text-right hidden md:block"
            variants={containerVariants}
          >
            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Tech Stack
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>React, Next.js, Node.js</p>
                <p>Python, TypeScript</p>
                <p>AI/LLM Integration</p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Contact
              </h3>
              <div className="text-sm text-muted-foreground">
                <a 
                  href="#contact" 
                  className="text-primary hover:underline"
                >
                  Visit Contact Section
                </a>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Interests
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>AI Automation</p>
                <p>Entrepreneurship</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout - Shows on small screens */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-8">
          {/* Left Side */}
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

          {/* Right Side */}
          <motion.div className="space-y-6 text-right" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Tech Stack</h3>
              <p className="text-xs text-muted-foreground">React, Next.js, Python</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Interests</h3>
              <p className="text-xs text-muted-foreground">AI Automation, Entrepreneurship</p>
            </motion.div>
          </motion.div>
        </div>

        {/* My Creative Stack - Bottom Section */}
        <motion.div 
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            My Creative Stack
          </p>
          
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {/* Tech Icons */}
            <div className="flex items-center gap-6 md:gap-8">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="group relative cursor-pointer"
                  >
                    <div className="p-3 rounded-xl bg-card border border-border/50 group-hover:border-primary/50 transition-colors">
                      <Icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {tech.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Description Text */}
            <motion.p 
              className="flex-1 text-muted-foreground text-sm md:text-base max-w-md ml-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              I leverage a vast ecosystem of{" "}
              <span className="text-primary">industry standard tools</span> and
              cutting edge <span className="text-primary">AI integration</span> to
              transform ambitious ideas into high impact digital experiences.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
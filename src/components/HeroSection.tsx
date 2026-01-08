import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Code2, Brain, Layout, Rocket } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

const services = [
  { icon: Code2, label: "Full Stack" },
  { icon: Brain, label: "AI Agents" },
  { icon: Layout, label: "Interfaces" },
  { icon: Rocket, label: "Automation" },
];

// Smooth spring for hover effects
const smoothSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

// Text reveal animation
const textRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    rotateX: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.7 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Large glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 120, 50, 0.08) 0%, transparent 70%)',
            y: backgroundY,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200, 80, 40, 0.06) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative min-h-screen z-20">
        {/* Content Layer */}
        <motion.div 
          className="container mx-auto px-6 lg:px-12 relative z-20 min-h-screen flex flex-col justify-center items-start pt-20 pb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Title with text reveal */}
          <motion.div className="space-y-8 max-w-lg" style={{ perspective: 800 }}>
            {/* Name - Large display font with reveal animation */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95]"
            >
              <motion.span 
                className="block"
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(25, 95%, 60%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                YASHANK
              </motion.span>
              <motion.span 
                className="block text-6xl md:text-7xl lg:text-8xl" 
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15 }}
                style={{
                  background: 'linear-gradient(135deg, hsl(25, 95%, 60%) 0%, hsl(var(--accent)) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                GADDI
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-light"
              variants={itemVariants}
            >
              AI Developer
            </motion.p>
            
            {/* Tagline */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground/80 max-w-md leading-relaxed"
              variants={itemVariants}
            >
              Building intelligent solutions that bridge the gap between human creativity and machine capability.
            </motion.p>

            {/* Service Tags - 2x2 Grid with stagger + glow hover */}
            <motion.div
              className="grid grid-cols-2 gap-3 max-w-sm"
              variants={itemVariants}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.label}
                    custom={index}
                    variants={tagVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 30px rgba(255, 120, 50, 0.3)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={smoothSpring}
                    className="px-4 py-3 rounded-2xl flex items-center gap-3 cursor-pointer will-change-transform relative overflow-hidden group"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 120, 50, 0.4)',
                    }}
                  >
                    {/* Glow overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={smoothSpring}
                      className="relative z-10"
                    >
                      <Icon size={18} className="text-primary" />
                    </motion.div>
                    <span className="text-sm font-medium text-foreground/90 relative z-10">
                      {service.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Connect Button - Bottom Center with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <MagneticButton strength={0.4}>
            <motion.a
              href="#contact"
              className="flex flex-col items-center gap-2 group"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1 will-change-transform relative overflow-hidden"
                style={{
                  background: 'rgba(80, 60, 50, 0.6)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
                whileHover={{
                  boxShadow: '0 0 40px rgba(255, 120, 50, 0.4)',
                  borderColor: 'rgba(255, 120, 50, 0.5)',
                }}
                transition={smoothSpring}
              >
                {/* Ripple effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: [0, 1.5], 
                    opacity: [0.5, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/90 relative z-10">
                  Connect
                </span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  className="text-foreground/70 relative z-10"
                >
                  <ArrowDown size={14} />
                </motion.div>
              </motion.div>
            </motion.a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

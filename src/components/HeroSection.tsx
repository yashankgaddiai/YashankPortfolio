import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Code2, Brain, Layout, Rocket } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import MagneticButton from "@/components/MagneticButton";

const services = [
  { icon: Code2, label: "Full Stack" },
  { icon: Brain, label: "AI Agents" },
  { icon: Layout, label: "Interfaces" },
  { icon: Rocket, label: "Automation" },
];

// Cinematic easing - slow in, smooth out
const cinematicEase = [0.16, 1, 0.3, 1] as const;

// Smooth spring for hover effects
const smoothSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 30,
};

// Letter animation for cinematic text reveal
const letterVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1.2,
      delay: i * 0.05,
      ease: cinematicEase,
    },
  }),
};

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.2,
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

const tagVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.8, rotateY: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.7,
      delay: 1.6 + i * 0.12,
      ease: cinematicEase,
    },
  }),
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mouse position for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);
  const gradientRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse move handler for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Split text into letters for animation
  const firstNameLetters = "YASHANK".split("");
  const lastNameLetters = "GADDI".split("");

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Cinematic fade from dark overlay */}
      <motion.div
        className="fixed inset-0 bg-background z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: cinematicEase }}
      />

      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 80% at 50% 50%, 
              hsl(25 95% 53% / 0.08) 0%, 
              hsl(35 90% 55% / 0.04) 40%, 
              transparent 70%)`,
            rotate: gradientRotate,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Floating particles with enhanced motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
              background: `hsl(${25 + i * 5} 95% ${50 + i * 3}% / ${0.2 + i * 0.05})`,
            }}
            animate={{
              y: [0, -60 - i * 10, 0],
              x: [0, 20 * Math.sin(i), 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Large cinematic glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 120, 50, 0.1) 0%, transparent 60%)',
            x: smoothMouseX,
            y: smoothMouseY,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200, 80, 40, 0.08) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="relative min-h-screen z-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Content Layer */}
        <motion.div 
          className="container mx-auto px-6 lg:px-12 relative z-20 min-h-screen flex flex-col justify-center items-start pt-20 pb-32"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Left Content - Title with cinematic letter reveal */}
          <motion.div 
            className="space-y-10 max-w-2xl" 
            style={{ 
              perspective: 1200,
              x: useTransform(() => smoothMouseX.get() * -0.5),
              y: useTransform(() => smoothMouseY.get() * -0.5),
            }}
          >
            {/* Name - Large display font with cinematic letter-by-letter reveal */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.95]"
                style={{ perspective: 800 }}
              >
                {/* First name with staggered letters */}
                <span className="block overflow-hidden">
                  {firstNameLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate={isLoaded ? "visible" : "hidden"}
                      className="inline-block"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(25, 95%, 60%) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                
                {/* Last name with staggered letters */}
                <span className="block overflow-hidden text-8xl md:text-9xl lg:text-[10rem]">
                  {lastNameLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i + firstNameLetters.length}
                      variants={letterVariants}
                      initial="hidden"
                      animate={isLoaded ? "visible" : "hidden"}
                      className="inline-block"
                      style={{
                        background: 'linear-gradient(135deg, hsl(25, 95%, 60%) 0%, hsl(var(--accent)) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </div>
            
            {/* Subtitle with typewriter-like reveal */}
            <motion.div
              className="overflow-hidden"
              variants={itemVariants}
            >
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light tracking-wide"
                initial={{ opacity: 0, y: 30, letterSpacing: "0.3em" }}
                animate={isLoaded ? { opacity: 1, y: 0, letterSpacing: "0.05em" } : {}}
                transition={{ duration: 1, delay: 1, ease: cinematicEase }}
              >
                AI Developer
              </motion.p>
            </motion.div>
            
            {/* Tagline with cinematic fade */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground/80 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.3, ease: cinematicEase }}
            >
              Building intelligent solutions that bridge the gap between human creativity and machine capability.
            </motion.p>

            {/* Service Tags - 2x2 Grid with 3D entrance */}
            <motion.div
              className="grid grid-cols-2 gap-4 max-w-md"
              style={{ perspective: 1000 }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.label}
                    custom={index}
                    variants={tagVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    whileHover={{ 
                      scale: 1.08, 
                      rotateY: 5,
                      boxShadow: '0 0 40px rgba(255, 120, 50, 0.4)',
                      borderColor: 'rgba(255, 120, 50, 0.8)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={smoothSpring}
                    className="px-5 py-4 rounded-2xl flex items-center gap-3 cursor-pointer will-change-transform relative overflow-hidden group"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 120, 50, 0.3)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Animated glow overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30"
                      initial={{ opacity: 0, x: '-100%' }}
                      whileHover={{ opacity: 1, x: '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10"
                    >
                      <Icon size={22} className="text-primary" />
                    </motion.div>
                    <span className="text-base md:text-lg font-medium text-foreground/90 relative z-10">
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1, ease: cinematicEase }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <MagneticButton strength={0.5}>
            <motion.a
              href="#contact"
              className="flex flex-col items-center gap-2 group"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-24 h-24 rounded-full flex flex-col items-center justify-center gap-1 will-change-transform relative overflow-hidden"
                style={{
                  background: 'rgba(80, 60, 50, 0.5)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{
                  boxShadow: '0 0 60px rgba(255, 120, 50, 0.5)',
                  borderColor: 'rgba(255, 120, 50, 0.6)',
                }}
                transition={smoothSpring}
              >
                {/* Rotating glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.3), transparent)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/90 relative z-10">
                  Connect
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="text-foreground/70 relative z-10"
                >
                  <ArrowDown size={16} />
                </motion.div>
              </motion.div>
            </motion.a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Code2, Brain, Link, Cpu } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import MagneticButton from "@/components/MagneticButton";

const services = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Link, label: "Blockchain & Web3" },
  { icon: Brain, label: "AI & ML" },
  { icon: Cpu, label: "LLM Integration" },
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
  hidden: { opacity: 0, y: 80, rotateX: -60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1.4,
      delay: 0.3 + i * 0.06,
      ease: cinematicEase,
    },
  }),
};

// Role title animation
const roleVariants = {
  hidden: { opacity: 0, y: 30, letterSpacing: "0.5em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.3em",
    transition: {
      duration: 1.2,
      delay: 1.2,
      ease: cinematicEase,
    },
  },
};

// Tagline animation - appears last with emphasis
const taglineVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      delay: 1.6,
      ease: cinematicEase,
    },
  },
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
      delay: 2.2 + i * 0.12,
      ease: cinematicEase,
    },
  }),
};

// Separate component for scroll-responsive particles (hooks must be at top level)
const FloatingParticle = ({ 
  index, 
  scrollYProgress 
}: { 
  index: number; 
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const particleScrollY = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, (index % 2 === 0 ? 1 : -1) * (100 + index * 30)]
  );
  const particleScrollX = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, (index % 3 === 0 ? 1 : -1) * (50 + index * 15)]
  );
  const particleScrollScale = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [1, 1.2 + (index % 3) * 0.2, 0.8]
  );
  const particleScrollOpacity = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    [0.3 + index * 0.04, 0.6 + index * 0.03, 0.4, 0.1]
  );

  return (
    <motion.div
      className="absolute rounded-full will-change-transform"
      style={{
        left: `${5 + index * 8}%`,
        top: `${15 + (index % 4) * 20}%`,
        width: 3 + (index % 4) * 2,
        height: 3 + (index % 4) * 2,
        background: `hsl(${20 + index * 4} 95% ${48 + index * 3}% / ${0.25 + index * 0.04})`,
        x: particleScrollX,
        y: particleScrollY,
        scale: particleScrollScale,
        opacity: particleScrollOpacity,
      }}
      animate={{
        y: [0, -50 - index * 8, 0],
        x: [0, 15 * Math.sin(index * 0.8), 0],
        scale: [1, 1.3 + (index % 3) * 0.1, 1],
      }}
      transition={{
        duration: 6 + index * 0.6,
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
    />
  );
};

// Separate component for service tags with scroll-responsive animations
const ServiceTag = ({
  service,
  index,
  scrollYProgress,
  isLoaded,
}: {
  service: { icon: typeof Code2; label: string };
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  isLoaded: boolean;
}) => {
  const Icon = service.icon;
  const tagStartFade = 0.1 + index * 0.05;
  const tagEndFade = 0.25 + index * 0.05;
  const tagOpacity = useTransform(scrollYProgress, [tagStartFade, tagEndFade], [1, 0]);
  const tagY = useTransform(scrollYProgress, [tagStartFade, tagEndFade], ["0%", "20%"]);
  const tagScale = useTransform(scrollYProgress, [tagStartFade, tagEndFade], [1, 0.9]);

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
        opacity: tagOpacity,
        y: tagY,
        scale: tagScale,
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 120, 50, 0.3)',
        transformStyle: 'preserve-3d',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Subtle pulsing glow border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 0px rgba(255, 120, 50, 0)',
            '0 0 20px rgba(255, 120, 50, 0.25)',
            '0 0 0px rgba(255, 120, 50, 0)',
          ],
        }}
        transition={{
          duration: 2.5 + index * 0.3,
          repeat: Infinity,
          delay: index * 0.4,
          ease: "easeInOut",
        }}
      />
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
      <span className="text-base md:text-lg font-semibold text-foreground/95 relative z-10">
        {service.label}
      </span>
    </motion.div>
  );
};

// Main HeroSection component - hooks moved to child components for proper React rules
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
  
  // Name-specific scroll animations - faster fade for dramatic effect
  const nameOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const nameScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const nameY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-10%"]);
  const nameBlur = useTransform(scrollYProgress, [0, 0.3], [0, 8]);
  
  // Role title parallax - medium speed, slightly delayed fade
  const roleOpacity = useTransform(scrollYProgress, [0.05, 0.35], [1, 0]);
  const roleY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const roleScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);
  
  // Tagline parallax - slowest speed, latest fade for depth layering
  const taglineOpacity = useTransform(scrollYProgress, [0.08, 0.4], [1, 0]);
  const taglineY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const taglineScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);

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

      {/* Floating particles with scroll-responsive motion */}
      <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <FloatingParticle key={i} index={i} scrollYProgress={scrollYProgress} />
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
      </motion.div>

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
            }}
          >
            {/* Name - Premium display typography with cinematic reveal */}
            <motion.div 
              className="overflow-hidden"
              style={{
                opacity: nameOpacity,
                scale: nameScale,
                y: nameY,
                filter: useTransform(nameBlur, (v) => `blur(${v}px)`),
              }}
            >
              <motion.h1
                className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.95] tracking-[0.02em]"
                style={{ perspective: 800, fontFamily: "'Cinzel', serif" }}
              >
                {/* First name */}
                <span className="block overflow-hidden whitespace-nowrap">
                  {firstNameLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate={isLoaded ? "visible" : "hidden"}
                      className="inline-block"
                      style={{
                        background: 'linear-gradient(180deg, hsl(36, 33%, 94%) 0%, hsl(25, 95%, 65%) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 60px hsl(25, 95%, 53% / 0.4))',
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                
                {/* Last name - larger, bolder */}
                <span className="block overflow-hidden whitespace-nowrap text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[-0.02em] mt-[-0.1em]">
                  {lastNameLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i + firstNameLetters.length}
                      variants={letterVariants}
                      initial="hidden"
                      animate={isLoaded ? "visible" : "hidden"}
                      className="inline-block"
                      style={{
                        background: 'linear-gradient(180deg, hsl(25, 95%, 60%) 0%, hsl(35, 90%, 55%) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 80px hsl(25, 95%, 53% / 0.5))',
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </motion.div>
            
            {/* Role Title - AI DEVELOPER with enhanced visibility and parallax */}
            <motion.div
              className="overflow-hidden mt-6 md:mt-8"
              variants={roleVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              style={{
                opacity: roleOpacity,
                y: roleY,
                scale: roleScale,
              }}
            >
              <motion.div className="relative inline-block">
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase"
                  style={{ 
                    fontFamily: "'Outfit', sans-serif",
                    color: 'hsl(36, 33%, 94%)',
                    textShadow: '0 0 40px hsl(25, 95%, 53% / 0.4)',
                  }}
                >
                  AI Developer
                </motion.p>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-transparent"
                  initial={{ width: 0 }}
                  animate={isLoaded ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 1.4, ease: cinematicEase }}
                />
              </motion.div>
            </motion.div>
            
            {/* Tagline - BOLD and highly visible with slower parallax */}
            <motion.div
              className="mt-8 md:mt-10 relative"
              variants={taglineVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              style={{
                opacity: taglineOpacity,
                y: taglineY,
                scale: taglineScale,
              }}
            >
              {/* Subtle glow background behind tagline */}
              <div 
                className="absolute inset-0 -m-4 rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(25, 95%, 53% / 0.08) 0%, transparent 70%)',
                }}
              />
              <motion.p
                className="relative text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-semibold leading-relaxed max-w-xl"
                style={{ 
                  fontFamily: "'Outfit', sans-serif",
                  color: 'hsl(36, 33%, 92%)',
                  textShadow: '0 2px 30px hsl(0, 0%, 0% / 0.6)',
                }}
              >
                Building intelligent solutions that bridge the gap between human creativity and machine capability.
              </motion.p>
            </motion.div>

            {/* Service Tags - 2x2 Grid with 3D entrance and staggered scroll fade */}
            <motion.div
              className="grid grid-cols-2 gap-4 max-w-md mt-8 md:mt-10"
              style={{ perspective: 1000 }}
            >
              {services.map((service, index) => (
                <ServiceTag
                  key={service.label}
                  service={service}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  isLoaded={isLoaded}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Connect Button - Bottom Center with magnetic effect and cinematic reveal */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            delay: 2.8, 
            duration: 1.2, 
            ease: cinematicEase,
          }}
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
                initial={{ boxShadow: '0 0 0px rgba(255, 120, 50, 0)' }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(255, 120, 50, 0.2)',
                    '0 0 40px rgba(255, 120, 50, 0.4)',
                    '0 0 20px rgba(255, 120, 50, 0.2)',
                  ],
                }}
                whileHover={{
                  boxShadow: '0 0 60px rgba(255, 120, 50, 0.5)',
                  borderColor: 'rgba(255, 120, 50, 0.6)',
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  ...smoothSpring,
                }}
              >
                {/* Rotating glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.3), transparent)',
                  }}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 360, opacity: 1 }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    opacity: { delay: 3, duration: 0.8 },
                  }}
                />
                {/* Inner pulse ring */}
                <motion.div
                  className="absolute inset-2 rounded-full border border-primary/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 3.2, duration: 0.6, ease: cinematicEase }}
                />
                <motion.span 
                  className="text-[10px] font-semibold uppercase tracking-widest text-foreground/90 relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.4, duration: 0.6, ease: cinematicEase }}
                >
                  Connect
                </motion.span>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    y: [0, 8, 0],
                  }}
                  transition={{ 
                    opacity: { delay: 3.6, duration: 0.5 },
                    y: {
                      delay: 3.6,
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut",
                    },
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
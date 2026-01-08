import { motion } from "framer-motion";
import { ArrowDown, Code2, Brain, Layout, Rocket } from "lucide-react";
import profileImage from "@/assets/profile-centered.png";

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

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.5 + i * 0.08,
    },
  }),
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Hero Background Image with baked-in gradient */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={profileImage}
          alt="Yashank Gaddi"
          className="w-[85%] h-[85%] object-contain object-center"
          whileHover={{ scale: 1.015 }}
          transition={smoothSpring}
        />
        {/* Gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </motion.div>

      {/* Floating particles/glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 120, 50, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200, 80, 40, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
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
          {/* Left Content - Title */}
          <motion.div className="space-y-8 max-w-lg">
            {/* Title - Large display font like reference */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95]"
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                AI
              </motion.span>
              <motion.span 
                className="italic text-7xl md:text-8xl lg:text-9xl block" 
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Developer
              </motion.span>
            </motion.h1>

            {/* Service Tags - 2x2 Grid below title */}
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
                      scale: 1.03, 
                      borderColor: 'rgba(255, 120, 50, 0.7)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={smoothSpring}
                    className="px-4 py-3 rounded-2xl flex items-center gap-3 cursor-pointer will-change-transform"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 120, 50, 0.4)',
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 8 }}
                      transition={smoothSpring}
                    >
                      <Icon size={18} className="text-primary" />
                    </motion.div>
                    <span className="text-sm font-medium text-foreground/90">
                      {service.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Connect Button - Bottom Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.a
            href="#contact"
            className="flex flex-col items-center gap-2 group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={smoothSpring}
          >
            <motion.div 
              className="w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1 will-change-transform"
              style={{
                background: 'rgba(80, 60, 50, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
              whileHover={{
                boxShadow: '0 0 30px rgba(255, 120, 50, 0.3)',
                borderColor: 'rgba(255, 120, 50, 0.4)',
              }}
              transition={smoothSpring}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/90">
                Connect
              </span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.8,
                  ease: "easeInOut"
                }}
                className="text-foreground/70"
              >
                <ArrowDown size={14} />
              </motion.div>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
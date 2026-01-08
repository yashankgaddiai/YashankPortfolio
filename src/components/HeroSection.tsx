import { motion } from "framer-motion";
import { ArrowDown, Code2, Brain, Layout, Rocket } from "lucide-react";
import profileImage from "@/assets/profile-transparent.png";

const services = [
  { icon: Code2, label: "Full Stack" },
  { icon: Brain, label: "AI Agents" },
  { icon: Layout, label: "Web Apps" },
  { icon: Rocket, label: "Automation" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Warm Gradient Background */}
      <div className="absolute inset-0 bg-gradient-warm" />

      {/* Main Content Container */}
      <div className="relative min-h-screen">
        {/* Profile Image - Centered like reference */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-10"
        >
          <div className="relative">
            {/* Warm color overlay to blend with hero gradient */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-color"
              style={{
                background: 'linear-gradient(180deg, hsl(35, 60%, 75%, 0.15) 0%, hsl(30, 50%, 70%, 0.25) 100%)',
              }}
            />
            <img
              src={profileImage}
              alt="Yashank Gaddi"
              className="h-[65vh] lg:h-[80vh] w-auto object-contain object-bottom"
              style={{
                filter: 'sepia(0.08) saturate(1.1) brightness(1.02)',
              }}
            />
            {/* Gradient fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        </motion.div>

        {/* Content Layer */}
        <div className="container mx-auto px-6 relative z-20 min-h-screen flex flex-col justify-center pt-20">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Content - Title & Service Tags */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.9]"
              >
                AI
                <br />
                <span className="italic">Developer</span>
              </motion.h1>

              {/* Service Tags - 2x2 Grid like reference */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-2 gap-3 max-w-sm"
              >
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.label}
                      className="glass px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-foreground/10 transition-colors cursor-pointer"
                    >
                      <Icon size={18} className="text-primary" />
                      <span className="text-sm font-medium text-foreground/90">
                        {service.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Middle - Empty space for image */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Right Content - Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="lg:col-span-1 hidden lg:flex lg:justify-end lg:items-start lg:pt-32"
            >
              <div 
                className="p-6 rounded-2xl max-w-sm"
                style={{
                  background: 'linear-gradient(135deg, hsl(30, 70%, 45%, 0.85), hsl(35, 60%, 40%, 0.75))',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                  Building the future with AI.
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Crafting intelligent solutions that help businesses scale and
                  automate with confidence. I build autonomous agents and scalable
                  web platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Connect Button - Bottom Center like reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <a
            href="#contact"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-md border border-foreground/30 flex items-center justify-center hover:bg-foreground/30 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-foreground">
                Connect
              </span>
            </div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-foreground/60"
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
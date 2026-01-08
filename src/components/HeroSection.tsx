import { motion } from "framer-motion";
import { ArrowDown, FileText, Shirt, Layout, TrendingUp } from "lucide-react";
import profileImage from "@/assets/profile-centered.png";

const services = [
  { icon: FileText, label: "Full Stack" },
  { icon: Shirt, label: "AI Agents" },
  { icon: Layout, label: "Interfaces" },
  { icon: TrendingUp, label: "Automation" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Hero Background Image with baked-in gradient */}
      <div className="absolute inset-0">
        <img
          src={profileImage}
          alt="Yashank Gaddi"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative min-h-screen z-20">

        {/* Content Layer */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20 min-h-screen flex flex-col justify-end pb-40 pt-20">
          {/* Left Content - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-lg"
          >
            {/* Title - Large display font like reference */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95]"
            >
              <span className="block">AI</span>
              <span className="italic text-7xl md:text-8xl lg:text-9xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Developer
              </span>
            </motion.h1>

            {/* Service Tags - 2x2 Grid below title */}
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
                    className="px-4 py-3 rounded-2xl flex items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-foreground/10"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 120, 50, 0.4)',
                    }}
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
            <div 
              className="w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(80, 60, 50, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/90">
                Connect
              </span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-foreground/70"
              >
                <ArrowDown size={14} />
              </motion.div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

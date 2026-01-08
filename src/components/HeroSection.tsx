import { motion } from "framer-motion";
import { ArrowDown, FileText, Shirt, Layout, TrendingUp } from "lucide-react";
import profileImage from "@/assets/profile-hero-deep.png";

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
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src={profileImage}
          alt="Yashank Gaddi"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient fade at bottom for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative min-h-screen z-10">

        {/* Content Layer */}
        <div className="container mx-auto px-6 relative z-20 min-h-screen flex flex-col justify-center pt-20">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Content - Title & Service Tags */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-12"
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

              {/* Service Tags - 2x2 Grid like reference */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-2 gap-4 max-w-md"
              >
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.label}
                      className="px-5 py-4 rounded-xl flex items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-foreground/10"
                      style={{
                        background: 'rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 120, 50, 0.3)',
                      }}
                    >
                      <Icon size={20} className="text-primary" />
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

            {/* Right Content - Floating Card like reference */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="lg:col-span-1 hidden lg:flex lg:justify-end lg:items-start lg:pt-40"
            >
              <div 
                className="p-6 rounded-2xl max-w-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(180, 100, 50, 0.7), rgba(150, 80, 40, 0.6))',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 150, 80, 0.2)',
                }}
              >
                <h3 
                  className="font-semibold text-xl mb-3 text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Building the future with AI.
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Design solutions that communicate with clarity and intent. I craft
                  bold, modern AI agents that help businesses stand out with confidence.
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

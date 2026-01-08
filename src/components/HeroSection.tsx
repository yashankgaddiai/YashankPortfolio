import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Warm Gradient Background */}
      <div className="absolute inset-0 bg-gradient-warm" />

      {/* Main Content Container */}
      <div className="relative min-h-screen flex items-end lg:items-center">
        {/* Profile Image - Centered like reference, emerging from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none"
        >
          <div className="relative">
            {/* Warm color overlay to blend white background with gradient - reduced opacity */}
            <div className="absolute inset-0 bg-gradient-warm mix-blend-multiply opacity-60" />
            <img
              src={profileImage}
              alt="Yashank Gaddi"
              className="h-[70vh] lg:h-[85vh] w-auto object-contain object-bottom"
              style={{
                filter: 'contrast(1.08) saturate(1.15) brightness(1.02)',
              }}
            />
            {/* Gradient fade at bottom for seamless blend */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
            {/* Side gradient fades - softer for better blend */}
            <div className="absolute inset-y-0 left-0 w-16" 
              style={{ background: 'linear-gradient(to right, hsl(25, 90%, 40%, 0.3), transparent)' }} 
            />
            <div className="absolute inset-y-0 right-0 w-16"
              style={{ background: 'linear-gradient(to left, hsl(35, 85%, 50%, 0.3), transparent)' }} 
            />
          </div>
        </motion.div>

        {/* Content Layer */}
        <div className="container mx-auto px-6 relative z-10 pb-32 lg:pb-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen pt-24 lg:pt-0">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:max-w-lg"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight"
                >
                  AI
                  <br />
                  <span className="italic">Developer</span>
                </motion.h1>

                {/* Service Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  {["Full Stack", "AI Agents", "Web Apps", "Automation"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="glass px-4 py-2 rounded-full text-sm font-medium text-foreground/90 flex items-center gap-2"
                      >
                        <Sparkles size={14} className="text-primary" />
                        {tag}
                      </span>
                    )
                  )}
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
                >
                  <a href="#projects">View My Work</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-foreground/30 text-foreground hover:bg-foreground/10 rounded-full px-8"
                >
                  <a href="#contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Card - Right side, positioned over the image area */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="hidden lg:block lg:self-center"
            >
              <div className="glass-strong p-6 rounded-2xl max-w-sm">
                <h3 className="font-display font-semibold text-xl mb-3">
                  Building the future with AI.
                </h3>
                <p className="text-muted-foreground">
                  Crafting intelligent solutions that help businesses scale and
                  automate with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

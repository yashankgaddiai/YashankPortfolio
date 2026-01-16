import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Co-Founder & AI Architect",
    company: "AI Agentic Verse",
    year: "2024",
    description:
      "Co-founded a specialized AI agency focused on delivering autonomous automation solutions, architecting smart chat agents and operational workflows using advanced LLM technologies.",
  },
  {
    title: "Full Stack Developer",
    company: "Beit Yisrael International",
    year: "2024",
    description:
      "Designed, developed, and deployed the official digital platform with high performance and responsive design, including LLM integration for multilingual podcast content across 70 languages.",
  },
  {
    title: "GHL Web Designer & Funnel Developer",
    company: "Neshama Training",
    year: "NOW",
    description:
      "Designing and developing a career-focused EdTech platform with AI-assisted learning, focusing on conversions, automation, and seamless user experience with GoHighLevel.",
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Timeline line animation based on scroll
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section 
      ref={sectionRef} 
      id="experience" 
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ backgroundColor: "#050507" }}
    >
      {/* Decorative purple orb in top left */}
      <div 
        className="absolute top-8 left-8 w-16 h-16 rounded-full opacity-60"
        style={{
          background: "linear-gradient(135deg, #B87CFF 0%, #8B5CF6 100%)",
          filter: "blur(1px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Matching reference typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em]"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', 'Segoe UI', 'Roboto', sans-serif",
              color: "#E6E6EB",
            }}
          >
            My career &
          </h2>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] italic"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', 'Segoe UI', 'Roboto', sans-serif",
              color: "#B87CFF",
            }}
          >
            experience
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-6xl mx-auto relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="grid grid-cols-12 gap-4 md:gap-8 mb-20 md:mb-28 items-start"
            >
              {/* Left Column - Job Title & Company */}
              <div className="col-span-12 md:col-span-3 text-left">
                <h3 
                  className="text-xl md:text-2xl font-medium tracking-[-0.01em] leading-tight mb-2"
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', 'Segoe UI', 'Roboto', sans-serif",
                    color: "#E6E6EB",
                  }}
                >
                  {exp.title}
                </h3>
                <p 
                  className="text-base md:text-lg font-normal"
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', 'Segoe UI', 'Roboto', sans-serif",
                    color: "#B87CFF",
                  }}
                >
                  {exp.company}
                </p>
              </div>

              {/* Center Column - Year with Timeline */}
              <div className="col-span-12 md:col-span-2 flex flex-col items-center relative order-first md:order-none mb-4 md:mb-0">
                <span 
                  className="text-3xl md:text-4xl font-medium tracking-[-0.01em] mb-4"
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', 'Segoe UI', 'Roboto', sans-serif",
                    color: "#E6E6EB",
                  }}
                >
                  {exp.year}
                </span>
                
                {/* Timeline Line with Glow */}
                <div className="relative flex-1 w-px hidden md:block" style={{ minHeight: "120px" }}>
                  {/* Static background line */}
                  <div 
                    className="absolute inset-0 w-px"
                    style={{ 
                      background: "linear-gradient(180deg, #B87CFF 0%, rgba(184, 124, 255, 0.3) 100%)",
                    }}
                  />
                  
                  {/* Animated progress line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 w-px"
                    style={{ 
                      height: lineHeight,
                      background: "#B87CFF",
                      boxShadow: "0 0 20px 2px rgba(184, 124, 255, 0.6)",
                    }}
                  />
                  
                  {/* Glowing dot at the end - only on last item */}
                  {index === experiences.length - 1 && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ 
                          backgroundColor: "#B87CFF",
                          boxShadow: "0 0 20px 8px rgba(184, 124, 255, 0.5), 0 0 40px 16px rgba(184, 124, 255, 0.3)",
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right Column - Description */}
              <div className="col-span-12 md:col-span-7 text-left">
                <p 
                  className="text-base leading-relaxed tracking-[0.01em]"
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', 'Segoe UI', 'Roboto', sans-serif",
                    color: "#9A9AA6",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle gradient fade at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(184, 124, 255, 0.03) 100%)",
        }}
      />
    </section>
  );
};

export default ExperienceSection;

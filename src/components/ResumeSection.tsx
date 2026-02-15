import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const cinematicEase = [0.16, 1, 0.3, 1] as const;

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: cinematicEase }}
        >
          <motion.span className="text-primary font-medium text-sm uppercase tracking-widest inline-block">
            Resume
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            View or Download Resume
          </motion.h2>
          <motion.p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Get a comprehensive overview of my professional background, skills, and experience.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: cinematicEase }}
        >
          <div className="glass p-8 md:p-12 rounded-2xl text-center space-y-8">
            {/* Resume icon */}
            <motion.div
              className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FileText size={40} className="text-primary" />
            </motion.div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Yashank Gaddi</h3>
              <p className="text-muted-foreground text-sm">
                AI Developer • Full-Stack Engineer • Entrepreneur
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-6"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Eye size={18} />
                    View Resume
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 gap-2 px-6"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download size={18} />
                    Download PDF
                  </a>
                </Button>
              </motion.div>
            </div>

            <p className="text-xs text-muted-foreground/60">
              Last updated: February 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/profile.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={profileImage}
                alt="Yashank Gaddi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 glass-strong p-6 rounded-xl grid grid-cols-2 gap-6"
            >
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">2+</span>
                <span className="text-sm text-muted-foreground">Years Coding</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold">
              Yashank Gaddi
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Adaptable and resilient Computer Science Engineering undergraduate with
              strong proficiency in <span className="text-primary font-medium">Full Stack Development</span> and{" "}
              <span className="text-primary font-medium">AI Integration</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proven experience as a Co-Founder of an AI agency and technical lead for
              international non-profit organizations. Expert in "Vibe Coding" and
              leveraging modern AI-native IDEs like Cursor, Lovable, and Replit to build
              autonomous agents and scalable web platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Seeking opportunities to apply technical leadership in software development
              and artificial intelligence. Passionate about creating solutions that
              make a real impact.
            </p>

            {/* Contact Info */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:yashankgaddi.ai@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  yashankgaddi.ai@gmail.com
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

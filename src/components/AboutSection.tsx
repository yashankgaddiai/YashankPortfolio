import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/profile.png";

// Smooth spring for hover effects
const smoothSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
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
            variants={itemVariants}
            className="relative"
          >
            <motion.div 
              className="relative aspect-[4/5] rounded-2xl overflow-hidden will-change-transform"
              whileHover={{ scale: 1.02 }}
              transition={smoothSpring}
            >
              <img
                src={profileImage}
                alt="Yashank Gaddi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="absolute -bottom-8 -right-8 glass-strong p-6 rounded-xl grid grid-cols-2 gap-6 will-change-transform"
            >
              <div className="text-center">
                <motion.span 
                  className="block text-3xl font-display font-bold text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  2+
                </motion.span>
                <span className="text-sm text-muted-foreground">Years Coding</span>
              </div>
              <div className="text-center">
                <motion.span 
                  className="block text-3xl font-display font-bold text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  10+
                </motion.span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 
              className="text-2xl md:text-3xl font-display font-semibold"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Yashank Gaddi
            </motion.h3>
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
            <motion.div 
              className="pt-6 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-3 text-muted-foreground"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={smoothSpring}
              >
                <MapPin size={18} className="text-primary" />
                <span>Hyderabad, India</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-muted-foreground"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={smoothSpring}
              >
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:yashankgaddi.ai@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  yashankgaddi.ai@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex gap-4 pt-4"
                variants={itemVariants}
              >
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={smoothSpring}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={smoothSpring}
                >
                  <Github size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
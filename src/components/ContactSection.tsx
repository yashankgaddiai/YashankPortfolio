import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-warm opacity-10"
        animate={{ 
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Let's Build Something Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? Looking for an AI solution? Let's connect and
            make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 6 }}
                transition={smoothSpring}
              >
                <motion.div 
                  className="p-4 rounded-xl bg-primary/10 text-primary"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={smoothSpring}
                >
                  <Mail size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:yashankgaddi.ai@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    yashankgaddi.ai@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 6 }}
                transition={smoothSpring}
              >
                <motion.div 
                  className="p-4 rounded-xl bg-primary/10 text-primary"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={smoothSpring}
                >
                  <Phone size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+918074210219"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    +91-8074210219
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 6 }}
                transition={smoothSpring}
              >
                <motion.div 
                  className="p-4 rounded-xl bg-primary/10 text-primary"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={smoothSpring}
                >
                  <MapPin size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-medium">Hyderabad, India</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={smoothSpring}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={smoothSpring}
                >
                  <Github size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form 
              onSubmit={handleSubmit} 
              className="glass p-8 rounded-2xl space-y-6 will-change-transform"
              whileHover={{ scale: 1.005 }}
              transition={smoothSpring}
            >
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 border-border resize-none focus:border-primary transition-colors"
                  required
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={smoothSpring}
              >
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
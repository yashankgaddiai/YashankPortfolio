import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import MagneticButton from "@/components/MagneticButton";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      {/* Background Gradient Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-warm opacity-5"
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span 
            className="text-primary font-medium text-sm uppercase tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's Build Something Together
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind? Looking for an AI solution? Let's connect and
            make it happen.
          </motion.p>
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
              {[
                { icon: Mail, label: "Email", value: "yashankgaddi.ai@gmail.com", href: "mailto:yashankgaddi.ai@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91-8074210219", href: "tel:+918074210219" },
                { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null },
              ].map((contact, index) => (
                <motion.div 
                  key={contact.label}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  transition={smoothSpring}
                >
                  <motion.div 
                    className="p-4 rounded-xl bg-primary/10 text-primary relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={smoothSpring}
                  >
                    <contact.icon size={24} className="relative z-10" />
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                <MagneticButton strength={0.3}>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-4 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors relative overflow-hidden group"
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={smoothSpring}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="relative z-10"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-4 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors relative overflow-hidden group"
                    whileHover={{ scale: 1.1, rotate: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={smoothSpring}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative z-10"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.a>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Animated closing statement */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-border/50"
            >
              <motion.div
                className="flex items-center gap-2 mb-3"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Available for projects</span>
              </motion.div>
              <p className="text-muted-foreground text-sm">
                Ready to transform your ideas into reality with cutting-edge AI solutions. 
                Let's create something extraordinary together.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form 
              onSubmit={handleSubmit} 
              className="glass p-8 rounded-2xl space-y-6 will-change-transform relative overflow-hidden"
              whileHover={{ boxShadow: "0 20px 50px -20px hsl(var(--primary) / 0.15)" }}
              transition={smoothSpring}
            >
              {/* Form background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0"
                animate={{ opacity: focusedField ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="relative z-10"
                >
                  <label
                    htmlFor={field.id}
                    className={`block text-sm font-medium mb-2 transition-colors ${
                      focusedField === field.id ? "text-primary" : ""
                    }`}
                  >
                    {field.label}
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === field.id ? 1.01 : 1,
                    }}
                    transition={smoothSpring}
                  >
                    <Input
                      id={field.id}
                      type={field.type}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.id]: e.target.value })
                      }
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.placeholder}
                      className="bg-background/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                    />
                  </motion.div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative z-10"
              >
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 transition-colors ${
                    focusedField === "message" ? "text-primary" : ""
                  }`}
                >
                  Message
                </label>
                <motion.div
                  animate={{
                    scale: focusedField === "message" ? 1.01 : 1,
                  }}
                  transition={smoothSpring}
                >
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-border resize-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative z-10"
              >
                <MagneticButton strength={0.2} className="w-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={smoothSpring}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden group"
                      size="lg"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                      {/* Button glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                </MagneticButton>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

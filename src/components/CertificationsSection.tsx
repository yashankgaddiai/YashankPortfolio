import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const cinematicEase = [0.16, 1, 0.3, 1] as const;

const certifications = [
  {
    title: "AI & Machine Learning Specialization",
    issuer: "Certification Authority",
    date: "2024",
    link: "#",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Certification Authority",
    date: "2023",
    link: "#",
  },
  {
    title: "Blockchain & Web3 Development",
    issuer: "Certification Authority",
    date: "2023",
    link: "#",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "Certification Authority",
    date: "2023",
    link: "#",
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    rotateX: -10,
    scale: 0.9,
    filter: "blur(10px)",
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: cinematicEase,
    },
  }),
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-0 w-[350px] h-[350px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            Certifications
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Professional Credentials
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-6 rounded-2xl group relative overflow-hidden"
              whileHover={{ y: -4, boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.15)" }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <Award size={24} />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                  <p className="text-muted-foreground/60 text-xs mt-1">{cert.date}</p>
                  {cert.link && cert.link !== "#" && (
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1 mt-3"
                      whileHover={{ x: 3 }}
                    >
                      View Certificate <ExternalLink size={12} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

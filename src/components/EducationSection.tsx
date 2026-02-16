import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const cinematicEase = [0.16, 1, 0.3, 1] as const;

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Lovely Professional University, Punjab",
    duration: "Aug 2023 – Present",
    highlights: [
      "Current Standing: CGPA 6.5",
    ],
  },
  {
    degree: "Intermediate Education",
    field: "General Studies",
    institution: "Nano Junior College, Hyderabad",
    duration: "May 2021 – April 2023",
    highlights: [
      "Percentage: 70%",
    ],
  },
  {
    degree: "Matriculation (High School)",
    field: "General Studies",
    institution: "Johnson Grammar School, Hyderabad",
    duration: "Completed 2021",
    highlights: [
      "Percentage: 80%",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: cinematicEase },
  },
};

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} id="education" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
          y: backgroundY,
        }}
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
            Education
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Academic Background
          </motion.h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
              whileHover={{ y: -4, boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.15)" }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.field}</p>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                    <p className="text-muted-foreground/70 text-sm flex items-center gap-1 mt-1">
                      <BookOpen size={14} /> {edu.duration}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 ml-16 text-sm text-muted-foreground">
                  {edu.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

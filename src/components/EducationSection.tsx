import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (Computer Science & Engineering)",
    institution: "Lovely Professional University, Punjab",
    duration: "Aug 2023 – Present",
    details: "CGPA: 6.5",
    focus: "Object Oriented Programming, Web Development, Data Structures",
  },
  {
    degree: "Intermediate Education",
    institution: "Nano Junior College, Hyderabad",
    duration: "May 2021 – April 2023",
    details: "Percentage: 70%",
  },
  {
    degree: "Matriculation (High School)",
    institution: "Johnson Grammar School, Hyderabad",
    duration: "Completed 2021",
    details: "Percentage: 80%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Academic Background
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass p-6 rounded-2xl hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-semibold mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.duration}
                    </span>
                    <span>{edu.details}</span>
                  </div>
                  {edu.focus && (
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="text-foreground font-medium">Focus:</span> {edu.focus}
                    </p>
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

export default EducationSection;

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import aiAgenticVerseImage from "@/assets/aiagenticverse.png";
import beitYisraelImage from "@/assets/beityisrael.png";

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  image: string;
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI Agentic Verse",
    description:
      "A comprehensive AI automation platform enabling businesses to deploy smart chat agents and operational workflows.",
    problem: "Businesses struggle with manual repetitive tasks",
    solution: "Autonomous AI agents for automation",
    result: "Streamlined operations and reduced manual work",
    tech: ["React", "Node.js", "OpenAI", "Supabase"],
    image: aiAgenticVerseImage,
    link: "https://aiagenticverse.com/",
    featured: true,
  },
  {
    title: "Beit Yisrael International",
    description: "Official digital platform with multilingual podcast content generation across 70 languages.",
    problem: "Global organization needed multilingual reach",
    solution: "LLM-powered content translation system",
    result: "Content accessible in 70+ languages",
    tech: ["Next.js", "LLM Integration", "Cloud Hosting"],
    image: beitYisraelImage,
    link: "https://www.beityisraelinternational.com/",
  },
  {
    title: "Harvest of Mercy",
    description:"Charity organization website designed to facilitate donations and global outreach with accessible navigation.",
    problem: "Charity needed online presence for donations",
    solution: "User-friendly donation platform",
    result: "Increased global donations and reach",
    tech: ["React", "Tailwind CSS", "Payment Integration"],
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    link: "https://www.harvestofmercy.org/",
  },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Smooth spring config for hover effects
const smoothSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

// Case study modal animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: {
      duration: 0.3,
    }
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary font-medium text-sm uppercase tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-12"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden bg-gradient-warm p-1 will-change-transform cursor-pointer"
                whileHover={{ scale: 1.008 }}
                transition={smoothSpring}
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-strong rounded-[22px] overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <motion.div
                      className="aspect-video lg:aspect-auto overflow-hidden relative group"
                    >
                      <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover will-change-transform"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                      />
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                      >
                        <motion.span
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          className="text-sm font-medium text-primary flex items-center gap-2"
                        >
                          View Case Study <ChevronRight size={16} />
                        </motion.span>
                      </motion.div>
                    </motion.div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                          <Sparkles className="text-primary" size={20} />
                        </motion.div>
                        <span className="text-primary font-medium text-sm">Featured Project</span>
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      <div className="space-y-2 mb-6 text-sm">
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <span className="text-primary font-medium">Problem:</span> {project.problem}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.35 }}
                        >
                          <span className="text-primary font-medium">Solution:</span> {project.solution}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          <span className="text-primary font-medium">Result:</span> {project.result}
                        </motion.p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                            whileHover={{ 
                              scale: 1.1, 
                              boxShadow: "0 0 15px hsl(var(--primary) / 0.3)",
                            }}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary will-change-transform cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.link && (
                          <motion.div 
                            whileHover={{ scale: 1.03 }} 
                            whileTap={{ scale: 0.98 }} 
                            transition={smoothSpring}
                          >
                            <Button
                              className="bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden group"
                              asChild
                            >
                              <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <span className="relative z-10 flex items-center">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Live Demo
                                </span>
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

        {/* Other Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -12 }}
                transition={smoothSpring}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer will-change-transform"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover will-change-transform"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                  />
                  {/* Hover overlay with project details */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.p
                      className="text-sm text-muted-foreground line-clamp-2 mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      {project.problem}
                    </motion.p>
                    <motion.span 
                      className="text-primary text-sm font-medium flex items-center gap-1"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      View Details <ChevronRight size={14} />
                    </motion.span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <motion.span 
                        key={tech} 
                        className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                        whileHover={{ x: 4 }}
                        transition={smoothSpring}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project <ExternalLink size={12} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <motion.h3
                  className="text-3xl md:text-4xl font-display font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedProject.title}
                </motion.h3>
                
                <motion.p
                  className="text-muted-foreground text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {selectedProject.description}
                </motion.p>

                {/* Problem → Solution → Result with animations */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Problem", content: selectedProject.problem, delay: 0.2 },
                    { label: "Solution", content: selectedProject.solution, delay: 0.25 },
                    { label: "Result", content: selectedProject.result, delay: 0.3 },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="glass p-6 rounded-xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: item.delay, duration: 0.5 }}
                    >
                      <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-2">
                        {item.label}
                      </span>
                      <p className="text-foreground">{item.content}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  {selectedProject.link && (
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Live Site
                      </a>
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

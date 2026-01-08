import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiAgenticVerseImage from "@/assets/aiagenticverse.png";

const projects = [
  {
    title: "AI Agentic Verse",
    description:
      "A comprehensive AI automation platform enabling businesses to deploy smart chat agents and operational workflows.",
    problem: "Businesses struggle with manual repetitive tasks",
    solution: "Autonomous AI agents for automation",
    result: "Streamlined operations and reduced manual work",
    tech: ["React", "Node.js", "OpenAI", "Supabase"],
    image: aiAgenticVerseImage,
    featured: true,
  },
  {
    title: "Beit Yisrael International",
    description: "Official digital platform with multilingual podcast content generation across 70 languages.",
    problem: "Global organization needed multilingual reach",
    solution: "LLM-powered content translation system",
    result: "Content accessible in 70+ languages",
    tech: ["Next.js", "LLM Integration", "Cloud Hosting"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
  },
  {
    title: "Harvest of Mercy Website",
    description:
      "Charity organization website designed to facilitate donations and global outreach with accessible navigation.",
    problem: "Charity needed online presence for donations",
    solution: "User-friendly donation platform",
    result: "Increased global donations and reach",
    tech: ["React", "Tailwind CSS", "Payment Integration"],
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Featured Projects</h2>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-12"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden bg-gradient-warm p-1"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <div className="glass-strong rounded-[22px] overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <motion.div
                      className="aspect-video lg:aspect-auto overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </motion.div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                          <Sparkles className="text-primary" size={20} />
                        </motion.div>
                        <span className="text-primary font-medium text-sm">Featured Project</span>
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      <div className="space-y-2 mb-6 text-sm">
                        <p>
                          <span className="text-primary font-medium">Problem:</span> {project.problem}
                        </p>
                        <p>
                          <span className="text-primary font-medium">Solution:</span> {project.solution}
                        </p>
                        <p>
                          <span className="text-primary font-medium">Result:</span> {project.result}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" className="border-border">
                            <Github className="mr-2 h-4 w-4" />
                            Source
                          </Button>
                        </motion.div>
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
            .map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href="#"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                      whileHover={{ x: 5 }}
                    >
                      View Project <ExternalLink size={12} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

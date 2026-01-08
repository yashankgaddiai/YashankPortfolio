import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Agentic Verse Platform",
    description:
      "A comprehensive AI automation platform enabling businesses to deploy smart chat agents and operational workflows.",
    problem: "Businesses struggle with manual repetitive tasks",
    solution: "Autonomous AI agents for automation",
    result: "Streamlined operations and reduced manual work",
    tech: ["React", "Node.js", "OpenAI", "Supabase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Beit Yisrael International",
    description:
      "Official digital platform with multilingual podcast content generation across 70 languages.",
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

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Featured Projects
          </h2>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-warm p-1">
                <div className="glass-strong rounded-[22px] overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="text-primary" size={20} />
                        <span className="text-primary font-medium text-sm">
                          Featured Project
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>
                      <div className="space-y-2 mb-6 text-sm">
                        <p>
                          <span className="text-primary font-medium">Problem:</span>{" "}
                          {project.problem}
                        </p>
                        <p>
                          <span className="text-primary font-medium">Solution:</span>{" "}
                          {project.solution}
                        </p>
                        <p>
                          <span className="text-primary font-medium">Result:</span>{" "}
                          {project.result}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="border-border">
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      View Project <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

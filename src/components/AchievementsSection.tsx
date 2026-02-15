import { motion } from "framer-motion";
import { Trophy, Star, Globe, Zap, Users, Rocket } from "lucide-react";

const cinematicEase = [0.16, 1, 0.3, 1] as const;

const achievements = [
  {
    icon: Globe,
    title: "70+ Languages",
    description: "Built platforms delivering content across 70+ languages using LLM-powered translation.",
  },
  {
    icon: Rocket,
    title: "AI Agency Co-Founded",
    description: "Co-founded AI Agentic Verse, delivering autonomous automation solutions for businesses.",
  },
  {
    icon: Users,
    title: "Global Client Base",
    description: "Deployed AI solutions and web platforms for international organizations across multiple continents.",
  },
  {
    icon: Zap,
    title: "Full-Stack Mastery",
    description: "End-to-end development from concept to deployment with modern frameworks and AI integration.",
  },
  {
    icon: Star,
    title: "EdTech Impact",
    description: "Built conversion-optimized platforms with automated lead funnels and CRM integration.",
  },
  {
    icon: Trophy,
    title: "Non-Profit Contributions",
    description: "Volunteered technical expertise to build digital platforms for charity organizations.",
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 50,
    scale: 0.9,
    filter: "blur(8px)",
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: cinematicEase,
    },
  }),
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
            Achievements
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Key Milestones
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="glass p-6 rounded-2xl text-center group relative overflow-hidden"
                whileHover={{ y: -6, boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)" }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon size={28} className="text-primary" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "line" | "dots";
}

const SectionDivider = ({ variant = "line" }: SectionDividerProps) => {
  if (variant === "wave") {
    return (
      <div className="relative h-24 overflow-hidden">
        <motion.svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.05)" />
              <stop offset="50%" stopColor="hsl(var(--primary) / 0.1)" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.05)" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#waveGradient)"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="flex justify-center gap-3 py-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/30"
            initial={{ opacity: 0, scale: 0, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.5, backgroundColor: "hsl(var(--primary) / 0.6)" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-8">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 150, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-primary/40 mx-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
      />
      <motion.div
        className="h-px bg-gradient-to-r from-primary/50 via-transparent to-transparent"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 150, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

export default SectionDivider;
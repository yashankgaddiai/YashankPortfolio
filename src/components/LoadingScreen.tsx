import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'logo' | 'text' | 'exit'>('logo');

  useEffect(() => {
    const logoTimer = setTimeout(() => setPhase('text'), 800);
    const textTimer = setTimeout(() => setPhase('exit'), 2200);
    const exitTimer = setTimeout(() => onLoadingComplete(), 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const name = "YASHANK GADDI";

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--card)) 100%)',
          }}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
          }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          >
            {/* Floating orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -20, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8" style={{ perspective: 1000 }}>
            {/* Animated logo/icon */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ 
                scale: 1, 
                rotateY: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Outer ring */}
              <motion.div
                className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center"
                animate={{
                  rotate: 360,
                  borderColor: ['hsl(var(--primary) / 0.3)', 'hsl(var(--accent) / 0.5)', 'hsl(var(--primary) / 0.3)'],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  borderColor: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {/* Inner glow */}
                <motion.div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--accent) / 0.2) 100%)',
                    boxShadow: '0 0 60px hsl(var(--primary) / 0.4)',
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 60px hsl(var(--primary) / 0.4)',
                      '0 0 80px hsl(var(--primary) / 0.6)',
                      '0 0 60px hsl(var(--primary) / 0.4)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Initials */}
                  <motion.span
                    className="text-3xl font-display font-bold"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    YG
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-primary"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: -6,
                  marginLeft: -6,
                  boxShadow: '0 0 20px hsl(var(--primary))',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                initial={{ rotate: 0 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-primary"
                  style={{ transform: 'translateX(64px)' }}
                />
              </motion.div>
            </motion.div>

            {/* Name reveal */}
            {phase === 'text' && (
              <motion.div
                className="flex gap-1 overflow-hidden"
                style={{ perspective: 500 }}
              >
                {name.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl md:text-4xl font-display font-bold"
                    style={{
                      background: letter === ' ' 
                        ? 'transparent' 
                        : 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%)',
                      WebkitBackgroundClip: letter === ' ' ? 'unset' : 'text',
                      WebkitTextFillColor: letter === ' ' ? 'transparent' : 'transparent',
                      backgroundClip: letter === ' ' ? 'unset' : 'text',
                      display: 'inline-block',
                      width: letter === ' ' ? '0.5em' : 'auto',
                    }}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Loading bar */}
            <motion.div
              className="w-48 h-0.5 bg-muted-foreground/20 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 2.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            </motion.div>
          </div>

          {/* Film grain overlay */}
          <div className="grain" style={{ opacity: 0.03 }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

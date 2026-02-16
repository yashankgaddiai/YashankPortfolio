import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

type CursorVariant = "default" | "hover" | "link" | "button" | "card" | "text";

const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Ultra-smooth spring config - lower stiffness + higher damping = fluid motion
  const springConfig = { damping: 35, stiffness: 180, mass: 0.3, restSpeed: 0.001 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Cursor size based on variant
  const getCursorSize = useCallback(() => {
    switch (cursorVariant) {
      case "button": return { dot: 40, glow: 120 };
      case "link": return { dot: 30, glow: 100 };
      case "card": return { dot: 60, glow: 150 };
      case "text": return { dot: 4, glow: 60 };
      case "hover": return { dot: 20, glow: 100 };
      default: return { dot: 8, glow: 320 };
    }
  }, [cursorVariant]);

  const sizes = getCursorSize();

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for different element types
      if (target.closest('button') || target.closest('[role="button"]')) {
        setCursorVariant("button");
      } else if (target.closest('a') || target.closest('[data-cursor="link"]')) {
        setCursorVariant("link");
      } else if (target.closest('[data-cursor="card"]') || target.closest('.glass')) {
        setCursorVariant("card");
      } else if (target.closest('input') || target.closest('textarea')) {
        setCursorVariant("text");
      } else if (target.closest('[data-cursor="hover"]')) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleElementHover);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseover", showCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleElementHover);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseover", showCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  // Get styles based on variant
  const getDotStyles = () => {
    const baseStyles = {
      width: sizes.dot,
      height: sizes.dot,
    };

    switch (cursorVariant) {
      case "button":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
          border: "2px solid hsl(var(--primary))",
          mixBlendMode: "difference" as const,
        };
      case "link":
        return {
          ...baseStyles,
          backgroundColor: "hsl(var(--primary) / 0.3)",
          border: "2px solid hsl(var(--primary))",
        };
      case "card":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
          border: "2px solid hsl(var(--primary) / 0.5)",
          backdropFilter: "blur(4px)",
        };
      case "text":
        return {
          ...baseStyles,
          backgroundColor: "hsl(var(--primary))",
          borderRadius: "2px",
          width: 2,
        };
      default:
        return {
          ...baseStyles,
          backgroundColor: "hsl(var(--primary))",
        };
    }
  };

  const getGlowColor = () => {
    switch (cursorVariant) {
      case "button": return "hsl(25 95% 53% / 0.15)";
      case "link": return "hsl(25 95% 53% / 0.12)";
      case "card": return "hsl(25 95% 53% / 0.1)";
      default: return "hsl(25 95% 53% / 0.08)";
    }
  };

  return (
    <>
      {/* Main glow effect */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: sizes.glow,
            height: sizes.glow,
            scale: isVisible ? (isClicking ? 0.9 : 1) : 0,
            opacity: isVisible ? 1 : 0,
          }}
          style={{
            background: `radial-gradient(circle, ${getGlowColor()} 0%, transparent 70%)`,
          }}
          transition={{ 
            duration: 0.3,
            width: { duration: 0.2 },
            height: { duration: 0.2 },
          }}
        />
      </motion.div>

      {/* Cursor ring/dot */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full flex items-center justify-center"
          animate={{
            ...getDotStyles(),
            scale: isVisible ? (isClicking ? 0.8 : 1) : 0,
            opacity: isVisible ? (cursorVariant === "default" ? 0.8 : 1) : 0,
          }}
          transition={{ 
            duration: 0.25,
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.5,
          }}
        >
          {/* Inner content for specific variants */}
          {cursorVariant === "button" && (
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
          {cursorVariant === "link" && (
            <motion.div
              className="w-1 h-1 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Trailing particles for card hover */}
      {cursorVariant === "card" && (
        <motion.div
          className="fixed pointer-events-none z-40 hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              animate={{
                x: [0, (i - 1) * 20],
                y: [0, (i - 1) * 10],
                opacity: [0.4, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-40 hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            className="rounded-full border-2 border-primary/30"
            initial={{ width: 10, height: 10, opacity: 0.8 }}
            animate={{ width: 60, height: 60, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </>
  );
};

export default CursorEffect;

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; x: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          x: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 2,
        },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute bottom-0 text-romantic-pink opacity-60"
          style={{
            left: `${h.x}%`,
            fontSize: h.size,
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: -1200,
            opacity: [0, 0.6, 0],
            x: `${h.x + (Math.random() * 10 - 5)}%`,
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            ease: "easeOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}

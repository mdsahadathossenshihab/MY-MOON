import { motion, useScroll, useSpring } from "motion/react";
import { Heart, Moon, Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import FloatingHearts from "./components/FloatingHearts";
import TypingText from "./components/TypingText";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-romantic-pink/30 selection:text-romantic-pink">
      <ParticleBackground />
      <FloatingHearts />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-romantic-pink z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass hover:bg-white/10 transition-all group"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white/50 group-hover:text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-romantic-pink animate-pulse" />
        )}
      </button>

      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder romantic instrumental
      />

      <main className="relative z-10">
        {/* Section 1: Entry */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <Moon className="w-20 h-20 text-yellow-100/80 mx-auto mb-8 animate-pulse" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-yellow-100/20 blur-3xl rounded-full"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-glow mb-4">
              আজকের দিনটা…
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              আমার ভুলে যাওয়ার কথা না ছিল…<br />
              তবুও… আমি ভুলে গেছি… 😅
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-12"
            >
              <p className="text-2xl md:text-3xl font-medium text-romantic-pink text-glow mb-8">
                কিন্তু তুমি না…<br />
                তুমি আমার জীবনের সবচেয়ে important অংশ ❤️
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="px-8 py-4 bg-romantic-pink rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,77,148,0.4)] hover:shadow-[0_0_30px_rgba(255,77,148,0.6)] transition-all flex items-center gap-2 mx-auto"
              >
                একটু দেখো… <Heart className="w-5 h-5 fill-current" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 2: Late Wish */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-3xl w-full glass p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-romantic-pink to-transparent" />
            <h2 className="text-4xl md:text-5xl font-bold text-romantic-pink mb-12 text-center text-glow">
              Happy 2 Years, তুমি ❤️
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
              <TypingText text="২ বছর হয়ে গেছে…" speed={100} />
              <TypingText text="বিশ্বাসই হয় না সময় এত তাড়াতাড়ি চলে গেছে…" speed={80} />
              <TypingText text="হয়তো আমি perfect না…" speed={80} />
              <TypingText text="আর আজকের দিনটা মনে না রাখাটা আমার biggest fault 😔" speed={80} />
              <TypingText text="কিন্তু একটা জিনিস সত্যি…" speed={100} />
              <TypingText text="আমি কখনো তোমাকে হালকাভাবে নেইনি…" speed={80} />
            </div>
          </div>
        </section>

        {/* Section 3: Memory Gallery */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-glow">আমাদের মুহূর্তগুলো</h2>
            <div className="w-24 h-1 bg-romantic-pink mx-auto mt-4 rounded-full" />
          </div>
          <Gallery />
        </section>

        {/* Section 4: Timeline */}
        <section className="py-20 bg-black/20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-glow">আমাদের পথচলা</h2>
            <p className="text-white/60 mt-4">২ বছরের সুন্দর এক যাত্রা</p>
          </div>
          <Timeline />
          <div className="text-center mt-20 px-4">
            <p className="text-2xl italic text-white/80 max-w-2xl mx-auto">
              "আমাদের journey perfect না ছিল… কিন্তু real ছিল… আর এটাই আমার সবচেয়ে প্রিয়…"
            </p>
          </div>
        </section>

        {/* Section 5: Honest Apology */}
        <section className="h-screen flex items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white/90">আমি সত্যি sorry…</h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              আজকের দিনটা ভুলে যাওয়ার জন্য…<br />
              তুমি deserve করো না এমন কিছু…
            </p>
            <p className="text-2xl md:text-3xl font-medium text-romantic-pink text-glow">
              কিন্তু জানো…<br />
              তোমাকে হারানোর চিন্তা আসলেই ভয় লাগে…
            </p>
          </motion.div>
        </section>

        {/* Section 6: Love Confession */}
        <section className="h-screen flex items-center justify-center px-4 text-center bg-gradient-to-b from-transparent to-romantic-purple/30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-glow">Love Confession 💖</h2>
            <div className="space-y-6 text-xl md:text-2xl text-white/80">
              <p>এই ২ বছরে একটা জিনিস বুঝছি…</p>
              <p className="text-3xl md:text-4xl font-bold text-white">তুমি শুধু আমার girlfriend না… তুমি আমার habit…</p>
              <p>তোমার সাথে কথা না হলে দিনটাই অদ্ভুত লাগে…</p>
              <p className="text-4xl md:text-5xl font-bold text-romantic-pink text-glow mt-12">
                আমি তোমাকে অনেক ভালোবাসি ❤️
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 7: Final Promise */}
        <section className="h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12 z-20"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold text-glow">Happy 2 Years</h2>
              <p className="text-2xl md:text-3xl text-white/70">MY MOON</p>
            </div>
            
            <div className="space-y-6 text-xl text-white/80">
              <p>আগামী দিনগুলোতেও… তোমার সাথে থাকতে চাই…</p>
              <p>আর চেষ্টা করবো… আর এমন ভুল না করতে 😅</p>
            </div>
          </motion.div>
          
          {/* Confetti-like hearts in background */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-romantic-pink/20"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: "110%", 
                  rotate: Math.random() * 360 
                }}
                animate={{ 
                  y: "-10%", 
                  rotate: Math.random() * 360,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2, 
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              >
                <Heart className="w-8 h-8 fill-current" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-white/10 glass">
          <p className="text-white/60 text-lg">
            ২ বছর… আর আমি এখনো তোমার মাঝেই আটকে আছি ❤️
          </p>
        </footer>
      </main>
    </div>
  );
}

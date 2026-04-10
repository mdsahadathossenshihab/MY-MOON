import { motion } from "motion/react";

const timelineData = [
  { title: "শুরুটা…", description: "আমাদের সেই প্রথম দিনগুলো", date: "২০২৪" },
  { title: "প্রথম কথা", description: "সেই অদ্ভুত সুন্দর আলাপ", date: "২০২৪" },
  { title: "ঝগড়া + মান অভিমান 😅", description: "ছোট ছোট খুনসুটি", date: "২০২৫" },
  { title: "আবার ঠিক হওয়া", description: "সব বাধা পেরিয়ে আবার কাছে আসা", date: "২০২৫" },
  { title: "আজ — ২ বছর ❤️", description: "আমাদের ভালোবাসার ২ বছর পূর্ণ হলো", date: "২০২৬" },
];

export default function Timeline() {
  return (
    <div className="relative max-w-2xl mx-auto px-4 py-20">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-romantic-pink/30" />
      
      <div className="space-y-24">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
              <div className="glass p-6 rounded-2xl relative group hover:bg-white/10 transition-all duration-500">
                <span className="text-romantic-pink text-sm font-medium mb-2 block">{item.date}</span>
                <h3 className="text-2xl font-bold mb-2 text-glow">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                
                {/* Dot on the line */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-romantic-pink rounded-full shadow-[0_0_10px_rgba(255,77,148,0.8)] ${
                  index % 2 === 0 ? "-right-14" : "-left-14"
                }`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

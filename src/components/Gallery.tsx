import { motion } from "motion/react";

const photos = [
  { src: "https://i.ibb.co.com/bRB69MVx/1137.jpg", caption: "এই দিনটা মনে আছে? 😌" },
  { src: "https://i.ibb.co.com/27CLszNr/1331.jpg", caption: "তোমার এই হাসিটা… আমার favourite 💖" },
  { src: "https://i.ibb.co/mCvPbHwK/2008.jpg", caption: "আমাদের ছোট ছোট মুহূর্ত… কিন্তু আমার কাছে অনেক বড়" },
  { src: "https://i.ibb.co.com/DJs7Pss/1993.jpg", caption: "সবসময় এভাবেই পাশে থেকো ❤️" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 py-20">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-white/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${index === 2 ? 'contrast-[1.05] brightness-[1.05]' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <p className="text-white text-lg font-medium text-glow">{photo.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center py-16 bg-[#023D54] text-[#ffff66]">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-center max-w-3xl mb-8 text-[#94DEA5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Hi! I’m Srishti, a passionate Software Development Engineer and MNNIT Allahabad graduate with a strong focus on building scalable and user-friendly applications. With hands-on experience in full-stack development and a problem-solving mindset, I create impactful solutions. I specialize in the MERN stack MongoDB, Express.js, React.js, and Node.js and continuously explore new technologies to grow as a developer.
      </motion.p>

      <motion.button
        className="px-6 py-3 bg-[#9A6735] rounded-lg text-white font-semibold hover:bg-[#94DEA5]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://drive.google.com/file/d/14wyLUeNnQ5c-oIm7h8L0fz4eZSatvV_o/view?usp=drive_link", "_blank")}
      >
        View My Resume
      </motion.button>
    </div>
  );
}

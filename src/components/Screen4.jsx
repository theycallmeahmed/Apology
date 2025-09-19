"use client"

import { motion } from "framer-motion"

export default function Screen4({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight"
        style={{ textShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
      >
        A bit more closer...
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}>
        <motion.button
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(to right, #ec4899, #a855f7)",
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)"
          }}

          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full text-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          style={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)" }}
        >
          Even closer
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

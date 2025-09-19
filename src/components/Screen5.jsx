"use client"

import { motion } from "framer-motion"

export default function Screen5({ onReveal }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-6"
      >
        <img
          src="/gifs/screen5.gif"
          alt="Gift surprise"
          className="w-44"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight"
        style={{ textShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
      >
        Alright, your wait is over!
        <br />
        Here's your surprise<span className="text-white">🎁</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onReveal}
          className="px-12 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-bold rounded-full text-2xl shadow-lg transition-all duration-300 "
          style={{
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
            textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
          }}
        >
          Reveal
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

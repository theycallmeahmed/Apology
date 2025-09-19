"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Screen2({ onNext }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleNo = () => {
    setShowPopup(true)
  }

  const handleYes = () => {
    onNext()
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-relaxed"
          style={{ textShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
        >
          Are you alone?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
            className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full text-xl shadow-lg transition-all duration-300"
          >
            Yes
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNo}
            className="px-10 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold rounded-full text-xl shadow-lg transition-all duration-300"
          >
            No
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-m flex items-center justify-center z-50 px-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 p-8 rounded-2xl max-w-md text-center border border-purple-500/20"
              style={{ boxShadow: "0 0 40px rgba(168, 85, 247, 0.2)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xl text-purple-100 mb-6 leading-relaxed">
                Be alone for a moment, this surprise is just for you😉
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-semibold rounded-full shadow-lg border border-white/20 hover:shadow-pink-500/30"
              >
                Got it!
              </motion.button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

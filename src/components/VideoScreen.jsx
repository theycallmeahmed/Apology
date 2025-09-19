"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function VideoScreen() {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play()
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            className="fixed inset-0 bg-black z-50"
        >
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted={false} playsInline>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* I'm sorry message overlay */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 3, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white text-center leading-tight"
                    style={{ 
                        textShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
                        filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))"
                    }}
                >
                    I'm sorry
                </motion.h1>
            </motion.div>
        </motion.div>
    )
}

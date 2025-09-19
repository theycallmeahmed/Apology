"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BackgroundEffects() {
    const [stars, setStars] = useState([])

    useEffect(() => {
        // Twinkling stars
        const newStars = []
        for (let i = 0; i < 80; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 3,
                size: Math.random() * 2 + 1,
            })
        }
        setStars(newStars)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Twinkling Stars */}
            {stars.map((star) => (
                <motion.div
                    key={`star-${star.id}`}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: 0.3,
                    }}
                    animate={{ opacity: [0.1, 0.8, 0.1] }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}


        </div>
    )
}
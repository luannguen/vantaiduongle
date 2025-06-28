'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ParallaxSectionProps {
    children: React.ReactNode
    speed?: number
    className?: string
}

export default function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
    const [offsetY, setOffsetY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.div
            className={`relative overflow-hidden ${className}`}
            style={{
                transform: `translateY(${offsetY * speed}px)`
            }}
        >
            {children}
        </motion.div>
    )
}

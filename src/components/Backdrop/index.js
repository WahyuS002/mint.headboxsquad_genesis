import React from 'react'
import { motion } from 'framer-motion'

export default function Backdrop({ children, onClick }) {
    return (
        <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClick}>
            <div className="flex h-screen absolute w-full z-10 bg-black/70">
                <div className="m-auto">{children}</div>
            </div>
        </motion.div>
    )
}

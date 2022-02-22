import React from 'react'
import MintedPhoneImg from '../../assets/mint on phone.png'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'

export default function Phone({ handleClose }) {
    return (
        <Backdrop onClick={handleClose}>
            <div className="flex justify-center overflow-hidden">
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="w-3/4 relative"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: [0, 1, 0.95] }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 25,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0,
                        transition: {
                            duration: 0.15,
                            ease: 'easeOut',
                        },
                    }}
                >
                    <img className="rounded-2xl" draggable={false} src={MintedPhoneImg} alt="" />
                    <span className="flex justify-center mt-4" onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </motion.div>
            </div>
        </Backdrop>
    )
}

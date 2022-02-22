import React from 'react'
import MintedImg from '../../assets/minted.png'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'

export default function Minted({ handleClose }) {
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
                    <img draggable={false} src={MintedImg} alt="" />
                    <p className="absolute right-14 top-48 text-white font-semibold text-lg leading-snug">
                        Congrats! You succeessfully <br /> minted your Headbox, stay <br /> tuned to see what you got <br /> in your box!
                    </p>
                    <button
                        className="absolute left-56 bottom-44 px-12 text-lg font-bold text-white py-2 rounded-md bg-[#9B92FF] border-4 border-white z-10 hover:bg-[#8781d6] hover:left-[14.2rem] hover:bottom-[10.8rem] transition-all duration-300 ease-in-out"
                        onClick={handleClose}
                    >
                        FINISH
                    </button>
                    <button className="absolute left-[14.2rem] bottom-[10.8rem] px-12 text-lg font-bold text-white py-2 rounded-md bg-black border-4 border-black">FINISH</button>
                </motion.div>
            </div>
        </Backdrop>
    )
}

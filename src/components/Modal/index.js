import React from 'react'
import MintedImg from '../../assets/minted.png'

export default function index() {
    return (
        <div className="relative">
            <div className="flex h-screen absolute w-full z-10 bg-black/70">
                <div className="m-auto">
                    <div className="flex justify-center">
                        <div className="w-3/4 relative">
                            <img src={MintedImg} alt="" />
                            <p className="absolute right-14 top-52 -rotate-3 text-white font-semibold text-lg leading-snug">
                                Congrats! You succeessfully <br /> minted your Headbox, stay <br /> tuned to see what you got <br /> in your box!
                            </p>
                            <button className="absolute left-56 bottom-44 -rotate-3 px-12 text-lg font-bold text-white py-2 rounded-md bg-[#9B92FF] border-4 border-white z-10">FINISH</button>
                            <button className="absolute left-[14.2rem] bottom-[10.7rem] -rotate-3 px-[3.3rem] text-lg font-bold text-white py-3 rounded-xl bg-black">FINISH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

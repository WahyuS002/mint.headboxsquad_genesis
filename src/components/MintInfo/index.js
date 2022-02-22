import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/data/dataActions'

export default function MintInfo() {
    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)
    const data = useSelector((state) => state.data)

    const [CONFIG, SET_CONFIG] = useState({
        DISPLAY_COST: 0,
        MAX_SUPPLY: '',
    })

    const getConfig = async () => {
        const configResponse = await fetch('/config/config.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        const config = await configResponse.json()
        SET_CONFIG(config)
    }

    const getData = () => {
        if (blockchain.account !== '' && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account))
        }
    }

    const progress = () => {
        let comma_progress = (data.totalSupply / CONFIG.MAX_SUPPLY) * 100
        let rounded_comma = comma_progress.toFixed(2)
        return rounded_comma
    }

    useEffect(() => {
        getConfig()
    })

    useEffect(() => {
        getData()
    }, [blockchain.account])

    return (
        <AnimatePresence>
            {data.totalSupply && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [-20, -50, -20] }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 25,
                        delay: 0.5,
                        duration: 0.4,
                    }}
                >
                    <div className="flex justify-center">
                        <div className="absolute bottom-2">
                            <div className="absolute left-0 -top-1 w-20 h-20 bg-[#FAAE66] rounded-lg border-4 border-gray-900">
                                <div className="m-auto py-4 w-12 leading-tight">
                                    <p className="text-center font-bold text-gray-900">{CONFIG.DISPLAY_COST} ETH</p>
                                </div>
                            </div>
                            <div className="w-[26rem] h-[4.5rem] bg-[#FAAE66] rounded-lg border-4 border-gray-900 -z-10">
                                <div className="ml-24 mr-4 py-3">
                                    <div className="flex justify-between">
                                        <p className="text-gray-900 font-semibold">Total Minted</p>
                                        <p className="text-sm font-bold">
                                            {data.totalSupply} / {CONFIG.MAX_SUPPLY.toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="mt-1 w-full h-4 rounded-full bg-[#FED671] outline outline-2 outline-gray-900">
                                        <div className="w-full h-4 first:rounded-full bg-[#2fe462]" style={{ width: `${progress()}%` }}></div>
                                        <div className="flex justify-center relative">
                                            <p className="absolute -top-[0.9rem] text-xs font-semibold">{`${progress()}%`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

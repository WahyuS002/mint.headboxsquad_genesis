import LeftButton from './components/svg/LeftWoodenSign'
import AmountButton from './components/svg/AmountWoodenSign'
import RightButton from './components/svg/RightWoodenSign'
import MintButton from './components/svg/MintWoodenSign'

import bubbleMint from './assets/bubble mint.svg'

import heroImg from './assets/mint hero.png'

import { connect } from './redux/blockchain/blockchainActions'
import { fetchData } from './redux/data/dataActions'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)
    const data = useSelector((state) => state.data)
    const [claimingNft, setClaimingNft] = useState(false)
    const [connectedWallet, setConnectedWallet] = useState(false)
    const [mintAmount, setMintAmount] = useState(1)

    const [canIncrementAmount, setCanIncrementAmount] = useState(true)
    const [canDecrementAmount, setCanDecrementAmount] = useState(false)

    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: '',
        SCAN_LINK: '',
        MAX_SUPPLY_PER_ADDRESS: '',
        NETWORK: {
            NAME: '',
            SYMBOL: '',
            ID: 0,
        },
        NFT_NAME: '',
        SYMBOL: '',
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: '',
        MARKETPLACE_LINK: '',
        SHOW_BACKGROUND: false,
    })

    const claimNFTs = () => {
        if (data.paused) {
            toast.info('Minting has Paused.')
        } else {
            if (data.currentWalletSupply + mintAmount > CONFIG.MAX_SUPPLY_PER_ADDRESS) {
                toast.warning('You have exceeded the max limit of minting.')
            } else {
                let cost = data.cost
                let gasLimit = CONFIG.GAS_LIMIT
                let totalCostWei = String(cost * mintAmount)
                let totalGasLimit = String(gasLimit * mintAmount)
                console.log('Cost: ', totalCostWei)
                console.log('Gas limit: ', totalGasLimit)
                // setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)
                toast.info(`Minting your ${CONFIG.NFT_NAME}...`)
                setClaimingNft(true)
                blockchain.smartContract.methods
                    .mint(mintAmount)
                    .send({
                        gasLimit: String(totalGasLimit),
                        to: CONFIG.CONTRACT_ADDRESS,
                        from: blockchain.account,
                        value: totalCostWei,
                    })
                    .once('error', (err) => {
                        console.log(err)
                        // setFeedback('Sorry, something went wrong please try again later.')
                        toast.error('Sorry, something went wrong please try again later.')
                        setClaimingNft(false)
                    })
                    .then((receipt) => {
                        console.log(receipt)
                        // setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`)
                        toast.success(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`)
                        setClaimingNft(false)
                        dispatch(fetchData(blockchain.account))
                    })
            }
        }
    }

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1
        if (newMintAmount === 1) {
            setCanDecrementAmount(false)
        }
        if (newMintAmount < 1) {
            newMintAmount = 1
        }
        setMintAmount(newMintAmount)
        setCanIncrementAmount(true)
    }

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1
        if (newMintAmount === 20) {
            setCanIncrementAmount(false)
        }
        if (newMintAmount > 20) {
            newMintAmount = 20
        }
        setMintAmount(newMintAmount)
        setCanDecrementAmount(true)
    }

    const getData = () => {
        if (blockchain.account !== '' && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account))
            setConnectedWallet(true)
        }
    }

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

    useEffect(() => {
        getConfig()
    }, [])

    useEffect(() => {
        getData()
    }, [blockchain.account])

    return (
        <div className="font-grandstander">
            <ToastContainer />
            <div className="relative">
                <div className="absolute max-w-full inset-0 -z-20 min-h-screen bg-no-repeat bg-[url('./assets/background.svg')] bg-cover"></div>
                <div className="w-4/5 mx-auto">
                    <div className="flex h-screen">
                        <div className="m-auto">
                            <div className="flex items-center space-x-5">
                                <div
                                    className="relative cursor-pointer hover:-mt-1 transition-all duration-150 ease-in-out"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        decrementMintAmount()
                                    }}
                                >
                                    <LeftButton color={canDecrementAmount ? '#FAAE66' : '#FFEBD9'} />
                                    <span className="absolute top-6 right-9">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="relative">
                                    <AmountButton />
                                    <h2 className={`absolute text-5xl top-6 ${mintAmount >= 10 ? 'left-20' : 'left-[5.5rem]'} text-gray-800 font-bold`}>{mintAmount}</h2>
                                </div>
                                <div
                                    className="relative cursor-pointer hover:-mt-1 transition-all duration-150 ease-in-out"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        incrementMintAmount()
                                    }}
                                >
                                    <RightButton color={canIncrementAmount ? '#FAAE66' : '#FFEBD9'} />
                                    <span className="absolute top-6 right-9">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <div className="cursor-pointer relative hover:-mt-1 transition-all duration-150 ease-in-out group">
                                    {blockchain.account === '' || blockchain.smartContract === null ? (
                                        <div
                                            onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(connect())
                                                getData()
                                            }}
                                        >
                                            <MintButton />
                                            <h3 className="absolute top-6 left-7 text-3xl text-gray-800 group-hover:text-gray-900 transition-all duration-200 ease-in-out font-semibold">Connect</h3>
                                        </div>
                                    ) : (
                                        <>
                                            {data.loading ? (
                                                <div
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        dispatch(connect())
                                                        getData()
                                                    }}
                                                >
                                                    <MintButton />
                                                    <h3 className="absolute top-6 left-6 text-3xl text-gray-800 group-hover:text-gray-900 transition-all duration-200 ease-in-out font-semibold">
                                                        Loading...
                                                    </h3>
                                                </div>
                                            ) : (
                                                <div
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        claimNFTs()
                                                        getData()
                                                    }}
                                                >
                                                    <MintButton />

                                                    <h3 className="absolute top-6 left-6 text-3xl text-gray-800 group-hover:text-gray-900 transition-all duration-200 ease-in-out font-semibold">
                                                        Mint Now
                                                    </h3>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="m-auto">
                            <div className="ml-auto w-[80%] relative">
                                <img className="" src={heroImg} alt="" />
                                <img className="absolute top-10 -left-6 animate-wiggle" src={bubbleMint} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

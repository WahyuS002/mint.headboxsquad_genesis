import React from 'react'

import leftLove from '../../assets/Loading/Love/left.svg'
import middleLove from '../../assets/Loading/Love/middle.svg'
import rightLove from '../../assets/Loading/Love/right.svg'

import smallStar from '../../assets/Loading/Star/small.svg'
import mediumStar from '../../assets/Loading/Star/medium.svg'
import largeStar from '../../assets/Loading/Star/large.svg'

import box from '../../assets/Loading/box.svg'

export default function Loading() {
    return (
        <div className="relative">
            <img draggable={false} className="absolute -left-5 bottom-4 animate-heart-beat animate-up-and-down" src={leftLove} alt="" />
            <img draggable={false} className="absolute -top-4 right-2 animate-heart-beat animate-up-and-down" src={middleLove} alt="" />
            <img draggable={false} className="absolute -right-5 bottom-4 animate-heart-beat animate-up-and-down" src={rightLove} alt="" />
            <img draggable={false} src={box} className="animate-up-and-down" alt="" />
            <img draggable={false} className="absolute animate-up-and-down animation-delay-100 left-0 -bottom-3" src={smallStar} alt="" />
            <img draggable={false} className="absolute animate-up-and-down animation-delay-500 -left-3 top-3" src={mediumStar} alt="" />
            <img draggable={false} className="absolute animate-up-and-down animation-delay-100 left-4 -top-3" src={mediumStar} alt="" />
            <img draggable={false} className="absolute animate-up-and-down animation-delay-500 -right-3 top-3" src={largeStar} alt="" />
            <img draggable={false} className="absolute animate-up-and-down animation-delay-500 -right-3 bottom-0" src={largeStar} alt="" />
            <img draggable={false} className="absolute animate-up-and-down animation-delay-500 right-4 -bottom-3" src={smallStar} alt="" />
        </div>
    )
}

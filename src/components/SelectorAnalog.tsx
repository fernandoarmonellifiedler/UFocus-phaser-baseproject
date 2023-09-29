import React from 'react'
import Image from 'next/image'
import ColorCircle from './ColorCircle'

const SelectorAnalog = () => {
    return (
    <div className="analog h-1/3">
        <div className="flex relative">
            <Image 
                src="/arrow.png" alt="arrow" width={30} height={30} 
                className="transform -rotate-30 absolute top-1 left-8"
            />
            <Image 
                src="/arrow.png" alt="arrow" width={30} height={30} 
                className="transform rotate-0 mx-auto"
            />
            <Image 
                src="/arrow.png" alt="arrow" width={30} height={30} 
                className="transform rotate-30 absolute top-1 right-8"
            />
        </div>
        <ColorCircle />
    </div>
    )
}

export default SelectorAnalog
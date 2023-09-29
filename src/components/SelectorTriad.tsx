import React from 'react'
import Image from 'next/image'
import ColorCircle from './ColorCircle'

const SelectorTriad = () => {
    return (
    <div className="triad h-1/3">
            <Image 
                src="/arrow.png" alt="arrow" width={30} height={30} 
                className="transform rotate-0 mx-auto"
            />
        <ColorCircle />
        <div className="flex relative">
            <Image 
                src="/arrow.png" alt="arrow" width={30} height={30} 
                className="transform rotate-240 absolute bottom-2 -left-4"
            />
            <Image 
                src="/arrow.png" alt="arrow" width={30} height={30} 
                className="transform rotate-120 absolute bottom-2 -right-4"
            />
        </div>
    </div>
    )
}

export default SelectorTriad
import React from 'react'
import ColorCircle from './ColorCircle'
import Image from 'next/image'

const SelectorComp = () => {  

  return (
    <div className="complement h-1/3">
      <div className="relative flex">
        <Image 
          src="/arrow.png" alt="arrow" width={30} height={30} 
          className="mx-auto transform -rotate-90 absolute top-12 -left-7"
        />
        <Image 
          src="/arrow.png" alt="arrow" width={30} height={30} 
          className="mx-auto transform rotate-90 absolute top-12 -right-7"
        />
      </div>
      <ColorCircle />
    </div>
  )
}

export default SelectorComp
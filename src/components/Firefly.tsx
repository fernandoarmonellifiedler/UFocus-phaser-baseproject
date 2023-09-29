import React from 'react'
import Image from 'next/image'

const Firefly = () => {
  return (
    <div className="Firefly flex justify-center mt-5">
        <Image src="/firefly.png" alt="manual" width={80} height={80} /> 
    </div>
  )
}

export default Firefly
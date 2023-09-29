import React from 'react'
import Image from 'next/image'
import ModalGeneral from '@/containers/ModalGeneral'

const Manual = () => {

  const [openManual, setOpenManual] = React.useState<boolean>(false)
  
  return (
    <div className="Manual flex justify-center mb-10">
      <Image 
        src="/manual.png" 
        alt="manual" 
        className="cursor-pointer"
        width={100} 
        height={100} 
        onClick={() => setOpenManual(true)} /> 
      <ModalGeneral state={openManual} setState={setOpenManual}>
        <p>Modal Para abrir Manual</p>
      </ModalGeneral>
    </div>
  )
}

export default Manual
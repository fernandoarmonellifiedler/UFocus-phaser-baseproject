import ModalGeneral from '@/containers/ModalGeneral'
import Image from 'next/image'
import React from 'react'

const ConfigButtons = () => {

  const [openConfig, setOpenConfig] = React.useState<boolean>(false)
  const [openAudio, setOpenAudio] = React.useState<boolean>(false)

  return (
    <div className="ConfigButtons z-10 w-full flex justify-between px-10 mb-16">
        <div 
          className="bg-green-100 cursor-pointer h-12 w-12 flex justify-center items-center border-2 border-green-400 rounded"
          onClick={() => setOpenConfig(true)}
        >
            <Image src="/config.png" alt="config" width={40} height={40} />
        </div>
        <div 
          className="bg-green-100 cursor-pointer h-12 w-12 flex justify-center items-center border-2 border-green-400 rounded"
          onClick={() => setOpenAudio(true)}
        >
            <Image src="/sound.png" alt="volume" width={40} height={40} />
        </div>
        <ModalGeneral state={openConfig} setState={setOpenConfig}>
          <p>Modal Para abrir configuración</p>
        </ModalGeneral>
        <ModalGeneral state={openAudio} setState={setOpenAudio}>
          <p>Modal Para abrir audio</p>
        </ModalGeneral>
    </div>
  )
}

export default ConfigButtons
import React from 'react'
import Image from 'next/image'


const Dialogue = () => {
  return (
    <div className="Dialogo mx-auto bg-yellow-500 p-2 border-2 border-green-400 rounded">
        <div className="flex justify-start gap-2 my-2">
            <Image src="/camaleon.png" alt="cam.jpg" width={30} height={30} />
            <p className="text-blue-800 text-md font-bold"> {"CAMALEÓN"} </p>
        </div>
        <div className="bg-cyan-500 p-2">
            <p className="text-sm"> {"Díalogo del personaje hablando con otro o explicando algo."} </p>
            <p className="text-sm"> {"Armonía de colores: Triada, complementarios, análogos."} </p>
            <p className="text-sm"> {"Recoje todas las manzanas cuando se presenten del color indicado."} </p>
        </div>
    </div>
  )
}

export default Dialogue
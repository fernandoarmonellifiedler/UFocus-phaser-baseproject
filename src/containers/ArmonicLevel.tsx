"use client"

import React from 'react'
import Dialogue from '@/components/Dialogue'
import Manual from '@/components/Manual'
import Firefly from '@/components/Firefly'
import ProgressBar from '@/components/ProgressBar'
import ConfigButtons from '@/components/ConfigButtons'
import Image from 'next/image'
import ComplementGPT from '@/components/ComplementGPT'
import AnalogGPT from '@/components/AnalogGPT'
import TriadaGPT from '@/components/TriadaGPT'
import GameDisplay from "@/components/GameDisplay"

const ArmonicLevel = () => {
    const [complement, setComplement] = React.useState(false)
    const [triad, setTriad] = React.useState(false)
    const [analog, setAnalog] = React.useState(false)

    React.useEffect(() => {
    localStorage.setItem('Mode', "Complementario")
    setComplement(true)
    }, [])

    const handleComp = () => {
        localStorage.removeItem('Mode')
        localStorage.setItem('Mode', "Complementario")
        setComplement(true)
        setTriad(false)
        setAnalog(false)
    }
    const handleTriad = () => {
        localStorage.removeItem('Mode')
        localStorage.setItem('Mode', "Triada")
        setTriad(true)
        setAnalog(false)
        setComplement(false)
    }
    const handleAnalog = () => {
        localStorage.removeItem('Mode')
        localStorage.setItem('Mode', "Analogo")
        setAnalog(true)
        setTriad(false)
        setComplement(false)
    }

    return (
        <div className="my-auto flex justify-between mx-auto h-screen">
            <div className="left-side flex flex-col justify-between w-1/5 px-4 py-16">
                <Dialogue />
                <Manual />
            </div>
            <div className="center-side w-3/5 flex items-center p-0.5 border-4 m-2 border-yellow-400">
                <GameDisplay />
            </div>
            <div className="flex flex-col justify-center items-center mx-auto w-1/5 mt-16"> 
                {complement && <ComplementGPT />}
                {triad && <TriadaGPT />}
                {analog && <AnalogGPT />}
                <div className="buttons flex flex-col gap-2">
                    <button onClick={handleComp} className="px-2 rounded border-2 border-green-400 bg-green-100 text-green-500 flex justify-center font-bold items-center">Complementarios</button>
                    <button onClick={handleTriad} className="px-2 rounded border-2 border-green-400 bg-green-100 text-green-500 flex justify-center font-bold items-center">Triadas</button>
                    <button onClick={handleAnalog} className="px-2 rounded border-2 border-green-400 bg-green-100 text-green-500 flex justify-center font-bold items-center">Análogos</button>
                </div>
                <Firefly />
                <ProgressBar />
                <ConfigButtons />
            </div>
        </div>
    )
}

export default ArmonicLevel
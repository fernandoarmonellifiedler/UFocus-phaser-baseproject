"use client";
import React from "react";
import Image from "next/image";
import { applesArray } from "@/utils/ApplesArray";
import { useColor } from "@/context/ColorContext";
import Tree from '@/Assets/Tree'
import Apple from '@/Assets/Apple'

// Tarea 2: Ajustar la posición de las manzanas

const GameDisplay = () => {
    const [apples, setApples] = React.useState<{ top: string; left: string }[]>(applesArray);
    const mode = localStorage.getItem("Mode")
    
    const { 
        // Analogo
        color0,
        color30,
        color60,

        // Complementarios
        color10,
        color180,
        
        // Triada        
        color120, 
        color240, 
        color360 
    } = useColor();

    const collectApple = (index: number) => {
        apples.splice(index, 1);
        return setTimeout(() => {
        setApples([...apples]);
        }, 300);
    };


    if (mode == "Analogo") {
        return (
            <div className="w-full h-full relative">
                <Tree leaf={color0} stem={color30} />
                {apples.map((apple, index) => (
                    <Apple 
                    color={color60}
                    style={{ top: apple.top, left: apple.left }}
                    onClick={() => collectApple(index)}
                    />
                ))}
                <Image
                    className="absolute top-2 left-2"
                    alt="apple"
                    src="/chamaleon.png"
                    width={100}
                    height={100}
                />
            </div>
        )
    } else if (mode == "Triada") {
        return (
            <div className="w-full h-full relative">
                <Tree leaf={color120} stem={color240} />
                {apples.map((apple, index) => (
                    <Apple 
                    color={color360}
                    style={{ top: apple.top, left: apple.left }}
                    onClick={() => collectApple(index)}
                    />
                ))}
                <Image
                    className="absolute top-2 left-2"
                    alt="apple"
                    src="/chamaleon.png"
                    width={100}
                    height={100}
                />
            </div>
        )
    } else {
        return (
            <div className="w-full h-full relative">
                <Tree leaf={color10} stem="#a18262" />
                {apples.map((apple, index) => (
                    <Apple 
                    color={color180}
                    style={{ top: apple.top, left: apple.left }}
                    onClick={() => collectApple(index)}
                    />
                ))}
                <Image
                    className="absolute top-2 left-2"
                    alt="apple"
                    src="/chamaleon.png"
                    width={100}
                    height={100}
                />
            </div>
        )
    }
};

export default GameDisplay;

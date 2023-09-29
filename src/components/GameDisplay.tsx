"use client"
import React from 'react';
import Image from 'next/image';
import { applesArray } from '@/utils/ApplesArray';


const GameDisplay = () => {
    
    const [apples, setApples] = React.useState<{top: string, left: string}[]>(applesArray)

    const collectApple = (index: number) => {
        apples.splice(index, 1)   
        
        return setTimeout(() => {
            setApples([...apples])
        }, 300);
    }

    return (
        <div className="w-full h-full relative">
        <div
            className="absolute inset-0"
            style={{
            backgroundImage: 'url("/bgCamaleon.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8,
            }}
        ></div>
        {apples.map((apple, index) => (
            <Image
            key={index}
            src="/apple.png"
            alt="apple"
            width={20}
            height={20}
            className="w-8 h-8 rounded-full absolute z-40"
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
        <div className="h-10 w-10 bg-white rounded absolute top-4 right-4">
            <Image alt="apple" src="/apple.png" width={40} height={40} />
        </div>
        </div>
    );
};

export default GameDisplay;

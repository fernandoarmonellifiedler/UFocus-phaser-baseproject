"use client";
import React from "react";
import { applesArray } from "@/utils/ApplesArray";
import { useColor } from "@/context/ColorContext";
import Tree from '@/Assets/Tree';
import Apple from '@/Assets/Apple';
import Chamaleon from "@/Assets/Chamaleon";
import Score from "@/Assets/Score";
import Flower from "@/Assets/Flower";
import Snake from "@/Assets/Snake";
import Clock from "@/Assets/Clock";

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
                <div className="flex w-1/5 justify-between absolute top-2 left-2">
                    <Score skin="#000000" />
                    <Score skin="#000000" />
                    <Score skin="#000000" />
                </div>
                <Flower petals="#E5FF00" />
                <Chamaleon skin={color30} />
                <Snake />               
                <Clock />     
            </div>
        )
    } else if (mode == "Triada") {
        return (
            <div className="w-full h-full relative">
                <div className="flex w-1/5 justify-between absolute top-2 left-2">
                    <Score skin="#000000" />
                    <Score skin="#000000" />
                    <Score skin="#000000" />
                </div>
                <Tree leaf={color120} />
                {apples.map((apple, index) => (
                    index % 2 
                    ? <Apple 
                    color={color240}
                    style={{ top: apple.top, left: apple.left }}
                    onClick={() => collectApple(index)}
                    /> 
                    : <Apple 
                    color={color360}
                    style={{ top: apple.top, left: apple.left }}
                    onClick={() => collectApple(index)}
                    /> 
                ))}
                <Chamaleon skin="#00E5FF" />
                <Clock />
            </div>
        )
    } else {
        return (
            <div className="w-full h-full relative">
                <div className="flex w-1/5 justify-between absolute top-2 left-2">
                    <Score skin="#000000" />
                    <Score skin="#000000" />
                    <Score skin="#000000" />
                </div>
                <Tree leaf={color180} />
                <Chamaleon skin="#FF00E5" />
                <Clock />
            </div>
        )
    }
};

export default GameDisplay;

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

interface position {
    top: number
    left: number
}

const GameDisplay = () => {
    const [apples, setApples] = React.useState<{ top: string; left: string }[]>(applesArray);
    const [number, setNumber] = React.useState<number>(0);
    const [position, setPosition] = React.useState<position>({top: 0, left: 0});
    const [scores, setScores] = React.useState<boolean[]>([false, false, false])
    const mode = localStorage.getItem("Mode")
    const colors = ["hsl(000, 100%, 50%)", "hsl(060, 100%, 50%)", "hsl(120 , 100%, 25%)", "hsl(180, 100%, 50%)", "hsl(240, 100%, 50%)", "hsl(300, 100%, 50%)"];


    React.useEffect(() => {
        setNumber(Math.floor(Math.random() * 6))
        setPosition({top: Math.floor(Math.random() * 36) + 15, left: Math.floor(Math.random() * 26) + 15})
    }, [])
    
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
                    {scores.map(x => <Score skin={x ? "#008000" : "#000000"} />)}
                </div>
                <Flower petals="#E5FF00" />
                <Chamaleon 
                    skin={color30} 
                    className="" 
                    position={{top: Math.floor(Math.random() * 36) + 15, left: Math.floor(Math.random() * 26) + 15}}
                    onClick={() => console.log("Algo x2")}
                    />
                <Snake />               
                <Clock />     
            </div>
        )
    } else if (mode == "Triada") {
        return (
            <div className="w-full h-full relative">
                <div className="flex w-1/5 justify-between absolute top-2 left-2">
                    {scores.map(x => <Score skin={x ? "#008000" : "#000000"} />)}
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
                <Chamaleon 
                    skin={colors[number]} 
                    className="" 
                    position={position}
                    onClick={() => console.log("Algo")}
                />
                <Clock />
            </div>
        )
    } else {
        return (
            <div className="w-full h-full relative">
                <div className="flex w-1/5 justify-between absolute top-2 left-2">
                    {scores.map(x => <Score skin={x ? "#008000" : "#000000"} />)}
                </div>
                <Tree leaf={color10} />
                <Chamaleon 
                    skin={colors[number]} 
                    className={Math.abs(Number(colors[number].substring(4,7)) - Number(color180.substring(4,10))) < 10 ? "" : "hidden"} 
                    position={position}
                    onClick={() => setScores([true, false, false])}
                    />
                <Clock />
            </div>
        )
    }
};

export default GameDisplay;

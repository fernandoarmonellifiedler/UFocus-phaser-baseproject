"use client"
import React, { useState } from 'react';
import '@/styles/PruebaGPT.css';

const TriadaGPT: React.FC = () => {
    const [rotation, setRotation] = useState<number>(0);
    const [color0, setColor0] = useState<string>('#ff0000');
    const [color120, setColor120] = useState<string>('#ffff00');
    const [color240, setColor240] = useState<string>('#0000ff');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const centerX = e.currentTarget.offsetWidth / 2;
    const centerY = e.currentTarget.offsetHeight / 2;
    const x = e.clientX - e.currentTarget.getBoundingClientRect().left - centerX;
    const y = centerY - (e.clientY - e.currentTarget.getBoundingClientRect().top);

    const angle = (Math.atan2(y, x) * (180 / Math.PI) + 360) % 360;

    setRotation(angle);
    setColor0(getColorAtAngle(angle));
    setColor120(getColorAtAngle(angle + 120));
    setColor240(getColorAtAngle(angle + 240));
    };

    const getColorAtAngle = (angle: number): string => {
        const hue = ((angle % 360) + 360) % 360;
        return `hsl(${hue}, 100%, 50%)`;
    };

    return (
        <div className="color-picker">
            <div
                className="circle flex justify-center items-center"
                style={{ transform: `rotate(${rotation}deg)` }}
                onMouseMove={handleMouseMove}
            >
                <div className="center w-20 h-20 rounded-full bg-white z-10 flex justify-center items-center">
                    <p className="text-xs">Triada</p>
                </div>
            </div>
            <div className="colors flex">
                <div className="color-box">
                    <div className="color" style={{ backgroundColor: color0 }}></div>
                </div>
                <div className="color-box">
                    <div className="color" style={{ backgroundColor: color120 }}></div>
                </div>
                <div className="color-box">
                    <div className="color" style={{ backgroundColor: color240 }}></div>
                </div>
            </div>
        </div>
    );
};

export default TriadaGPT;

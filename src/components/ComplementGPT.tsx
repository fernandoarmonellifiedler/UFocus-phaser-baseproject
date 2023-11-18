"use client"
import React, { useState } from 'react';
import '@/styles/PruebaGPT.css';
import { useColor } from '@/context/ColorContext';

const ComplementGPT: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  // const [color10, setColor10] = useState<string>('#EF4D4D');
  // const [color180, setColor180] = useState<string>('#3AAD73');
  const { color10, color180, updateComplementColors } = useColor();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const centerX = e.currentTarget.offsetWidth / 2;
    const centerY = e.currentTarget.offsetHeight / 2;
    const x = e.clientX - e.currentTarget.getBoundingClientRect().left - centerX;
    const y = centerY - (e.clientY - e.currentTarget.getBoundingClientRect().top);

    const angle = (Math.atan2(y, x) * (180 / Math.PI) + 360) % 360;

    setRotation(angle);
    updateComplementColors(
      getColorAtAngle(angle),
      getColorAtAngle(angle + 180)
    )
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
          <p className="text-xs">Complex</p>
        </div>
      </div>
      <div className="colors flex">
        <div className="color-box">
          <div className="color" style={{ backgroundColor: color10 }}></div>
        </div>
        <div className="color-box">
          <div className="color" style={{ backgroundColor: color180 }}></div>
        </div>
      </div>
    </div>
  );
};

export default ComplementGPT;

// En ColorContext.js
"use client"
import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {

  // Complementarios
  const [color10, setColor10] = useState('#EF4D4D');
  const [color180, setColor180] = useState('#3AAD73');
  

  // Análogos
  const [color0, setColor0] = useState('#ff00FF');
  const [color30, setColor30] = useState('#0000ff');
  const [color60, setColor60] = useState('#00ffff');
  
  // Triada
  const [color120, setColor120] = useState('#ffff00');
  const [color240, setColor240] = useState('#0000ff');
  const [color360, setColor360] = useState('#ff0000');

  const updateComplementColors = (newColor10, newColor180) => {
    setColor10(newColor10);
    setColor180(newColor180);
  };

  const updateAnalogColors = (newColor0, newColor30, newColor60) => {
    setColor0(newColor0);
    setColor30(newColor30);
    setColor60(newColor60);
  };
  
  const updateTriadaColors = (newColor120, newColor240, newColor360) => {
    setColor120(newColor120);
    setColor240(newColor240);
    setColor360(newColor360);
  };

  return (
    <ColorContext.Provider 
    value={{ color0, color10, color30, color60, color120, color180, color240, color360, updateAnalogColors, updateTriadaColors, updateComplementColors }}>
      {children}
    </ColorContext.Provider>
  );
};

const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export { ColorProvider, useColor };

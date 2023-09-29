import React from 'react';

const ColorCircle = ()  => {

  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState<number | null>(null);
  const [currentRotation, setCurrentRotation] = React.useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && startX !== null) {
      const offsetX = e.clientX - startX;
      const newRotation = currentRotation + offsetX;
      setCurrentRotation(newRotation);
      setStartX(e.clientX);
    }
  };

  return (
    <div 
      className="chromatic flex justify-center items-center w-32 h-32 rounded-full"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={isDragging ? handleMouseMove : undefined}
      style={{ transform: `rotate(${currentRotation}deg)` }}
    >
      <div className="bg-white w-16 h-16 rounded-full"></div>
    </div>

  );
};

export default ColorCircle;
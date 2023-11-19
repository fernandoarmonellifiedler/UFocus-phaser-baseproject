import React from "react";

const Clock = () => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 48 48"
    className="absolute"
    style={{top: '2vh', right:'2vw'}}
  >
    <circle fill="#00ACC1" cx={24} cy={24} r={20} />
    <circle fill="#eee" cx={24} cy={24} r={16} />
    <rect x={23} y={11} width={2} height={13} />
    <rect
      x={26.1}
      y={22.7}
      transform="matrix(-.707 .707 -.707 -.707 65.787 27.25)"
      width={2.3}
      height={9.2}
    />
    <circle cx={24} cy={24} r={2} />
    <circle fill="#00ACC1" cx={24} cy={24} r={1} />
  </svg>
);
export default Clock;
import React, { useState, useEffect } from "react";

const ProfielPerformance = ({ title, targetProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          return prev + 1; 
        } else {
          clearInterval(interval); 
          return prev;
        }
      });
    }, 20); 

    return () => clearInterval(interval); 
  }, [targetProgress]);

  return (
    <div data-aos="flip-down" className="flex flex-col items-center gap-2 mt-6 border-r-2 flex-1">
      <div
        className="radial-progress w-28 h-28 bg-primary text-primary-content text-xl text-bold border-primary border-4"
        style={{ "--value": progress }}
        role="progressbar">
        {progress}%
      </div>
      <span className="text-xl font-medium font-jost text-titleBlack/85">{title}</span>
    </div>
  );
};

export default ProfielPerformance;
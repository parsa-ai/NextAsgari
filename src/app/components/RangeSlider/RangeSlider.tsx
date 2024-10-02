"use client";
import { useState } from "react";
import { toPersianNumber } from "@/app/helpers/helper";

const RangeSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        style={{
          background: `linear-gradient(to left, black ${value}%, lightgray ${value}%)`,
        }}
      />
      <div className="absolute top-[0px] right-0 translate-x-[50%] pointer-events-none bg-black text-white text-xs font-bold py-1 px-2 rounded-full" style={{ right: `${value}%` }}>
        {toPersianNumber(value)}%
      </div>
    </div>
  );
};

export default RangeSlider;

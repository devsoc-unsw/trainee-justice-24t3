"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

function StarRating() {
  const [rating, setRating] = useState<number | null>(null);

  const ratings = [
    { label: "Unacceptable", score: 1 },
    { label: "Poor", score: 2 },
    { label: "Average", score: 3 },
    { label: "Good", score: 4 },
    { label: "Excellent", score: 5 },
  ];

  return (
    <div className="flex flex-row gap-8">
      {ratings.map((rate, index) => (
        <div key={rate.score} className="flex items-center">
          <label>
            <input className="hidden peer" type="radio" name="rating" value={rate.score} onClick={() => setRating(rate.score)} />
            <div className=" flex flex-col gap-3 hover:scale-110 transition-transform">

              <div className={`cursor-pointer z-0 rounded-3xl p-3 ${rating === rate.score ? "bg-[hsl(85,49%,40%)]" : "bg-[#eaeaea]"}`}>
                <Star
                  color="white"
                  size="50"
                  fill="#eaeaea"
                  strokeWidth="0.5"
                  stroke="#545c6f"
                  className="z-10"
                />
              </div>
              <div className={`flex justify-center font-spartan text-[12px] ${rating === rate.score ? "text-[hsl(85,49%,40%)]" : "text-[hsl(0,0%,53%)]"}`}>
                {rate.label}
              </div>
            </div>
          </label>

          {index < ratings.length - 1 && (
            <div className="flex flex-row justify-center items-center relative">
              <div className="absolute w-5 h-[1px] bg-gray-400 bottom-[12px] left-[6px]"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StarRating;

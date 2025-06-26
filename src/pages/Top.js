import React from "react";
import IMG_009 from "../assets/maxresdefault.jpg"; 
export default function Top() {
    return (
        <div className="relative w-full h-80 sm:h-60 md:h-80 lg:h-96 overflow-hidden">
            <img
                src={IMG_009}
                alt="Background"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30  flex items-end justify-center">

                <div className="overflow-hidden bg-red-900 bg-opacity-20 w-full">
                    <div
                        className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg whitespace-nowrap inline-block p-2 font-sans"
                        style={{
                            animation: "marquee 30s linear infinite",
                        }}
                    >
                        ទំនាក់ទំនង៖ 081632687
                        <span className="text-white px-2">|</span>
                        0975026561
                        <span className="text-white px-2">|</span>
                        085546050
                    </div>

                    {/* Keyframes inside component */}
                    <style>
                        {`
          @keyframes marquee {
            0% { transform: translateX(50%); }
            100% { transform: translateX(-100%); }
          }
        `}
                    </style>
                </div>
            </div>
        </div>
    );
}

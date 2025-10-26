import React from "react";
import gifIcon from "../assets/gifIcon.gif";

import imagebg from "../assets/imagebg.png";

export default function Top() {
    return (
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[40rem] overflow-hidden">
            {/* Background Image */}
            <img
                src={imagebg}
                alt="Background"
                className="w-full h-full object-cover"
            />

            <div className="absolute top-1 left-4 text-red-700 text-3xl sm:text-4xl md:text-5xl">
                <img
                    src={gifIcon}
                    alt="Background"
                    className="h-32 sm:h-36 md:h-48 lg:h-64 xl:h-96 object-contain"
                />
            </div>

            {/* Overlay Marquee */}
            <div className="absolute inset-0 flex items-end justify-center">
                <div className="overflow-hidden bg-red-900 bg-opacity-20 w-full">
                    <div
                        className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg whitespace-nowrap inline-block p-2 font-sans"
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

                    {/* Keyframes for marquee */}
                    <style>
                        {`
              @keyframes marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
            `}
                    </style>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import IMG_009 from "../assets/maxresdefault.jpg"; // Adjust the path as necessary

export default function Top() {
    return (
        <div className="relative w-full h-80 sm:h-60 md:h-80 lg:h-96 overflow-hidden">
            <img
                src={IMG_009}
                alt="Background"
                className="w-full h-full object-cover"
            />

            {/* Overlay with blur and dark background */}
            <div className="absolute inset-0 bg-black/30  flex items-end justify-center">
                {/* <h1 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg bg-amber-300 w-full text-center ">
          Welcome to Our Website
        </h1> */}

                <div className="overflow-hidden bg-blue-800 w-full">
                    <div
                        className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg whitespace-nowrap inline-block p-2"
                        style={{
                            animation: "marquee 30s linear infinite",
                        }}
                    >
                        ទំនាក់ទំនង៖ 081600062
                        <span className="text-red-500 px-2">|</span>
                        081600063
                        <span className="text-red-500 px-2">|</span>
                        081600064
                    </div>

                    {/* Keyframes inside component */}
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

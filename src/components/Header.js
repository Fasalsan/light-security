// Header.js
import React from 'react';
import { SlCallOut } from "react-icons/sl";

import logos from "../assets/logos.jpg"

const Header = () => {
    return (
        <header className="flex justify-between items-center mb-3 bg-white">

            {/* Logo Section */}
            <div className="flex items-center">
                <div className='flex gap-2 items-center'>
                    <div className="w-24 h-24">
                        <img src={logos} alt="" className='rounded-full w-full h-full object-cover' />
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold '>SAN SAN</h3>
                        <p className='text-gray-400 text-sm '>Electronic store</p>
                    </div>
                </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-4">
                {/* Phone Icon with Arrow */}
                <div className="flex flex-col items-center space-y-1">
                    <SlCallOut className="text-orange-500 text-2xl animate-bounce" />
                </div>

                {/* Phone Numbers */}
                <div className="text-start text-blue-900 text-[18px]  leading-snug" style={{
                    animation: 'colorChange 40s infinite',
                }}>
                    <p>081632687</p>
                    <p>0975026561</p>
                    <p>085546050</p>
                    <style>
                        {`
          @keyframes colorChange {
            0%, 100% { color: #fc7600; }
            50% { color: #2600fc; }
            100% { color: #fc0000; }
          }
        `}
                    </style>
                </div>
            </div>
        </header>
    );
};

export default Header;

// Header.js
import React from 'react';
import { SlCallOut } from "react-icons/sl";

import logos from "../assets/logos.jpg"
import callIcon from "../assets/icon/call.gif"

const Header = () => {
    return (

        <div>
            {/* Phone Section - Mobile (Top) */}
            <div className="flex md:hidden w-full h-10 bg-blue-600 items-center font-semibold text-sm gap-1 justify-center text-white px-1" data-aos="flip-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className="flex flex-col items-center space-y-1 w-[10%]">
                    <img src={callIcon} alt="Call" />
                </div>
                <p className="gradient-text">081632687</p>/
                <p className="gradient-text">0975026561</p>/
                <p className="gradient-text">085546050</p>
            </div>

            {/* Header Section */}
            <header className="flex w-full justify-between items-center mb-3 px-3">
                {/* Logo Section */}
                <div className="flex items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-24 h-24">
                            <img
                                src={logos}
                                alt="Logo"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">SAN SAN</h3>
                            <p className="text-gray-400 text-xs">@Electronic-store</p>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-end gap-4">
                    <div className="flex flex-col items-center space-y-1 w-[12%]">
                        <img src={callIcon} alt="Call" />
                    </div>

                    <div className="text-start text-[18px] leading-snug gradient-text">
                        <p>081632687</p>
                        <p>0975026561</p>
                        <p>085546050</p>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default Header;

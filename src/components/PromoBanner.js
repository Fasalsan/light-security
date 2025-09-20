// PromoBanner.js
import React from 'react';
import imgBanner from "../assets/imgBanner.png"

const PromoBanner = () => {
    return (
        <div className="flex items-start justify-between bg-gradient-to-r from-blue-900 to-blue-300 rounded-2xl  py-2 pl-6 md:p-17 text-white">
            {/* Left Content */}
            <div className=" pt-4">
                <h1 className="sm:text-6xl text-5xl font-bold">
                    30<span className="text-white">%</span>
                    <span className="text-sm ml-1">OFF</span>
                </h1>
                <p className="mt-4 text-[12px] sm:text-2xl leading-relaxed">
                    ហាងផ្តល់ជូនការបញ្ចុះតម្លៃពិសេស<br />
                    ត្រឹមតែសប្តាហ៍នេះប៉ុណ្ណោះ
                </p>
            </div>

            {/* Right Image */}
            <div className="relative">
                <img
                    src={imgBanner}
                    alt="Flashlight"
                    className="w-48 "
                />
            </div>
        </div>
    );
};

export default PromoBanner;

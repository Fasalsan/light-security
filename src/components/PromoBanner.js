// PromoBanner.js
import React from 'react';

const PromoBanner = () => {
    return (
        <div className="flex items-start justify-between bg-gradient-to-r from-blue-900 to-blue-400 rounded-2xl p-6 md:p-17 text-white">
            {/* Left Content */}
            <div className="mb-6 md:mb-0">
                <h1 className="sm:text-9xl text-6xl font-bold">
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
                    src="https://www.joopzy.com/wp-content/uploads/2022/04/cec92c92e79c63d6d3b589fe5353f589.jpg"
                    alt="Flashlight"
                    className="w-36 md:w-60"
                />
            </div>
        </div>
    );
};

export default PromoBanner;

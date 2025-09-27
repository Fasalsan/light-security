// // PromoBanner.js
// import React from 'react';
// import imgBanner from "../assets/imgBanner.png"

// const PromoBanner = () => {
//     return (
//         <div className="flex items-start justify-between bg-gradient-to-r from-blue-900 to-blue-300 rounded-2xl  py-2 pl-6 md:p-17 text-white">
//             {/* Left Content */}
//             <div className=" pt-4">
//                 <h1 className="sm:text-6xl text-5xl font-bold">
//                     30<span className="text-white">%</span>
//                     <span className="text-sm ml-1">OFF</span>
//                 </h1>
//                 <p className="mt-4 text-[12px] sm:text-2xl leading-relaxed">
//                     ហាងផ្តល់ជូនការបញ្ចុះតម្លៃពិសេស<br />
//                     ត្រឹមតែសប្តាហ៍នេះប៉ុណ្ណោះ
//                 </p>
//             </div>

//             {/* Right Image */}
//             <div className="relative">
//                 <img
//                     src={imgBanner}
//                     alt="Flashlight"
//                     className="w-48 "
//                 />
//             </div>
//         </div>
//     );
// };

// export default PromoBanner;


// PromoBanner.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Import your images
import img1 from "../assets/imgBanner.png";
import img2 from "../assets/imgBanner.png";
import img3 from "../assets/imgBanner.png";
import img4 from "../assets/imgBanner.png";
import img5 from "../assets/imgBanner.png";

const images = [img1, img2, img3, img4, img5];

const PromoBanner = () => {
    return (
        <div className="flex items-start justify-between bg-gradient-to-r from-blue-900 to-blue-300 rounded-2xl py-2 pl-6 md:p-8 text-white">
            {/* Left Content */}
            <div className="pt-4">
                <h1 className="sm:text-6xl text-5xl font-bold">
                    30<span className="text-white">%</span>
                    <span className="text-sm ml-1">OFF</span>
                </h1>
                <p className="mt-4 text-[12px] sm:text-2xl leading-relaxed">
                    ហាងយើងខ្ញុំផ្តល់ជូនការបញ្ចុះតម្លៃពិសេស
                    ត្រឹមតែសប្តាហ៍នេះប៉ុណ្ណោះ
                </p>
            </div>

            {/* Right Image Auto Slider */}
            <div className="relative w-48">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop
                    className="rounded-2xl"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`Banner ${index + 1}`}
                                className="w-full rounded-2xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PromoBanner;

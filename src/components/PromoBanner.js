
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Import your images
import img1 from "../assets/imageSlider/slider0.png";
import img2 from "../assets/imageSlider/slider1.png";
import img3 from "../assets/imageSlider/slider2.png";
import img4 from "../assets/imageSlider/slider3.png";
import img5 from "../assets/imageSlider/slider2.png";

const images = [img1, img2, img3, img4, img5];

const PromoBanner = () => {
    return (
        <div className="flex items-start justify-between bg-gradient-to-r from-blue-900 to-blue-300 rounded-2xl pb-2 pl-6 md:p-8 text-white mx-3">
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
            <div className="relative w-52 h-52">
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

import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const TelegramButton = () => {
    const openTelegram = () => {
        const telegramApp = "tg://resolve?domain=Electronic_sansan";
        window.location.href = telegramApp;
    };
    return (
        <button
            onClick={openTelegram}
            className="fixed bottom-5 right-5 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
        >
            <FaTelegramPlane size={24} />
        </button>
    );
};

export default TelegramButton;

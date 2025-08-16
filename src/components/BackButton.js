import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="flex items-center gap-1 py-1 text-red-600 hover:text-red-800 font-medium"
        >
            <IoIosArrowBack size={20} />
            ត្រឡប់ក្រោយ
        </button>
    );
}

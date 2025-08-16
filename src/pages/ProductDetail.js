import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function ProductDetail() {
    const location = useLocation();
    const product = location.state;
    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="pb-3">
                <BackButton />
            </div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="mb-4">
                <label htmlFor="">ទំនាក់ទំនងលេខ :</label>
                <p className="text-gray-700 flex gap-2"><span>081632687</span>/<span> 0975026561</span>/<span> 085546050</span></p>
            </div>

            <img
                src={product.image}
                alt={product.name}
                  className="w-full h-96a object-contain bg-gray-100"
            />

            <p className="text-lg font-semibold text-gray-800">តម្លៃ: ${product.price}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">&gt; {product.description}</p>
        </div>
    );
}

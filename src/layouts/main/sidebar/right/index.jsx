import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { decrementQuantity, incrementQuantity, setRemoveFromFavorite } from "../../../../store/cart";



export default function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartProducts, favoriteProducts } = useSelector((state) => state.cartProducts)


    const handleIncrement = (productId) => {
        dispatch(incrementQuantity(productId));
    };

    const handleDecrement = (productId) => {
        dispatch(decrementQuantity(productId));
    };
    return (
        <div className="w-full  p-4 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center px-2 cursor-pointer text-lg">
                    <FaHeart className="text-blue-violet" />
                    <p>Favoriler</p>
                </div>
                <div className="h-auto max-h-52 overflow-y-auto px-2 ">
                    {
                        favoriteProducts.map((product, index) => (
                            <div key={index} className="w-full items-center flex gap-2 border border-gray-200 mb-3">

                                <div className="w-1/4">
                                    <img src={product.image} className="w-full h-14 object-contain" />
                                </div>
                                <h1 className="font-bold text-xs">{product.title}</h1>

                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5 items-center px-2 cursor-pointer text-lg">
                        <FaCartArrowDown className="text-blue-violet" />
                        <p>Sepetim</p>
                    </div>
                    <div className="h-auto max-h-52 overflow-y-auto px-2 ">
                        {
                            cartProducts.map(product => (
                                <div key={product.id} className="w-full flex gap-2 border border-gray-200 mb-3">

                                    <div className="w-1/4">
                                        <img src={product.image} className="w-full h-14 object-contain" />
                                    </div>
                                    <div className="w-3/4 flex flex-col justify-around">
                                        <h1 className="font-bold text-xs">{product.title}</h1>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <button onClick={() => handleDecrement(product.id)} className="cursor-pointer"><FaCircleMinus className="text-blue-violet" /> </button>
                                                <span className="px-2">{product.quantity}</span>
                                                <button onClick={() => handleIncrement(product.id)} className="cursor-pointer"><FaCirclePlus className="text-blue-violet" /> </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>




                </div>
            </div>
        </div>
    );
}
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCartProduct, setFavoriteProduct, setRemoveFromFavorite } from "../../store/cart";
import { useEffect, useState } from "react";
import Button from "../button";
import { useNavigate } from "react-router-dom";


export default function Product({ item }) {
    const { id, image, title, description, price, sale } = item
    const { userRole } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const { cartProducts } = useSelector((state) => state.cartProducts)
    const [favorite, setFavorite] = useState(false);

    const navigate = useNavigate();

    const addToCart = () => {
        dispatch(setCartProduct(item));
    };

    const addToFavorite = () => {
        dispatch(setFavoriteProduct(item));
        setFavorite(true);
    }
    const removeFromFavorite = () => {
        dispatch(setRemoveFromFavorite(id));
        setFavorite(false);
    }

    useEffect(() => {
        console.log("Güncel Sepet:", cartProducts);
    }, [cartProducts]);

    return (
        <div className="w-3xs h-[320px] shadow-xl flex flex-col justify-between overflow-hidden hover:scale-105 transition-transform delay-150 cursor-pointer">
            <div className="flex items-center justify-center">
                <img src={image} className="w-2xs h-[150px] object-contain" />
            </div>
            <h1 onClick={() => navigate('/product-details/' + id)} className="font-bold px-2">{title}</h1>
            <p className="text-gray-500 px-2 text-xs">{description.length < 50 ? description : `${description.slice(0, 70)}...`}</p>
            <div className="flex flex-col">
                <div className="flex justify-between px-2 mb-4">
                    {
                        sale ? <div><span className="px-2 line-through text-red-600">{price}TL</span>{Math.round(price - (price * sale) / 100)}TL<span className="px-2"></span></div> : <span className="px-2">{price}TL</span>
                    }
                    <span className="px-2 text-red-600">
                        {
                            sale ? sale + "%" : null
                        }
                    </span>
                    {
                        !favorite ? <CiHeart onClick={addToFavorite} className="text-blue-violet text-xl cursor-pointer" />
                            :
                            <FaHeart onClick={removeFromFavorite} className="text-blue-violet text-xl cursor-pointer" />
                    }
                </div>
                {
                    userRole === "seller" ?
                        <Button
                            variant="primary"
                            size="md">
                            <FaTrash />
                        </Button>
                        :
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={addToCart}
                        >
                            Sepete ekle
                        </Button>
                }


            </div>
        </div>
    )
}
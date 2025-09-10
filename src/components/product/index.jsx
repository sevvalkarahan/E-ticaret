import { useSelector } from "react-redux";
import Button from "../button"
import { FaTrash } from "react-icons/fa6";


export default function Product({ item }) {
    const { image, title, description, price, sale } = item
    const { userRole } = useSelector((state) => state.auth)

    return (
        <div className="w-3xs h-[320px] shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-center">
                <img src={image} className="w-2xs h-[150px] object-contain" />
            </div>
            <h1 className="font-bold px-2">{title}</h1>
            <p className="text-gray-500 px-2 text-xs">{description.length < 50 ? description : `${description.slice(0, 70)}...`}</p>
            <div className="flex flex-col ">
                <div className="flex justify-between px-2">
                    {
                        sale ? <div><span className="px-2 line-through text-red-600">{price}TL</span>{Math.round(price - (price * sale) / 100)}TL<span className="px-2"></span></div> : <span className="px-2">{price}TL</span>
                    }
                    <span className="px-2 text-red-600">{
                        sale ? sale + "%" : null
                    }
                    </span>
                    {
                        userRole === "seller" ? <FaTrash className="text-red-600 cursor-pointer" /> : null
                    }
                </div>

                <Button item={"Sepete Ekle"} />
            </div>
        </div>
    )
}
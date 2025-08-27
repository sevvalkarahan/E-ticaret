import Button from "../button"

export default function Product({ item }) {
    const { image, title, description, price, sale } = item

    return (
        <div className="w-3xs h-[320px] shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-center">
                <img src={image} className="w-2xs h-[150px] object-contain" />
            </div>
            <h1 className="font-bold px-2">{title}</h1>
            <p className="text-gray-500 px-2 text-xs">{description.length < 50 ? description : `${description.slice(0, 70)}...`}</p>
            <div className="flex flex-col ">
                {sale ? <div><span className="px-2 line-through text-red-600">{price}TL</span>{Math.round(price - (price * sale) / 100)}TL<span className="px-2"></span></div> : <span className="px-2">{price}TL</span>}
                <span className="px-2 text-red-600">{sale ? sale + "%" : null}</span>
                <Button item={"Sepete Ekle"} />
            </div>
        </div>
    )
}
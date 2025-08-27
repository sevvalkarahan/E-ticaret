import Product from "../product";
import { Products as ProductData } from "../../data/products"
import { useSelector } from "react-redux";

export default function Products() {

    const { filteredProduct } = useSelector((state) => state.products)

    return (
        <div className="grid grid-cols-3 gap-10 py-5">
            {
                filteredProduct && filteredProduct.map(item => (
                    <Product key={item.id} item={item} />
                ))
            }
        </div>
    )
}
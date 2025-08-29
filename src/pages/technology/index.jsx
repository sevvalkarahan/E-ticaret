import Product from "../../components/product"
import { Products } from "../../data/products"
export default function Technology() {
    return (
        <div className="grid grid-cols-3 gap-10 py-5">
            {
                Products && Products.map(item => (
                    item.type === "technology" ?
                        <Product key={item.id} item={item} /> : null
                ))
            }
        </div>
    )
}
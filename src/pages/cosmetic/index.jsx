import Product from "../../components/product";
import { Products } from "../../data/products";

export default function Cosmetic() {
    return (
        <div className="grid grid-cols-3 gap-10 py-5">
            {
                Products && Products.map(item => (
                    item.type === "cosmetic" ?
                        <Product key={item.id} item={item} /> : null
                ))
            }
        </div>
    )
}
import Product from "../product";
import { useSelector } from "react-redux";
import { useFilters } from "../../store/hooks/useFilters";
import { filterProducts, sortProductsByPrice } from "../../store/utils/filterUtils";

export default function Products() {
    const { filteredProduct } = useSelector((state) => state.products)
    const { selectedBrands, selectedCategories, selectedPriceRanges, sortType } = useFilters()

    const filteredProducts = filterProducts(filteredProduct, null, selectedBrands, selectedCategories, selectedPriceRanges)

    const finalFilteredProducts = sortProductsByPrice(filteredProducts, sortType)

    return (
        <div className="grid grid-cols-3 gap-10 py-5">
            {finalFilteredProducts.map(item => (
                <Product key={item.id} item={item} />
            ))}
        </div>
    )
}
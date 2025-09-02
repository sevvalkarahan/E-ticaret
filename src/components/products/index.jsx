import Product from "../product";
import { Products as ProductData } from "../../data/products"
import { useSelector } from "react-redux";
import { useFilters } from "../../store/hooks/useFilters";
import { filterProducts } from "../../store/utils/filterUtils";

export default function Products() {
    const { filteredProduct } = useSelector((state) => state.products)
    const { selectedBrands, selectedCategories, selectedPriceRanges } = useFilters()

    // Apply additional filters to the already filtered products
    const finalFilteredProducts = filterProducts(filteredProduct, null, selectedBrands, selectedCategories, selectedPriceRanges)

    return (
        <div className="grid grid-cols-3 gap-10 py-5">
            {finalFilteredProducts.map(item => (
                <Product key={item.id} item={item} />
            ))}
        </div>
    )
}
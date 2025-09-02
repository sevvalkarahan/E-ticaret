import Product from "../../components/product";
import { Products } from "../../data/products";
import { useFilters } from "../../store/hooks/useFilters";
import { filterProducts } from "../../store/utils/filterUtils";

export default function Cosmetic() {
    const { selectedBrands, selectedCategories, selectedPriceRanges } = useFilters()

    const filteredProducts = filterProducts(Products, "cosmetic", selectedBrands, selectedCategories, selectedPriceRanges)

    return (
        <div className="grid grid-cols-3 gap-10 py-5">
            {filteredProducts.map(item => (
                <Product key={item.id} item={item} />
            ))}
        </div>
    )
}
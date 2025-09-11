import Product from "../../components/product"
import { Products } from "../../data/products"
import { useFilters } from "../../store/hooks/useFilters"
import { filterProducts, sortProductsByPrice } from "../../store/utils/filterUtils"

export default function Technology() {
    const { selectedBrands, selectedCategories, selectedPriceRanges, sortType } = useFilters()

    const filteredProducts = filterProducts(Products, "technology", selectedBrands, selectedCategories, selectedPriceRanges)
    const finalFilteredProducts = sortProductsByPrice(filteredProducts, sortType)

    return (
        <div className=" w-full flex justify-center items-center py-5">
            <div className="w-[80%] flex flex-wrap gap-x-5 gap-y-10">
                {finalFilteredProducts.map(item => (
                    <Product key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
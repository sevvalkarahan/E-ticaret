import { Products } from '../../data/products'

/**
 * Utility function to filter products based on selected filters
 * @param {Array} products - Array of products to filter
 * @param {string} type - Product type filter (technology, clothing, cosmetic)
 * @param {Array} selectedBrands - Array of selected brand names
 * @param {Array} selectedCategories - Array of selected category names
 * @param {Array} selectedPriceRanges - Array of selected price ranges
 * @returns {Array} Filtered products
 */
export const filterProducts = (products, type, selectedBrands = [], selectedCategories = [], selectedPriceRanges = []) => {
    return products.filter(item => {
        // First filter by type
        if (type && item.type !== type) return false

        // Then filter by selected brands (if any are selected)
        if (selectedBrands.length > 0 && !selectedBrands.includes(item.brand)) {
            return false
        }

        // Then filter by selected categories (if any are selected)
        if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) {
            return false
        }

        // Then filter by selected price ranges (if any are selected)
        if (selectedPriceRanges.length > 0) {
            const price = parseInt(item.price)
            const matchesPriceRange = selectedPriceRanges.some(range => {
                switch (range) {
                    case '0-800':
                        return price >= 0 && price <= 800
                    case '800-2000':
                        return price > 800 && price <= 2000
                    case '2000-4000':
                        return price > 2000 && price <= 4000
                    case '4000-10000':
                        return price > 4000 && price <= 10000
                    case '10000-15000':
                        return price > 10000 && price <= 15000
                    case '15000-22000':
                        return price > 15000 && price <= 22000
                    case '22000+':
                        return price > 22000
                    case '4000+':
                        return price > 4000
                    default:
                        return false
                }
            })
            
            if (!matchesPriceRange) {
                return false
            }
        }

        return true
    })
}

/**
 * Get all unique brands from products
 * @param {Array} products - Array of products
 * @returns {Array} Array of unique brand names
 */
export const getUniqueBrands = (products) => {
    return [...new Set(products.map(product => product.brand))]
}

/**
 * Get all unique categories from products
 * @param {Array} products - Array of products
 * @returns {Array} Array of unique category names
 */
export const getUniqueCategories = (products) => {
    return [...new Set(products.map(product => product.category))]
}

/**
 * Get all unique brands for a specific product type
 * @param {Array} products - Array of products
 * @param {string} type - Product type
 * @returns {Array} Array of unique brand names for the type
 */
export const getBrandsByType = (products, type) => {
    return getUniqueBrands(products.filter(product => product.type === type))
}

/**
 * Get all unique categories for a specific product type
 * @param {Array} products - Array of products
 * @param {string} type - Product type
 * @returns {Array} Array of unique category names for the type
 */
export const getCategoriesByType = (products, type) => {
    return getUniqueCategories(products.filter(product => product.type === type))
}

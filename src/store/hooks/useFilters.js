import { useSelector, useDispatch } from 'react-redux'
import {
    addBrandFilter,
    removeBrandFilter,
    toggleBrandFilter,
    clearBrandFilters,
    addCategoryFilter,
    removeCategoryFilter,
    toggleCategoryFilter,
    clearCategoryFilters,
    addPriceRangeFilter,
    removePriceRangeFilter,
    togglePriceRangeFilter,
    clearPriceRangeFilters,
    clearAllFilters,
    toggleSortType,
    setSortType
} from '../filters'

export const useFilters = () => {
    const dispatch = useDispatch()
    const { selectedBrands, selectedCategories, selectedPriceRanges, sortType } = useSelector((state) => state.filters)

    // Brand filter methods
    const addBrand = (brand) => dispatch(addBrandFilter(brand))
    const removeBrand = (brand) => dispatch(removeBrandFilter(brand))
    const toggleBrand = (brand) => dispatch(toggleBrandFilter(brand))
    const clearBrands = () => dispatch(clearBrandFilters())

    // Category filter methods
    const addCategory = (category) => dispatch(addCategoryFilter(category))
    const removeCategory = (category) => dispatch(removeCategoryFilter(category))
    const toggleCategory = (category) => dispatch(toggleCategoryFilter(category))
    const clearCategories = () => dispatch(clearCategoryFilters())

    // Price range filter methods
    const addPriceRange = (range) => dispatch(addPriceRangeFilter(range))
    const removePriceRange = (range) => dispatch(removePriceRangeFilter(range))
    const togglePriceRange = (range) => dispatch(togglePriceRangeFilter(range))
    const clearPriceRanges = () => dispatch(clearPriceRangeFilters())

    // Sort methods
    const toggleSort = () => dispatch(toggleSortType())
    const setSort = (type) => dispatch(setSortType(type))

    // Utility methods
    const clearAll = () => dispatch(clearAllFilters())

    const isBrandSelected = (brand) => selectedBrands.includes(brand)
    const isCategorySelected = (category) => selectedCategories.includes(category)
    const isPriceRangeSelected = (range) => selectedPriceRanges.includes(range)

    const hasActiveFilters = () => {
        return selectedBrands.length > 0 || selectedCategories.length > 0 || selectedPriceRanges.length > 0
    }

    return {
        // State
        selectedBrands,
        selectedCategories,
        selectedPriceRanges,
        sortType,

        // Brand methods
        addBrand,
        removeBrand,
        toggleBrand,
        clearBrands,
        isBrandSelected,

        // Category methods
        addCategory,
        removeCategory,
        toggleCategory,
        clearCategories,
        isCategorySelected,

        // Price range methods
        addPriceRange,
        removePriceRange,
        togglePriceRange,
        clearPriceRanges,
        isPriceRangeSelected,

        // Sort methods
        toggleSort,
        setSort,

        // Utility methods
        clearAll,
        hasActiveFilters
    }
}
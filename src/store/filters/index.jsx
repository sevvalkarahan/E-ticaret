import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedBrands: [],
    selectedCategories: [],
    selectedPriceRanges: [],
    sortType: 'asc' // 'asc' for ascending, 'desc' for descending
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        // Brand filter actions
        addBrandFilter: (state, action) => {
            if (!state.selectedBrands.includes(action.payload)) {
                state.selectedBrands.push(action.payload)
            }
        },
        removeBrandFilter: (state, action) => {
            state.selectedBrands = state.selectedBrands.filter(brand => brand !== action.payload)
        },
        toggleBrandFilter: (state, action) => {
            const brand = action.payload
            if (state.selectedBrands.includes(brand)) {
                state.selectedBrands = state.selectedBrands.filter(b => b !== brand)
            } else {
                state.selectedBrands.push(brand)
            }
        },
        clearBrandFilters: (state) => {
            state.selectedBrands = []
        },

        // Category filter actions
        addCategoryFilter: (state, action) => {
            if (!state.selectedCategories.includes(action.payload)) {
                state.selectedCategories.push(action.payload)
            }
        },
        removeCategoryFilter: (state, action) => {
            state.selectedCategories = state.selectedCategories.filter(category => category !== action.payload)
        },
        toggleCategoryFilter: (state, action) => {
            const category = action.payload
            if (state.selectedCategories.includes(category)) {
                state.selectedCategories = state.selectedCategories.filter(c => c !== category)
            } else {
                state.selectedCategories.push(category)
            }
        },
        clearCategoryFilters: (state) => {
            state.selectedCategories = []
        },

        // Price range filter actions
        addPriceRangeFilter: (state, action) => {
            if (!state.selectedPriceRanges.includes(action.payload)) {
                state.selectedPriceRanges.push(action.payload)
            }
        },
        removePriceRangeFilter: (state, action) => {
            state.selectedPriceRanges = state.selectedPriceRanges.filter(range => range !== action.payload)
        },
        togglePriceRangeFilter: (state, action) => {
            const range = action.payload
            if (state.selectedPriceRanges.includes(range)) {
                state.selectedPriceRanges = state.selectedPriceRanges.filter(r => r !== range)
            } else {
                state.selectedPriceRanges.push(range)
            }
        },
        clearPriceRangeFilters: (state) => {
            state.selectedPriceRanges = []
        },

        // Clear all filters
        clearAllFilters: (state) => {
            state.selectedBrands = []
            state.selectedCategories = []
            state.selectedPriceRanges = []
        },

        // Sort actions
        toggleSortType: (state) => {
            state.sortType = state.sortType === 'asc' ? 'desc' : 'asc'
        },
        setSortType: (state, action) => {
            state.sortType = action.payload
        }
    }
})

export const {
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
} = filtersSlice.actions

export default filtersSlice.reducer
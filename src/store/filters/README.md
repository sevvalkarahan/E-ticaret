# Filters System

This directory contains the Redux slice and related utilities for managing product filters in the e-commerce application.

## Files

- `index.jsx` - Redux slice for managing filter state
- `../hooks/useFilters.js` - Custom hook for using filters
- `../utils/filterUtils.js` - Utility functions for filtering products

## Features

### Filter Types
- **Brand Filters**: Filter products by brand (acer, apple, philips, zara)
- **Category Filters**: Filter products by category (bilgisayar, telefon, televizyon, pantolon, t-shirt, parfüm)
- **Price Range Filters**: Filter products by price ranges (0-800, 800-2000, 2000-4000, 4000-10000, 10000-15000, 15000-22000, 22000+, 4000+)

### Actions Available
- `addBrandFilter(brand)` - Add a brand to selected filters
- `removeBrandFilter(brand)` - Remove a brand from selected filters
- `toggleBrandFilter(brand)` - Toggle a brand filter on/off
- `clearBrandFilters()` - Clear all brand filters
- `addCategoryFilter(category)` - Add a category to selected filters
- `removeCategoryFilter(category)` - Remove a category from selected filters
- `toggleCategoryFilter(category)` - Toggle a category filter on/off
- `clearCategoryFilters()` - Clear all category filters
- `clearAllFilters()` - Clear all filters

### Usage

```javascript
import { useFilters } from '../store/hooks/useFilters'

function MyComponent() {
    const { 
        selectedBrands, 
        selectedCategories, 
        selectedPriceRanges,
        toggleBrand, 
        toggleCategory,
        togglePriceRange,
        clearAll 
    } = useFilters()

    return (
        <div>
            <button onClick={() => toggleBrand('apple')}>
                Toggle Apple
            </button>
            <button onClick={() => togglePriceRange('0-800')}>
                Toggle 0-800 TL Range
            </button>
            <button onClick={clearAll}>
                Clear All Filters
            </button>
        </div>
    )
}
```

### Filtering Logic

The filtering system works with AND logic:
- If no filters are selected, all products of the current type are shown
- If brand filters are selected, only products matching those brands are shown
- If category filters are selected, only products matching those categories are shown
- If price range filters are selected, only products within those price ranges are shown
- If multiple filter types are selected, products must match all criteria (brand AND category AND price range)

### Integration with Pages

All product pages (Technology, Clothing, Cosmetic) and the main Products component automatically use the selected filters to display relevant products. The filtering is applied in real-time as users check/uncheck filter options in the sidebar.

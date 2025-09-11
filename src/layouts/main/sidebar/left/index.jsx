import { FaFilter } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdPricetags } from "react-icons/io";
import { FaStore } from "react-icons/fa";
import { _filtered } from "../../../../store/product";
import { useDispatch, useSelector } from 'react-redux';
import { useFilters } from '../../../../store/hooks/useFilters';
import Button from "../../../../components/button";



export default function Filter() {
    const dispatch = useDispatch();
    const activeCategory = useSelector((state) => state.category.activeCategory);
    const {
        toggleBrand,
        toggleCategory,
        togglePriceRange,
        isBrandSelected,
        isCategorySelected,
        isPriceRangeSelected,
        clearAll,
        hasActiveFilters,
        sortType,
        setSort
    } = useFilters();

    const renderSubcategories = () => {
        switch (activeCategory) {
            case 'technology':
                return (
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><BiSolidCategory className="text-blue-violet" /> Kategoriler</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isCategorySelected('bilgisayar')}
                                        onChange={() => toggleCategory('bilgisayar')}
                                    />
                                    Bilgisayar
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isCategorySelected('telefon')}
                                        onChange={() => toggleCategory('telefon')}
                                    />
                                    Telefon
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isCategorySelected('televizyon')}
                                        onChange={() => toggleCategory('televizyon')}
                                    />
                                    Televizyon
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><FaStore className="text-blue-violet" /> Markalar</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isBrandSelected('acer')}
                                        onChange={() => toggleBrand('acer')}
                                    />
                                    Acer
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isBrandSelected('apple')}
                                        onChange={() => toggleBrand('apple')}
                                    />
                                    Apple
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isBrandSelected('philips')}
                                        onChange={() => toggleBrand('philips')}
                                    />
                                    Philips
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><IoMdPricetags className="text-blue-violet" /> Fiyat</h1>
                            <div className="flex px-7 ">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('0-800')}
                                        onChange={() => togglePriceRange('0-800')}
                                    />
                                    0 TL - 800 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('800-2000')}
                                        onChange={() => togglePriceRange('800-2000')}
                                    />
                                    800 TL - 2000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('2000-4000')}
                                        onChange={() => togglePriceRange('2000-4000')}
                                    />
                                    2000 TL - 4000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('4000-10000')}
                                        onChange={() => togglePriceRange('4000-10000')}
                                    />
                                    4000 TL - 10000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('10000-15000')}
                                        onChange={() => togglePriceRange('10000-15000')}
                                    />
                                    10000 TL - 15000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('15000-22000')}
                                        onChange={() => togglePriceRange('15000-22000')}
                                    />
                                    15000 TL - 22000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('22000+')}
                                        onChange={() => togglePriceRange('22000+')}
                                    />
                                    22000+ TL
                                </label>
                            </div>
                        </div>

                    </div>
                );
            case 'clothing':
                return (
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><BiSolidCategory className="text-blue-violet" /> Kategoriler</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isCategorySelected('pantolon')}
                                        onChange={() => toggleCategory('pantolon')}
                                    />
                                    Pantolon
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isCategorySelected('t-shirt')}
                                        onChange={() => toggleCategory('t-shirt')}
                                    />
                                    T-shirt
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><FaStore className="text-blue-violet" /> Markalar</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isBrandSelected('zara')}
                                        onChange={() => toggleBrand('zara')}
                                    />
                                    Zara
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><IoMdPricetags className="text-blue-violet" /> Fiyat</h1>
                            <div className="flex px-7 ">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('0-800')}
                                        onChange={() => togglePriceRange('0-800')}
                                    />
                                    0 TL - 800 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('800-2000')}
                                        onChange={() => togglePriceRange('800-2000')}
                                    />
                                    800 TL - 2000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('2000-4000')}
                                        onChange={() => togglePriceRange('2000-4000')}
                                    />
                                    2000 TL - 4000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('4000+')}
                                        onChange={() => togglePriceRange('4000+')}
                                    />
                                    4000+ TL
                                </label>
                            </div>

                        </div>

                    </div>
                );
            case 'cosmetic':
                return (
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><BiSolidCategory className="text-blue-violet" /> Kategoriler</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isCategorySelected('parfüm')}
                                        onChange={() => toggleCategory('parfüm')}
                                    />
                                    Parfüm
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><FaStore className="text-blue-violet" /> Markalar</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isBrandSelected('zara')}
                                        onChange={() => toggleBrand('zara')}
                                    />
                                    Zara
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><IoMdPricetags className="text-blue-violet" /> Fiyat</h1>
                            <div className="flex px-7 ">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('0-800')}
                                        onChange={() => togglePriceRange('0-800')}
                                    />
                                    0 TL - 800 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('800-2000')}
                                        onChange={() => togglePriceRange('800-2000')}
                                    />
                                    800 TL - 2000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('2000-4000')}
                                        onChange={() => togglePriceRange('2000-4000')}
                                    />
                                    2000 TL - 4000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        checked={isPriceRangeSelected('4000+')}
                                        onChange={() => togglePriceRange('4000+')}
                                    />
                                    4000+ TL
                                </label>
                            </div>

                        </div>

                    </div>
                );
            case 'all':
            default:
                return (
                    <>
                        <p className="text-gray-500 p-3">Filtreleri görmek için lütfen bir kategori seçin.</p>
                    </>
                );
        }
    };
    return (
        <div className="w-full  px-4 py-3 ">
            <div className="flex gap-4 text-blue-violet font-bold">
                <FaFilter className="text-2xl" />
                <p className="text-xl">Filtrele</p>
            </div>
            <div className="px-2 py-4">
                {renderSubcategories()}
            </div>
            {hasActiveFilters() && (
                <div className="px-2 py-4">
                    <button
                        onClick={clearAll}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
                    >
                        Filtreleri Temizle
                    </button>
                </div>
            )}
            <div className="px-2 py-4 flex flex-col gap-y-4">
                <h1 className="font-bold text-xl flex items-center p-0 gap-2"><LuArrowUpDown className="text-blue-violet" />Sırala</h1>
                <Button
                    onClick={() => setSort('asc')}
                    variant="accent"
                >
                    Artan fiyat
                </Button>
                <Button
                    onClick={() => setSort('desc')}
                    variant="accent"
                >
                    Azalan fiyat
                </Button>
            </div>
        </div>
    )
}
import { FaFilter } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdPricetags } from "react-icons/io";
import { FaStore } from "react-icons/fa";
import { _filtered } from "../../../../store/product";
import { useDispatch, useSelector } from 'react-redux';




export default function Filter() {
    const dispatch = useDispatch();
    const activeCategory = useSelector((state) => state.category.activeCategory);

    const renderSubcategories = () => {
        switch (activeCategory) {
            case 'technology':
                return (
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><BiSolidCategory className="text-blue-violet" /> Kategoriler</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    Bilgisayar
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    Telefon
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    Televizyon
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><FaStore className="text-blue-violet" /> Markalar</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    Acer
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    Apple
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    Philips
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><IoMdPricetags className="text-blue-violet" /> Fiyat</h1>
                            <div className="flex px-7 ">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    0 TL - 800 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    800 TL - 2000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    2000 TL - 4000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    4000 TL - 10000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    10000 TL - 15000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    15000 TL - 22000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
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
                                    <input type="checkbox" />
                                    Pantolon
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    T-shirt
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><FaStore className="text-blue-violet" /> Markalar</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    Zara
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><IoMdPricetags className="text-blue-violet" /> Fiyat</h1>
                            <div className="flex px-7 ">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    0 TL - 800 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    800 TL - 2000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    2000 TL - 4000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
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
                                    <input type="checkbox" />
                                    Parfüm
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><FaStore className="text-blue-violet" /> Markalar</h1>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    Zara
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl flex items-center p-3 gap-2"><IoMdPricetags className="text-blue-violet" /> Fiyat</h1>
                            <div className="flex px-7 ">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    0 TL - 800 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    800 TL - 2000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
                                    2000 TL - 4000 TL
                                </label>
                            </div>
                            <div className="flex px-7">
                                <label className="text-sm text-gray-500">
                                    <input type="checkbox" />
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
        <div className=" sticky w-1/6 border border-blue-violet px-4 py-3">
            <div className="flex gap-4 text-blue-violet font-bold">
                <FaFilter className="text-2xl" />
                <p className="text-xl">Filtrele</p>
            </div>
            <div className="px-2 py-4">
                {renderSubcategories()}
            </div>
            <div className="px-2 py-4 flex flex-col gap-y-4">
                <h1 className="font-bold text-xl flex items-center p-0 gap-2"><LuArrowUpDown className="text-blue-violet" />Sırala</h1>
                <button type="number" className="px-3 text-gray-700 w-[130px] h-[30px] cursor-pointer">Artan fiyat</button>
                <button type="number" className="px-3 text-gray-700 w-[130px] h-[30px] cursor-pointer">Azalan fiyat</button>
            </div>
        </div>
    )
}
import { FaFilter } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { LuArrowUpDown } from "react-icons/lu";
import { useDispatch } from 'react-redux'
import { _filtered } from "../../../../store/product";


export default function Filter() {

    const dispatch = useDispatch()

    return (
        <div className=" sticky w-1/6 border border-blue-violet px-4 py-3">
            <div className="flex gap-4 text-blue-violet font-bold">
                <FaFilter className="text-2xl" />
                <p className="text-xl">Filtrele</p>
            </div>
            <div className="px-2 py-4">
                <h1 className="font-bold text-xl flex items-center p-0 gap-2"><BiSolidCategory className="text-blue-violet" /> Katagoriler</h1>
                <div className={"flex flex-col"}>
                    <h3 className={"p-3 font-bold text-gray-700"}>Teknoloji</h3>
                    <button className={"px-3 py-1 text-gray-600"} onClick={() => dispatch(_filtered("bilgisayar"))}>Bilgisayar</button>
                    <button className={"px-3 py-1 text-gray-600"} onClick={() => dispatch(_filtered("telefon"))}>Telefon</button>
                    <button className={"px-3 py-1 text-gray-600"} onClick={() => dispatch(_filtered("televizyon"))}>Televizyon</button>
                </div>
                <div className={"flex flex-col"}>
                    <h3 className={"p-3 font-bold text-gray-700"}>Giyim</h3>
                    <button className={"px-3 py-1 text-gray-600"} onClick={() => dispatch(_filtered("pantolon"))}>Pantolon</button>
                    <button className={"px-3 py-1 text-gray-600"} onClick={() => dispatch(_filtered("t-shirt"))}>T-shirt</button>
                </div>
                <div className={"flex flex-col"}>
                    <h3 className={"p-3 font-bold text-gray-700"}>Kozmetik</h3>
                    <button className={"px-3 py-1 text-gray-600"} onClick={() => dispatch(_filtered("parfüm"))}>Parfüm</button>
                </div>
            </div>
            <div className="px-2 py-4 flex flex-col gap-y-4">
                <h1 className="font-bold text-xl flex items-center p-0 gap-2"><LuArrowUpDown className="text-blue-violet" />Sırala</h1>
                <button type="number" className="px-3 text-gray-700 w-[130px] h-[30px] cursor-pointer">Artan fiyat</button>
                <button type="number" className="px-3 text-gray-700 w-[130px] h-[30px] cursor-pointer">Azalan fiyat</button>
            </div>

        </div>
    )
}
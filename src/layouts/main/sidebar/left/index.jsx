import { FaFilter } from "react-icons/fa";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { useDispatch } from 'react-redux'
import { _filtered } from "../../../../store/product";


export default function Filter() {

    const dispatch = useDispatch()

    return (
        <div className=" sticky w-1/6 border px-4 py-3">
            <div className="flex gap-4 text-blue-violet font-bold">
                <FaFilter className="text-2xl" />
                <p className="text-xl">Filtrele</p>
            </div>
            <div className="px-2 py-4">
                <h1 className="font-bold text-xl">Katagoriler</h1>
                <Popover>
                    <PopoverButton className={"p-3 font-bold text-gray-700"}>Teknoloji</PopoverButton>
                    <PopoverPanel className={"p-5 text-gray-600"}><button onClick={() => dispatch(_filtered("bilgisayar"))}>Bilgisayar</button></PopoverPanel>
                    <PopoverPanel className={"p-5 text-gray-600"}><button>Telefon</button></PopoverPanel>
                    <PopoverPanel className={"p-5 text-gray-600"}><button>Televizyon</button></PopoverPanel>
                </Popover>
                <Popover>
                    <PopoverButton className={"p-3 font-bold text-gray-700"}>Giyim</PopoverButton>
                    <PopoverPanel className={"p-5 text-gray-600"}><button>Pantolon</button></PopoverPanel>
                    <PopoverPanel className={"p-5 text-gray-600"}><button>T-shirt</button></PopoverPanel>
                </Popover>
                <Popover>
                    <PopoverButton className={"p-3 font-bold text-gray-700"}>Kozmetik</PopoverButton>
                    <PopoverPanel className={"p-5 text-gray-600"}><button>Parfüm</button></PopoverPanel>
                </Popover>

            </div>
            <div className="px-2 py-4 flex flex-col gap-y-4">
                <h1 className="font-bold text-xl">Fiyat</h1>
                <input type="number" className="px-5 py-3 w-[150px] h-[40px] border border-blue-violet/40 outline-0" placeholder="en az" />
                <input type="number" className="px-5 py-3 w-[150px] h-[40px] border border-blue-violet/40 outline-0" placeholder="en çok" />
                <button className="px-5 py-3 w-[150px] h-[40px] rounded-md text-light-yellow bg-blue-violet cursor-pointer outline-0 leading-1.5"> uygula</button>
            </div>

        </div>
    )
}
import Logo from "../../../public/logo.png"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="sticky top-0 w-full h-auto bg-blue-violet flex items-center">
            <div className="w-1/6 flex flex-col items-center">
                <img src={Logo} className="w-[4rem] rounded-full" />
                <span className="text-light-yellow text-[12px]">Karanfil Shopping</span>
            </div>

            <nav className="flex flex-1 font-bold text-light-yellow items-center gap-8 px-2 ">
                <Link to={'/'}>Tümü</Link>
                <Link>Çok Satanlar</Link>
                <Link>İndirimdekiler</Link>
            </nav>
        </div>
    )
}
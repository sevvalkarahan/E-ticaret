import Logo from "../../../public/logo.png"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from "../../store/category";
import { FaUser } from "react-icons/fa";

export default function Header() {

    const user = useSelector((state) => state.auth.currentUser);

    const dispatch = useDispatch();

    const handleCategoryClick = (type) => {
        dispatch(setActiveCategory(type))
    }

    return (
        <div className="sticky top-0 w-full h-auto bg-blue-violet flex items-center">
            <div className="w-1/6 flex flex-col items-center">
                <img src={Logo} className="w-[4rem] rounded-full" />
                <span className="text-light-yellow text-[12px]">Karanfil Shopping</span>
            </div>

            <nav className="flex flex-1 font-bold text-light-yellow items-center gap-8 px-2 text-shadow-lg">
                <Link onClick={() => handleCategoryClick('all')} className="hover:text-lg transition-all" to={'/'}>Tümü</Link>
                <Link onClick={() => handleCategoryClick('technology')} className="hover:text-lg transition-all" to={'/technology'}>Teknoloji</Link>
                <Link onClick={() => handleCategoryClick('clothing')} className="hover:text-lg transition-all" to={'/clothing'}>Giyim</Link>
                <Link onClick={() => handleCategoryClick('cosmetic')} className="hover:text-lg transition-all" to={'/cosmetic'}>Kozmetik</Link>
            </nav>

            {
                user ? (
                    <div className="flex mx-5 items-center cursor-pointer hover:scale-110 transition-transform" >
                        <FaUser className="text-light-yellow text-xl p-0 m-0" />
                        <span className="text-light-yellow text-lg ml-2">{user?.name}</span>
                    </div>
                ) : null
            }


        </div>
    )
}
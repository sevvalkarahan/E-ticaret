import Logo from "../../../public/logo.png"
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from "../../store/category";
import { FaUser } from "react-icons/fa";
import { logout, setUserRole } from "../../store/authSlice";
import { LuUserPen } from "react-icons/lu";
import { useState } from "react";

export default function Header() {

    const user = useSelector((state) => state.auth.currentUser);
    const userRole = useSelector((state) => state.auth.userRole);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleRoleChange = (e) => {
        dispatch(setUserRole(e.target.value));
    };


    const handleCategoryClick = (type) => {
        dispatch(setActiveCategory(type))
    }
    const handleLogout = () => {
        dispatch(logout());
        Navigate("/login");
    };




    return (
        <div className="sticky top-0 w-full h-20 bg-blue-violet flex items-center">
            <div className="w-1/6 flex flex-col items-center">
                <img src={Logo} className="w-[3rem] rounded-full" />
                <span className="text-light-yellow text-[12px]">E-ticaret</span>
            </div>

            <nav className="flex flex-1 font-bold text-light-yellow items-center gap-8 px-2 text-shadow-lg">
                <Link onClick={() => handleCategoryClick('all')} className="hover:text-lg transition-all" to={'/'}>Tümü</Link>
                <Link onClick={() => handleCategoryClick('technology')} className="hover:text-lg transition-all" to={'/technology'}>Teknoloji</Link>
                <Link onClick={() => handleCategoryClick('clothing')} className="hover:text-lg transition-all" to={'/clothing'}>Giyim</Link>
                <Link onClick={() => handleCategoryClick('cosmetic')} className="hover:text-lg transition-all" to={'/cosmetic'}>Kozmetik</Link>
            </nav>

            {
                user ? (
                    <div className="flex flex-col">
                        <div onClick={() => setShowModal(!showModal)} className="flex mx-5 items-center cursor-pointer " >
                            <FaUser className="text-light-yellow text-xl p-0 m-0" />
                            <span className="text-light-yellow text-lg ml-2">{user?.name}</span>
                            {
                                showModal ? <div className="border border-light-yellow w-40 absolute top-12 right-0 shadow-lg rounded-lg ">
                                    <div
                                        className="w-full font-bold py-2 rounded-lg flex gap-5 items-center px-2 cursor-pointer text-lg bg-light-yellow text-blue-violet hover:bg-blue-violet hover:text-light-yellow transition-colors"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <LuUserPen />
                                        <p>Profil</p>
                                    </div>
                                    <div
                                        className="w-full font-bold py-2 rounded-lg flex gap-5 items-center px-2 cursor-pointer text-lg bg-light-yellow text-blue-violet hover:bg-blue-violet hover:text-light-yellow transition-colors"
                                        onClick={handleLogout}
                                    >
                                        <RiLogoutBoxLine />
                                        <p>Çıkış Yap</p>
                                    </div>
                                </div> : null
                            }
                        </div>
                        <div className="flex gap-3 text-light-yellow">
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="buyer"
                                    onChange={handleRoleChange}
                                    checked={userRole === 'buyer'}
                                /> alıcı
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="seller"
                                    onChange={handleRoleChange}
                                    checked={userRole === 'seller'}
                                /> satıcı
                            </label>
                        </div>

                    </div>
                ) : null
            }


        </div>
    )
}
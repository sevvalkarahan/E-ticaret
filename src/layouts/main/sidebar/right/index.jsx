import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../store/authSlice";

export default function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="w-full  p-4 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center px-2 cursor-pointer text-lg">
                    <FaHeart className="text-blue-violet" />
                    <p>Favoriler</p>
                </div>
                <div className="flex gap-5 items-center px-2 cursor-pointer text-lg">
                    <FaCartArrowDown className="text-blue-violet" />
                    <p>Sepetim</p>
                </div>
            </div>
            <div
                className="w-full py-2 rounded-lg flex gap-5 items-center px-2 cursor-pointer text-lg bg-blue-violet text-light-yellow"
                onClick={handleLogout}
            >
                <RiLogoutBoxLine />
                <p>Çıkış Yap</p>
            </div>
        </div>
    );
}
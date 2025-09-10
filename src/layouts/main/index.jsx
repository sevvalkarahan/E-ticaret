import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./sidebar/left";
import Profile from "./sidebar/right";
import Header from "../../components/header";
import { resetJustLoggedIn } from "../../store/authSlice";
import { setUserRole } from "../../store/authSlice";


export default function MainLayout() {
    const justLoggedIn = useSelector((state) => state.auth.justLoggedIn);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        if (justLoggedIn) {
            setShowModal(true);
            dispatch(resetJustLoggedIn());
        }
    }, [justLoggedIn, dispatch,]);

    const handleRoleClick = (role) => {
        dispatch(setUserRole(role));
        console.log(role);
        setShowModal(false);
    };



    return (
        <div className="w-full h-screen flex flex-col">

            <div className="sticky top-0 z-10">
                <Header />
            </div>
            <div className="flex flex-1 w-full">
                <div className="w-1/6">
                    <div className="sticky top-24 ">
                        <Filter />
                    </div>
                </div>
                <main className="flex-1 justify-center border border-transparent border-x-blue-violet ">
                    <Outlet />
                </main>
                <div className="w-1/6">
                    <div className="sticky top-24">
                        <Profile />
                    </div>
                </div>
            </div>
            {showModal && (
                <div className=" fixed inset-0 flex items-center justify-center bg-black/70 z-50">
                    <div className="flex flex-col justify-evenly bg-white p-8 rounded-xl shadow-lg w-sm h-72">
                        <h2 className="text-xl font-bold mb-4">Hoş geldiniz!</h2>
                        <p>Henüz alıcı/satıcı seçimi yapmadınız. Lütfen rolünüzü seçiniz.</p>
                        <div className="flex  justify-between gap-4">
                            <button
                                className="w-1/2 cursor-pointer px-4 py-2 bg-blue-violet text-white rounded "
                                onClick={() => handleRoleClick("buyer")}
                            >
                                Alıcı
                            </button>
                            <button
                                className="w-1/2 cursor-pointer px-4 py-2 bg-blue-violet text-white rounded "
                                onClick={() => handleRoleClick("seller")}
                            >
                                Satıcı
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
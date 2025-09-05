import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/authSlice";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.auth.users);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find((u) => u.email === form.email);

        if (!user) {
            setError("Bu e-posta adresiyle kayıtlı bir kullanıcı bulunamadı.");
            return;
        }
        if (user.password !== form.password) {
            setError("Şifre hatalı. Lütfen tekrar deneyin.");
            return;
        }

        dispatch(login(form));
        navigate("/");
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <div className="w-1/3 h-[70%] flex flex-col shadow-xl rounded-2xl bg-white p-6">
                <div className="flex w-full h-14 mb-4">
                    <Link
                        to="/login"
                        className="bg-white text-xl text-indigo-600 font-bold flex items-center justify-center cursor-pointer w-1/2 rounded-tl-2xl border-b-4 border-indigo-600"
                    >
                        <span>Giriş Yap</span>
                    </Link>
                    <Link
                        to="/register"
                        className="bg-gray-100 text-gray-500 flex items-center justify-center cursor-pointer w-1/2 rounded-tr-2xl hover:text-indigo-600 transition-colors duration-300"
                    >
                        <span>Kayıt Ol</span>
                    </Link>
                </div>

                <form
                    className="flex flex-col justify-around flex-grow"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="text-gray-700 font-semibold">
                            E-mail
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="block bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-0 text-gray-900 w-full rounded-md p-2 my-2 transition"
                            />
                        </label>
                        <label className="text-gray-700 font-semibold">
                            Şifre
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="block bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-0 text-gray-900 w-full rounded-md p-2 my-2 transition"
                            />
                        </label>
                        {error && (
                            <div className="text-red-500 text-sm my-2">{error}</div>
                        )}
                        <button
                            type="button"
                            className="flex items-center justify-center gap-3 border border-gray-300 text-gray-700 hover:bg-gray-100 w-full p-2 rounded-lg my-3 transition"
                        >
                            <FaGoogle className="text-indigo-600 text-2xl" />
                            Google ile giriş yap
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center gap-3 border border-gray-300 text-gray-700 hover:bg-gray-100 w-full p-2 rounded-lg my-3 transition"
                        >
                            <FaFacebook className="text-indigo-600 text-2xl" />
                            Facebook ile giriş yap
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-indigo-600 text-white rounded-lg mt-3 hover:bg-indigo-700 transition"
                    >
                        Giriş Yap
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

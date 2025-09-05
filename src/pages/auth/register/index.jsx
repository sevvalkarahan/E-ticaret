import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register as registerUser } from "../../../store/authSlice";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        kvkk: false,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password || !form.gender || !form.kvkk) {
            alert("Lütfen tüm alanları doldurun ve KVKK onayını verin.");
            return;
        }
        dispatch(registerUser(form));
        alert("Kayıt başarılı! Giriş yapabilirsiniz.");
        navigate("/login");
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <div className="w-1/3 h-[80%] flex flex-col shadow-xl rounded-2xl bg-white p-6">
                <div className="flex w-full h-14 mb-4">
                    <Link
                        to="/login"
                        className="bg-gray-100 text-gray-500 flex items-center justify-center cursor-pointer w-1/2 rounded-tl-2xl hover:text-indigo-600 transition-colors duration-300"
                    >
                        <span>Giriş Yap</span>
                    </Link>
                    <Link
                        to="/register"
                        className="bg-white text-xl text-indigo-600 font-bold flex items-center justify-center cursor-pointer w-1/2 rounded-tr-2xl border-b-4 border-indigo-600"
                    >
                        <span>Kayıt Ol</span>
                    </Link>
                </div>

                <form className="flex flex-col justify-around flex-grow" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-gray-700 font-semibold">
                            İsim Soyisim
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="block bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-0 text-gray-900 w-full rounded-md p-2 my-2 transition"
                            />
                        </label>
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

                        <div className="text-gray-700 font-semibold my-3">
                            <p>Cinsiyet</p>
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="kadın"
                                    checked={form.gender === "kadın"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Kadın
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="erkek"
                                    checked={form.gender === "erkek"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Erkek
                            </label>
                        </div>

                        <label className="flex items-start gap-2 text-gray-600 text-sm">
                            <input
                                type="checkbox"
                                name="kvkk"
                                checked={form.kvkk}
                                onChange={handleChange}
                                className="mt-1"
                            />
                            Tarafıma avantajlı tekliflerin sunulabilmesi amacıyla kişisel verilerimin işlenmesine ve paylaşılmasına izin veriyorum.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 bg-indigo-600 text-white rounded-lg mt-4 hover:bg-indigo-700 transition"
                    >
                        Kayıt Ol
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;

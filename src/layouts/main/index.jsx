import { Outlet } from "react-router-dom";
import Filter from "./sidebar/left";
import Profile from "./sidebar/right";
import Header from "../../components/header";


export default function MainLayout() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="sticky top-0 z-10">
                <Header />
            </div>
            <div className="w-full h-screen flex justify-between">
                <Filter />
                <main>
                    <Outlet />
                </main>
                <Profile />
            </div>

        </div>
    )
}
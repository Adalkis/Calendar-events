import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
    return <>
        <Navbar/>
        <div className="px-3 pt-5 w-full h-full">
            <Outlet />
        </div>
    </>
}
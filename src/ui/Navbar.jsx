import { CiCalendar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return <ul className="flex justify-between shadow-md p-5">
        <NavLink to="/"><CiCalendar className="text-2xl cursor-pointer"/></NavLink>
        <div className="flex">
            <NavLink to="/" className="mr-2"> Calendar</NavLink>
            <NavLink to="/events"> Events </NavLink>
        </div>
       
    </ul>
}
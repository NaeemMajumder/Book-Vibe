import { useNavigate } from "react-router-dom";
import { Outlet, NavLink } from 'react-router-dom'; // Import NavLink
const Nav = () => {

    let navigate  = useNavigate();

    return (
        <nav className="max-w-[1350px] m-auto">

            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/random2">Listed Books</NavLink></li>
                    <li><NavLink to="/random1">Pages to Read</NavLink></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/random2">Listed Books</NavLink></li>
                    <li><NavLink to="/random1">Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
            </div>

        </nav>
    );
};

export default Nav;
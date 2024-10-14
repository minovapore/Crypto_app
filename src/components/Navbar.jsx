import { RiAccountCircleFill } from "react-icons/ri";

export default function Navbar(){
    return (
        <div className="navbar bg-base-300">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl xl:hidden">LOGO</a>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li><a>Home</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl xl:inline-flex hidden">LOGO</a>
            </div>
            <div className="navbar-end me-6 gap-8">
                <select className="rounded-md">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                </select>                
                <button>Sign Up</button>
            </div>
        </div>
    );
}
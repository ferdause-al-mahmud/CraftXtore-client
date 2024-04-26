import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>

        <li><NavLink to="/allarts">All Arts & Crafts</NavLink></li>
        <li><NavLink to="/additem">Add </NavLink></li>
        <li><NavLink to="/myartscarts">My Arts & Crafts</NavLink></li>
    </>

    return (
        <div className="bg-base-300 ">
            <div className="navbar mb-12 lg:w-[1170px]  mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu z-[10] menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to='/' className="font-bold p-2 rounded-lg btn-ghost text-[16px] md:text-xl">Craft<span className="text-orange-500">X</span>tore</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div><NavLink to="/login"><button className="btn !bg-base-300 border-none hover:!bg-orange-500 hover:!text-white">Login</button></NavLink></div>


                </div>
            </div>
        </div>

    );
};

export default Navbar;
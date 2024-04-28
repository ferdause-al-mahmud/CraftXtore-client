import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>

        <li><NavLink to="/allarts">All Arts & Crafts</NavLink></li>
        <li><NavLink to="/additem">Add </NavLink></li>
        <li><NavLink to="/myartscarts">My Arts & Crafts</NavLink></li>
    </>
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("aqua");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Log out successfully")
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="bg-base-300 mb-10 ">
            <div className="navbar lg:w-[1170px]  mx-auto ">
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
                    <ul className="menu menu-horizontal px-1 md:text-[16px] font-semibold">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <input type="checkbox" value="synthwave" onClick={handleToggle} className="toggle theme-controller mr-3" />
                    {user ? <>

                        {
                            user.photoURL ?
                                (<div data-tooltip-id='my-tooltip' data-tooltip-content={user.displayName} className="rounded-full mr-2  flex items-center justify-center bg-blue-500"> <img className="w-10 rounded-full" src={user.photoURL} /></div>)
                                :
                                (<div data-tooltip-id='my-tooltip' data-tooltip-content={user.displayName} className="rounded-full p-2 md:p-4 mr-2 tooltip tooltip-bottom flex items-center justify-center bg-blue-500" data-tip={user.displayName}><FaRegUser /></div>)
                        }

                        <div><button className="btn" onClick={handleSignOut}>Logout</button></div>
                    </> : <div>
                        <NavLink to="/login" className="btn bg-base-300 border-none">Login</NavLink>
                        <NavLink className="btn bg-base-300 border-none" to="/register">Register</NavLink>
                    </div>}


                </div>
            </div>
        </div>

    );
};

export default Navbar;
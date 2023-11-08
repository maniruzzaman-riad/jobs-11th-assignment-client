import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { RiLogoutCircleRLine } from 'react-icons/ri';


const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext)

    const allNavLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-jobs">All Jobs</NavLink></li>
        <li><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
        <li><NavLink to="/add-job"> Add A Job</NavLink></li>
        <li><NavLink to="/my-jobs"> My Jobs</NavLink></li>
    </>

    const handleLogout = () => {
        userLogout()
        .then()
        .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {allNavLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allNavLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <><h2 className="mr-4 text-2xl font-semibold">{user.displayName}</h2>
                    <img className="w-16 rounded-full mr-4" src={user.photoURL} alt="" />
                     <RiLogoutCircleRLine className="mr-3 text-3xl" onClick={handleLogout}></RiLogoutCircleRLine> </>}
                    {!user && <Link to='/login'><button className="btn">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken')
    };
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        {/* <li><Link to='/purchase'>Purchase</Link></li> */}
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myportfolio'>My Portfolio</Link></li>
        <li>{user ? <button onClick={logout}>SignOut</button> : <Link to='/login'>Login</Link>}
        </li>

    </>
    return (
        <div className="navbar text-blcak lg:text-black">
            <div className="navbar-start" >
                <div className="dropdown" >
                    <label tabIndex="0" className="btn btn-ghost lg:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg >
                    </label >
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" >
                        {menuItems}
                    </ul >
                </div >
                <Link to='/' className="btn bg-white text-primary hover:btn-outline normal-case text-xl">Folio<span className=' hover:text-red-700'>A</span>uto Parts</Link>
            </div >
            <div className="navbar-end  hidden lg:flex" >
                <ul className="menu menu-horizontal p-0" >
                    {menuItems}
                </ul >
            </div >
            <div className='navbar-end lg:hidden' >
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg >
                </label >
            </div >
        </div >
    );
};

export default Navbar;
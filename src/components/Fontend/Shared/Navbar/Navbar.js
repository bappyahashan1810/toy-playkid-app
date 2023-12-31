import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assests/logo/logo.svg';


const Navbar = () => {
    const items = <>
        <li ><Link className='hover:text-[#48C9B0]'>Home</Link></li>
        <li ><Link className='hover:text-[#48C9B0]'>All Toys</Link></li>
        <li ><Link className='hover:text-[#48C9B0]'>My Toys</Link></li>
        <li ><Link to='/addtoys' className='hover:text-[#48C9B0]'>Add A Toys</Link></li>
        <li ><Link className='hover:text-[#48C9B0]'>Blogs</Link></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl flex items-center">

                        <img className='h-[60px] w-[60px]' src={logo} alt="" />
                        <p className='text-orange-500 font-bold'>Toy PlayKid</p>
                    </Link>
                </div>

                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
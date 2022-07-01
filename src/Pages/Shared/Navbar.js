import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const menuItem = <>
        <li><HashLink to='/'>Home</HashLink></li>
        <li><HashLink to='/#calendar'>Calendar</HashLink></li>
        <li><HashLink to='/#todo'>To Do</HashLink></li>
        <li><HashLink to='/#completedTask'>Completed Tasks</HashLink></li>
    </>
    return (
        <div class="navbar sticky top-0">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">eTask</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
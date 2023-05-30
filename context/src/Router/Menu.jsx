import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Menu.css'
const Menu = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <NavLink to='/' className='menu-item'>Home</NavLink>
                </li>
                <li><NavLink to='/contact' className='menu-item'>Contact</NavLink></li>
                <li><NavLink to='/about' className='menu-item'>About</NavLink></li>
                <li><NavLink to='/search' className='menu-item'>Search</NavLink></li>
            </ul>
        </nav>
        <Outlet />
    </>)
}

export default Menu;
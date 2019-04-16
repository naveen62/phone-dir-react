import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = props => (
    <div className='container   '>
        <header className='heading'>
            MyPhone-Book
        </header>
        <nav className='main-nav'>
            <ul className='main-nav_items'>
                <li className='main-nav_item'><NavLink to='/new'>
                    Create New Contact
                </NavLink></li>
            </ul>
        </nav>
    </div>
)
export default Navbar;
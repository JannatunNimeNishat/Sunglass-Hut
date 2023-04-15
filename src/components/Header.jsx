import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h3>Sunglass-Hut</h3>
            <div>
                <NavLink to='/' className={({isActive})=> isActive ? 'active': ''}>
                    Home
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-container bg-slate-200 px-8 py-5 md:flex justify-between rounded'>
            <h3 className='text-xl font-semibold'>Sunglass-Hut</h3>
            <div className='md:flex gap-5'>
                <NavLink to='/' className={({isActive})=> isActive ? 'active': 'default'}>
                    Home
                </NavLink>
                <NavLink to='/register' className={({isActive})=> isActive ? 'active': 'default'}>
                    Register
                </NavLink>
                <NavLink to='/login' className={({isActive})=> isActive ? 'active': 'default'}>
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
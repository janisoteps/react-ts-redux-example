import * as React from 'react';
import Logo from './Logo/Logo';
import './Header.css';

function Header() {

    return (
        <div className='Header'>
            <div className='Header__orange-border' />

            <Logo/>
        </div>
    );
}


export default Header;
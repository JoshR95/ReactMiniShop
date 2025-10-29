import React from 'react';
import './components_css/Header.css';

const Header = () => {
    return(
        <header>
            <div className='main-header'>
                <h1><span style={{ color: '#86868b', fontSize: '3rem'}}>Welcome to the</span><br />React mini shop</h1>
                <img className='header-logo'src="/images/logo-removebg.png" alt="Logo" />
            </div>
            <img className="products-banner" src="/images/banner.jpg" alt="Banner" />
        </header>
    )
}

export default Header
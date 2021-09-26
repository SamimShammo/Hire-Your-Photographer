import React from 'react';
import logo from '../../img/cameraLogo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div  className="logo-img">
               <a href="/Home">
               <img src={logo} alt="" />
               </a>
            </div>
           <div className="headline">
               <h1>Total 15 Eye-catching Photographer Name</h1>
               <h2>My Budget $10,000</h2>
           </div>
        </div>
    );
};

export default Header;
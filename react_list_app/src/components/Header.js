import React from 'react';
import Logo from '../Images/linked-list-logo.svg'; 

const Header = () => {
    return(
        <div className="header">
        <span className="linked">Linked</span>
            <img className="logo" src={Logo} alt="logo" />
        <span className="list">List</span>
        </div>
    )
}

export default Header; 
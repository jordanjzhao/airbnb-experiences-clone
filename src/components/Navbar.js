import React from 'react';
import abnbLogo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img className="abnblogo" src={abnbLogo}/>
        </nav>
    )
}


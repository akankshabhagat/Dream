// import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
function Navbar() {
    const [click, setclick] = useState(false);
    const[button,setbutton]=useState(true);

    const handleclick = () => setclick(!click);
    const closeMobilemenu = () => setclick(false);
const showbutton= ()=>{
    if(window.innerWidth <=960){
        setbutton(false);
    }
    else{
        setbutton(true);
    }

};
useEffect(()=>{
    showbutton();
},[]);
window.addEventListener('resize',showbutton); // if button to be show if size of screen changes

    return (

        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Dream<i class="fa fa-cloud" aria-hidden="true"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleclick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active ' : 'nav-menu'}>

                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-links' onClick={closeMobilemenu}>
                              Services
                            </Link></li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobilemenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobilemenu}>
                                Sign-up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonstyle='btn--outline'>Sign-up</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar
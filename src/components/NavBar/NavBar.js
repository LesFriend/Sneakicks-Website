import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className="navbarRoot">
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/men' className='nav-links' onClick={closeMobileMenu}>
                            MEN
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/women' className='nav-links' onClick={closeMobileMenu}>
                            WOMEN
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/kids' className='nav-links' onClick={closeMobileMenu}>
                            KIDS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/brands' className='nav-links' onClick={closeMobileMenu}>
                            BRANDS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/newArrivals' className='nav-links' onClick={closeMobileMenu}>
                            NEW ARRIVALS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sale' className='nav-links' onClick={closeMobileMenu}>
                            SALE
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar

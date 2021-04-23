import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../vanilla-tilt';

import './TiltCard.css'
import shoe1 from '../../assets/shoes/adidas1.png';
import shoe2 from '../../assets/shoes/nikeWomen1.png';
import shoe3 from '../../assets/shoes/air-jordan1.png';

function TiltCard () {

    {/*VanillaTilt.init(document.querySelector(".box"), {
		max: 25,
		speed: 400
	});
	
    VanillaTilt.init(document.querySelectorAll(".box"));*/}

    return (
        <div class="container">         
            <div class="box" id="box" data-tilt>
                <h2 class="name">Adidas ZX</h2>
                <h2 class="price">P3,500.00</h2>
                <Link to='/item' class="viewProduct">View Product</Link>
                <Link to='/' class="addtoCart">Add To Cart</Link>
                <div class="circle"></div>
                <Link to='/' class="fav">
                    <i class="fas fa-star fa-2x"></i>
                </Link>
                <img src={shoe1} alt="Adidas" class="product"/>
            </div>
            <div class="box" id="box">
                <h2 class="name">Nike Women Air Max Infinity</h2>
                <h2 class="price">P4,995.00</h2>
                <Link to='/item' class="viewProduct">View Product</Link>
                <Link to='/' class="addtoCart">Add To Cart</Link>
                <div class="circle"></div>
                <Link to='/' class="fav">
                    <i class="fas fa-star fa-2x"></i>
                </Link>
                <img src={shoe2} alt="Nike Women" class="product"/>
            </div>
            <div class="box" id="box">
                <h2 class="name">Air Jordan 1 OG (Dior)</h2>
                <h2 class="price">P11,000.00</h2>
                <Link to='/item' class="viewProduct">View Product</Link>
                <Link to='/' class="addtoCart">Add To Cart</Link>
                <div class="circle"></div>
                <Link to='/' class="fav">
                    <i class="fas fa-star fa-2x"></i>
                </Link>
                <img src={shoe3} alt="Air Jordan" class="product"/>
            </div>
        </div>
    )
    
}

export default TiltCard

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './TiltCard.css'
import shoe1 from '../../assets/shoes/adidas1.png';
import Tilt from 'react-vanilla-tilt';
import '../../vanilla-tilt';

function TiltCard () {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    VanillaTilt.init(document.querySelector(".box"), {
		max: 25,
		speed: 400
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".box"));

    return (
        <div class="container">         
            <div class="box" id="box">
                <h2 class="name">Adidas ZX</h2>
                <h2 class="price">P3,500.00</h2>
                <Link to='/item' class="viewProduct">View Product</Link>
                <a href="#" class="addtoCart">Add To Cart</a>
                <div class="circle"></div>
                <img src={shoe1} alt="adidas" class="product"/>
            </div>
            <div class="box" id="box">
                <h2 class="name">Adidas ZX</h2>
                <h2 class="price">P3,500.00</h2>
                <Link to='/item' class="viewProduct">View Product</Link>
                <a href="#" class="addtoCart">Add To Cart</a>
                <div class="circle"></div>
                <img src={shoe1} alt="adidas" class="product"/>
            </div> 
            <div class="box" id="box">
                <h2 class="name">Adidas ZX</h2>
                <h2 class="price">P3,500.00</h2>
                <Link to='/item' class="viewProduct">View Product</Link>
                <a href="#" class="addtoCart">Add To Cart</a>
                <div class="circle"></div>
                <img src={shoe1} alt="adidas" class="product"/>
            </div>  
        </div>
    )
}

export default TiltCard

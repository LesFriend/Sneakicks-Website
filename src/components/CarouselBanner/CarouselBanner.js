import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";


import './CarouselBanner.css';
import banner1 from '../../assets/banners/banner-nike.jpg';
import banner2 from '../../assets/banners/banner-adidas.jpg';
import banner3 from '../../assets/banners/banner-jordan.jpg';

const CarouselBanner = () => {
    return (
        <div className="root">
            <div className='container-fluid'>
            <Carousel >
            <Carousel.Item >
                <img
                className="d-block w-100"
                src={banner1}
                alt="Nike"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100" 
                src={banner2}
                alt="Adidas"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100" 
                src={banner3}
                alt="Jordan"
                />
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}   

export default CarouselBanner
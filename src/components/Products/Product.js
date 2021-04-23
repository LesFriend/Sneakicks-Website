import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Product.css'
import ReactTooltip from 'react-tooltip';

const Product = ({data}) => {
    return (
        <div class="containerProduct">
            <div class="productWrapper"> 
                {data.map((product, key) => {
                return (     
                    <div class="card" id="card" key={key}>
                        <h2 class="nameProduct">{product.name}</h2>
                        <h2 class="priceProduct">{product.price}</h2>
                        <div class="descHolder">
                            <p class="descProduct">{product.desc}</p>
                            <Link to='/item' class="productView">View Product</Link>
                            <Link to='/' class="productCart">Add To Cart</Link>
                        </div>
                        <Link to='/' class="productFav" data-tip="Favorite">
                            <i class="fas fa-star fa-2x"></i>
                            <ReactTooltip place="bottom" effect="solid" />
                        </Link>
                        <img src={product.img} alt="Shoes" class="imageProduct"/>
                    </div>
                );
                })}
            </div>   
        </div>
    )
}

export default Product

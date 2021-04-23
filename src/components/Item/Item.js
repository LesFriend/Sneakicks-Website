import React from 'react';
import './Item.css';
import shoeSelect from '../../assets/shoes/adidas1.png';

function Item() {
    return (
        <div>
            <div class="containerItem">
                <div class="rowItem">
                    <div class="shoeItem">
                        <div>
                            <img class="shoeItem-img" src={shoeSelect} alt="" />
                        </div>
                    </div>
                    <div class="thumbnails">
                        <div class="thumbnail-Pics">
                            <img class="shoeItem-Thumbs" src={shoeSelect} alt="" />
                        </div>
                        <div class="thumbnail-Pics">
                            <img class="shoeItem-Thumbs" src={shoeSelect} alt="" />
                        </div>
                        <div class="thumbnail-Pics">
                            <img class="shoeItem-Thumbs" src={shoeSelect} alt="" />
                        </div>
                    </div>
                </div>
                <div class="infoItem">
                    <div class="shoeItem-info">
                        <span class="infoItem-subtitle">Adidas</span>
                        <h1 class="infoItem-title">Adidas ZX</h1>
                        <p class="infoItem-description">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                     </div>
                    <div class="infoItem-down">
                        <div class="size">
                            <h3 class="size-title">Size</h3>
                            <div class="size-content">
                                <span class="size-total active">8.6</span>
                                <span class="size-total">9</span>
                                <span class="size-total">9.5</span>
                            </div>
                        </div>
                        <div class="count">
                            <h3 class="count-title">Count</h3>
                            <div class="count-content">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    <div class="priceItem">
                        <a href="" class="favItemButton">
                            <i class="fas fa-star fa-3x"></i>
                        </a>
                        <span class="price-title">P3,000.00</span>
                        <a href="" class="price-button">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item

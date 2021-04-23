import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Products from '../Products/Product';

import '../Men/Men.css';
import { productMen } from '../Products/data';

function Men() {
    return (
        <>
            <div className='titleSectionMen'>
                <div className='barMen'>
                    <h1 className='titleMen'>MEN</h1>
                </div>
            </div>
            <Products data={productMen}/>
            <Footer/>
        </>
    );
}

export default Men;

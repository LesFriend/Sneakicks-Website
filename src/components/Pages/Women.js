import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Products from '../Products/Product';

import '../Women/Women.css';
import { productWomen } from '../Products/data';

function Women() {
    return (
        <>
            <div className='titleSectionWomen'>
                <div className='barWomen'>
                    <h1 className='titleWomen'>WOMEN</h1>
                </div>
            </div>
            <Products data={productWomen}/>
            <Footer/>
        </>
    );
}

export default Women;

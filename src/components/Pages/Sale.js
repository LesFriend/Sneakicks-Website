import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Products from '../Products/Product';

import '../Sale/Sale.css';
import { productSale } from '../Products/data';

function Sale() {
    return (
        <>
            <div className='titleSectionSale'>
                <div className='barSale'>
                    <h1 className='titleSale'>SALE</h1>
                </div>
            </div>
            <Products data={productSale}/>
            <Footer/>
        </>
    );
}

export default Sale;

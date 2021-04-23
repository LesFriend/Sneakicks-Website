import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Products from '../Products/Product';

import '../NewArrivals/NewArrivals.css';
import { productMen } from '../Products/data';

function NewArrivals() {
    return (
        <>
            <div className='titleSectionNewArrivals'>
                <div className='barNewArrivals'>
                    <h1 className='titleNewArrivals'>NEW ARRIVALS</h1>
                </div>
            </div>
            <Products data={productMen}/>
            <Footer/>
        </>
    );
}

export default NewArrivals;

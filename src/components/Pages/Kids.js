import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Products from '../Products/Product';

import '../Kids/Kids.css';
import { productKids } from '../Products/data';

function Kids() {
    return (
        <>
            <div className='titleSectionKids'>
                <div className='barKids'>
                    <h1 className='titleKids'>KIDS</h1>
                </div>
            </div>
            <Products data={productKids}/>
            <Footer/>
        </>
    );
}

export default Kids;

import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import Featured from '../Featured/Featured';


function Home() {
    return (
        <>
            <CarouselBanner/>
            <Featured/>
            <Footer/>
        </>
    );
}

export default Home;
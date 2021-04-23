import React from 'react'
import './Featured.css'
import TiltCard from './TiltCard'

function Featured() {
    return (
        <div className='featuredSection'>
            <div className='titleSection'>
                <div className="bar">
                    <h1 className='title'>TOP SELLERS</h1>
                </div>
            </div>
            <TiltCard/>
        </div>        
    )
}

export default Featured

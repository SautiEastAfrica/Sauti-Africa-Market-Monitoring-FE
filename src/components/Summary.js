import React, { useState } from 'react'; 

import '../styles/Product.scss'; 

function Summary(props){
    
    console.log(props); 

    return(
        <div className='product-summary'>
            <h1>Product Summary</h1>
            <span><h2>Country:</h2> {props.data.country}</span>
            <span><h2>Market:</h2> {props.data.marketplace}</span>
            <span><h2>Product:</h2> {props.data.product}</span>
            <span><h2>Date:</h2> {props.data.date}</span>
        </div>
    )
}

export default Summary; 
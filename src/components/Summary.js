import React from 'react'; 

import '../styles/Product.scss'; 

function Summary(props){
    
    console.log(`SUMMARY Component props: `, props); 

    return(
        <div className='product-summary'>
            <h1>Product Summary</h1>
            <span><h2>Country:</h2> {props.data.country_code}</span>
            <span><h2>Market:</h2> {props.data.market_name}</span>
            <span><h2>Product:</h2> {props.data.product_name}</span>
            <span><h2>Currency:</h2> {props.data.currency_code}</span>
            <span><h2>Last Documented Price:</h2> {props.data.observed_price}</span>
            <span><h2>Date:</h2> {props.data.date_price}</span>
        </div>
    )
}

export default Summary; 
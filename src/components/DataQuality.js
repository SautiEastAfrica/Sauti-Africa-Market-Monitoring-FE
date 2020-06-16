import React from 'react'; 

import '../styles/Product.scss'; 

function DataQuality(props){

    console.log(props); 

    return(
        <div className='data-quality'>
            <h1>Data Quality</h1> 
            <span><h2>Start Date: </h2> {props.data.start_date}</span>
            <span><h2>End Date: </h2> {props.data.end_date}</span>
            <span><h2>DQI: </h2> {props.data.DQI}</span>
            <span><h2>DQI Category: </h2> {props.data.DQI_cat}</span>
            <span><h2>Completeness: </h2> {props.data.completeness}</span>
            <span><h2>Days between start/end: </h2> {props.data.days_between_start_end}</span>
            <span><h2>Min Price: </h2> {props.data.min_price}</span>
            <span><h2>Max Price: </h2> {props.data.max_price}</span>
            <span><h2>Mean: </h2> {props.data.mean}</span>
            <span><h2>Mode D: </h2> {props.data.mode_d}</span>
            <span><h2>Number Of Observations: </h2> {props.data.number_of_observations}</span>
        </div>
    )
}

export default DataQuality; 
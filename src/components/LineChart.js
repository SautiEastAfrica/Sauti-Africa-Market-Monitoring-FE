import React, { useState, useEffect } from 'react'; 
import { Line } from 'react-chartjs-2'; 

import '../styles/Product.scss'; 

const LineChart = (props) => {

    // API URL: https://sauti-market-monitoring.herokuapp.com/wholesale/?country_code=TZA&market_name=Arusha&product_name=Kahama+Rice 
    
    console.log(`Line Chart props: `, props); 

    const [chartData, setChartData] = useState({}); 

    const [xAxis, setX] = useState([])
    const [yAxis, setY] = useState([]); 
    const dates = []; 
    const prices = []; 
    var max = 0; 
    var min = 0; 

    useEffect(() => { 

        // Create date array for the X-axis and set it to the xAxis state variable
            props.history.map(function(object){ 
                dates.push(object.date_price); 
            }) 
            console.log(`X-axis: `, dates); 
            setX(dates); 

        // Create price array for the Y-axis and set it to the yAxis state variable
            props.history.map(function(object){ 
                prices.push(object.observed_price); 
            }) 
            console.log(`Y-axis: `, prices); 
            setY(prices); 

        // Find the minimum and maximum of the prices
        max = prices.reduce(function(a, b){ return Math.max(a, b); })
        console.log(`Maximum of prices: `, max)

        min = prices.reduce(function(a, b){ return Math.min(a, b); })
        console.log(`Minimum of prices: `, min)

    }, [props])

    const chart = () => {

        setChartData({
            labels: xAxis, // Example: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] X-axis
            datasets: [
                {
                    label: props.history[0].product_name, 
                    data: yAxis, // Example: [32, 45, 12,76, 69] Y-axis
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ], 
                    borderWidth: 4
                }
            ]
        })

    }

        useEffect(() => {
            chart()
        }, [props])

    return(
            <div className='linechart'>
                <Line data={chartData}/>
            </div>
    )
}

export default LineChart; 
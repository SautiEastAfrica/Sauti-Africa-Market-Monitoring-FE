import React, { useState, useEffect } from 'react'; 
import { Line } from 'react-chartjs-2'; 

import '../styles/Product.scss'; 

const LineChart = (props) => {

    // API URL: https://sauti-market-monitoring.herokuapp.com/wholesale/?country_code=TZA&market_name=Arusha&product_name=Kahama+Rice 
    
    console.log(`Line Chart props: `, props); 
    const [chartData, setChartData] = useState({}); 

    const [x, setX] = useState([])
    const [y, setY] = useState([]); 
    const dates = []; 
    const prices = []; 
    var max = 0; 
    var min = 0; 

    useEffect(() => {
        props.data.map(function(object){
            dates.push(object.date); 
        })
        console.log(dates); 

        props.data.map(function(object){
            prices.push(object.price); 
        })
        console.log(prices); 

        max = prices.reduce(function(a, b){
            return Math.max(a, b); 
        })
        console.log(`Maximum: `, max)

        min = prices.reduce(function(a, b){
            console.log(Math.min(a, b)); 
            return Math.min(a, b); 
        })
        console.log(`Minimum: `, min)


    }, [props])

    const chart = () => {

        setChartData({
            labels: props.labels, // Example: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] X-axis
            datasets: [
                {
                    label: props.title, 
                    data: props.data, // Example: [32, 45, 12,76, 69] Y-axis
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
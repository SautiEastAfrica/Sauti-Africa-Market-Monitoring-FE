import React, { useState, useEffect } from 'react'; 
import { Line } from 'react-chartjs-2'; 

import '../styles/Product.scss'; 

const LineChart = (props) => {

    const [chartData, setChartData] = useState({}); 

    const [xAxis, setX] = useState([])
    const [yAxis, setY] = useState([]); 
    const dates = []; 
    const prices = []; 

    useEffect(() => { 

        // Create date array for the X-axis and set it to the xAxis state variable
            props.history.map((object) => {
                return dates.push(object.date_price); 
            }) 
            setX(dates); 

        // Create price array for the Y-axis and set it to the yAxis state variable
            props.history.map(function(object){ 
                prices.push(object.observed_price); 
            }) 
            setY(prices); 

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
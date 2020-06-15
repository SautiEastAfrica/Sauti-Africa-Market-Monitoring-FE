import React, { useState, useEffect } from 'react'; 
import { Line } from 'react-chartjs-2'; 

const LineChart = (props) => {

    // API URL: https://sauti-market-monitoring.herokuapp.com/wholesale/?country_code=TZA&market_name=Arusha&product_name=Kahama+Rice 
    
    const [chartData, setChartData] = useState({}); 
    
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
        }, [])

    return(
            <div>
                <Line data={chartData}/>
            </div>
    )
}

export default LineChart; 
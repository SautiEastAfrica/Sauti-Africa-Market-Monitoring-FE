import React, { useState, useEffect } from 'react'; 
import { Line } from 'react-chartjs-2'; 

const LineChart = (props) => {

    // API URL: https://sauti-market-monitoring.herokuapp.com/wholesale/?country_code=TZA&market_name=Arusha&product_name=Kahama+Rice 
    
    const [chartData, setChartData] = useState({}); 

    const [countries, setCountry] = useState([]); 
    const [markets, setMarket] = useState([]); 
    const [products, setProduct] = useState([]);
    const [category, setCategory] = useState(['wholesale']); 

    function handleChange(){

    }
    
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
            <form className='filter'>
                <label>Select the country, marketplace, & product to view: </label>
                <select onChange={handleChange()}>
                    <option key={category} value={category}>Wholesale</option>
                    <option key={category} value={category}>Retail</option>
                </select>
                <select onChange={handleChange()}>
                    {countries &&
                    countries.length > 0 &&
                    countries.map(country => {
                        return <option key={country} value={country}>{country}</option>;
                    })}
                </select>
                <select onChange={handleChange()}>
                    {markets &&
                    markets.length > 0 &&
                    markets.map(market => {
                        return <option key={market} value={market}>{market}</option>;
                    })}
                </select>
                <select onChange={handleChange()}>
                    {products &&
                    products.length > 0 &&
                    products.map(product => {
                        return <option key={product} value={product}>{product}</option>;
                    })}
                </select>
            </form>
            </div>
    )
}

export default LineChart; 
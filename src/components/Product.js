import React, { useState, useEffect, useContext } from 'react'; 

import LineChart from './LineChart'; 
import Summary from './Summary'; 
import TableProduct from './TableProduct'; 
import DataQuality from './DataQuality'; 

import { AuthContext } from '../App.js'; 

import '../styles/Product.scss'; 

function Product(){
    
    const { axios } = useContext(AuthContext)();

    const [category, setCategory] = useState(['retail']); 
    
    const [countries, setCountries] = useState([]); 
    const [country, setCountry] = useState(['TZA'])

    const [markets, setMarkets] = useState([]); 
    const [market, setMarket] = useState(['Arusha']); 

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(['Morogoro+Rice'])

    const [summary, setSummary] = useState({ country: '', market: '', product: 'N/A', date_price: '11/03/22'}); 

    const [quality, setQuality] = useState({ completeness: '', start_date: '', end_date: '', DQI: '', DQI_cat: '', number_of_observations: '', days_between_start_end: '', min_price: '', max_price: '', mode_d: '', mean: '' }); 

    const [history, setHistory] = useState([{ alert_band_limit: null, class: null, country: "TZA", currency: "KES", 
        data_run_model: null, date: "17-03-22", forecasted_class: null, forecasted_price: null, 
        forecasting_model: null, market_id: "Arusha : TZA", marketplace: "Arusha", method: null, 
        normal_band_limit: null, price: 79, product_name: "Kilombero Rice", source_id: 1, source_name: "EAGC-RATIN", stress_band_limit: null, stressness: -1, unit: "kg" }]); 

    useEffect(() => {

        async function getData () { 
            // Example of API call: https://sautimarket.herokuapp.com/wholesale/?product=Kilombero+Rice&market=Arusha&country=TZA
            // https://sauti2-app.herokuapp.com/wholesale/?product_name=Kilombero+Rice&market_name=Arusha&country_code=TZA
            await axios.get(`https://sautimarket.herokuapp.com/${category}/?country=${country}&market=${market}&product=${product}`) 
            .then(response => {
                console.log(response); 
                setHistory(response.data.history); 
                setQuality(response.data.quality); 
            })
            .catch(error => {
                console.log(`this is the error: `, error); 
            })
        }
            getData(); 
      }, [])

      useEffect(()=>{

        // Map through data and select the latest date object for a summary
        history.map(function(object){
            console.log(object)
            if (object.date_price > summary.date_price){
                setSummary(object); 
            }
        })
      }, [history]); 

    function handleChange(){

    }

    function handleSubmit(){

    }

    return(
        <div className='product'>
            {/* <form className='filter'>
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

                <button onClick={handleSubmit}>Get Product Info</button>

            </form> */}
                <Summary data={summary}/>
                <DataQuality data={quality}/>
                <LineChart history={history} summary={summary} quality={quality} />
                <TableProduct data={history}/>
                {/* <Methodology/> */}
        </div>
    )
}

export default Product; 
import React, { useState, useEffect, useContext } from 'react'; 

import LineChart from './LineChart'; 
import Summary from './Summary'; 
import TableProduct from './TableProduct'; 
import DataQuality from './DataQuality'; 

import { AuthContext } from '../App.js'; 

import '../styles/Product.scss'; 

function Product(){
    
    const { axios } = useContext(AuthContext)();

    const [category, setCategory] = useState(['wholesale']); 
    
    const [countries, setCountries] = useState([]); 
    const [country, setCountry] = useState(['TZA'])

    const [markets, setMarkets] = useState([]); 
    const [market, setMarket] = useState(['Arusha']); 

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(['Kilombero+Rice'])

    const [data, setData] = useState([{ alert_band_limit: null, class: null, country: "TZA", currency: "KES", 
        data_run_model: null, date: "17-03-22", forecasted_class: null, forecasted_price: null, forecasting_model: null, 
        market_id: "Arusha : TZA", marketplace: "Arusha", method: null, normal_band_limit: null, price: 79, product: "Kilombero Rice",
        source_id: 1, source_name: "EAGC-RATIN", stress_band_limit: null, stressness: -1, unit: "kg" }]); 
    const [summary, setSummary] = useState({ country: '', market: '', product: 'N/A', date: '11/03/22'}); 
    const [quality, setQuality] = useState({ completeness: '', start_date: '', end_date: '', DQI: '', DQI_cat: '', number_of_observations: '', days_between_start_end: '', min_price: '', max_price: '', mode_d: '', mean: '' }); 
    
    const [labels, setLabels] = useState([2015, 2016, 2017, 2018, 2019, 2020]); 

    // const [data, setData] = useState([45,16,25,45,2,6]); 

    const title = 'Chart Title';  
    const [api, setApi] = useState([])

    useEffect(() => {

        async function getData () { 
            // Example of API call: https://sautimarket.herokuapp.com/wholesale/?product=Kilombero+Rice&market=Arusha&country=TZA
            await axios.get(`https://sautimarket.herokuapp.com/${category}/?country=${country}&market=${market}&product=${product}`) 
            .then(response => {
                console.log(response.data); 
                setData(response.data); 

            })
            .catch(error => {
                console.log(`this is the error: `, error); 
            })
        }
    
            getData(); 
      }, [])


      useEffect(()=>{

        // Map through data and select the latest date object for a summary
        data.map(function(object){
            if (object.date > summary.date){
                setSummary(object); 
            }
        })

        // Map through data array and select the Data Quality object
        data.map(function(object){
            if(object.DQI > quality.DQI){
                setQuality(object); 
            }
        })
      }, [data]); 

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
                {/* <Summary data={summary}/>
                <DataQuality data={quality}/>
                <LineChart labels={labels} data={data} title={summary.product} />
                <TableProduct data={data}/> */}
                {/* <Methodology/> */}
        </div>
    )
}

export default Product; 
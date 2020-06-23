import React, { useState, useEffect, useContext } from 'react'; 
import { useParams } from 'react-router-dom'; 

import ProductSearch from './ProductSearch'; 
import LineChart from './LineChart'; 
import Summary from './Summary'; 
import TableProduct from './TableProduct'; 
import DataQuality from './DataQuality'; 
import Methodology from './Methodology'; 

import { Card } from 'antd'; 

import { AuthContext } from '../App.js'; 

import '../styles/Product.scss'; 

function Product(){
    
    let { category = 'retail', country = 'TZA', market = 'Arusha', product = 'Morogoro+Rice' } = useParams(); 
    // const [url, setUrl] = useState({ category: category, country: country, market: market, product: product })

    const { axios } = useContext(AuthContext)();

    const [summary, setSummary] = useState({ country: '', market: '', product: 'N/A', date_price: '11/03/22'}); 

    const [quality, setQuality] = useState({ completeness: '', start_date: '', end_date: '', DQI: '', DQI_cat: '', number_of_observations: '', days_between_start_end: '', min_price: '', max_price: '', mode_d: '', mean: '' }); 

    const [history, setHistory] = useState([{ alert_band_limit: null, class: null, country: "TZA", currency: "KES", 
    data_run_model: null, date: "17-03-22", forecasted_class: null, forecasted_price: null, 
    forecasting_model: null, market_id: "Arusha : TZA", marketplace: "Arusha", method: null, 
    normal_band_limit: null, price: 79, product_name: "Kilombero Rice", source_id: 1, source_name: "EAGC-RATIN", stress_band_limit: null, stressness: -1, unit: "kg" }]); 

    useEffect(() => {

        async function getData () { 
            await axios.get(`https://sautimarket.herokuapp.com/${category}/?country=${country}&market=${market}&product=${product}`) 
            .then(response => {
                console.log(response); 
                var data = response.data.history; 
                var sorted = sortByDate(data); 
                setHistory(sorted); 
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
            if (object.date_price > summary.date_price){
                setSummary(object); 
            }
        })
      }, [history]); 

      function sortByDate(data){
        data.sort(function(a, b) {
            var dateA = new Date(a.date_price), dateB = new Date(b.date_price);
            return dateA - dateB;
        });
        return data;
      }

    return(
        <div className='product'>
                <Summary data={summary} quality={quality} />
                {/* <ProductSearch /> */}
                <DataQuality data={quality}/>
                <LineChart history={history} summary={summary} quality={quality} />
                <TableProduct data={history}/>
                <Methodology/>
        </div>
    )
}

export default Product; 
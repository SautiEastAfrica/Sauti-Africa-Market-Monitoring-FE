import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import LineChart from './LineChart'; 

import '../styles/Product.scss'; 

function Product(){

    const [countries, setCountry] = useState([]); 
    const [markets, setMarket] = useState([]); 
    const [products, setProduct] = useState([]);

    const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June']); 
    const [data, setData] = useState([45,16,25,45,2,6]); 
    const title = 'Chart Title';  

    const [api, setApi] = useState([])
    const [category, setCategory] = useState(['wholesale']); 

    useEffect(() => {

        async function getData () { 
          await axios.get(`https://sauti2-app.herokuapp.com/wholesale/?product_name=Kilombero+Rice&market_name=Arusha&country_code=TZA`) 
          .then(response => {
              console.log(response); 
              setApi(response.data[`${category}_data`]);
          })
          .catch(error => {
              console.log(error); 
          })
      }
  
          getData(); 
      }, [])

      function handleChange(){

    }

    function handleSubmit(){

    }

    return(
        <div className='product'>
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

                <button onClick={handleSubmit}>Get Product Info</button>

            </form>

            <div className='chart'>

                {/* <Summary/> */}
                {/* <LineChart labels={labels} data={data} title={title} /> */}
                {/* <Methodology/> */}


            </div>
        </div>
    )
}

export default Product; 
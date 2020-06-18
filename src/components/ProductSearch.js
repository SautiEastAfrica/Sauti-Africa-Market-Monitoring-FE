import React, { useState, useEffect, useContext } from 'react'; 

import '../styles/Product.scss'; 
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../App.js'; 

function ProductSearch(){

    const { axios } = useContext(AuthContext)();

    const history = useHistory(); 
    const [categories, setCategories] = useState([]); 
    const [countries, setCountries] = useState([]); 
    const [markets, setMarkets] = useState([]); 
    const [products, setProducts] = useState([]); 

    const [country, setCountry] = useState([]); 
    const [market, setMarket] = useState([]); 
    const [product, setProduct] = useState([]); 

    useEffect(() => {
        axios.get(`https://sauti2-app.herokuapp.com/availablepairs/`)
        .then(response => {
            console.log(response); 
            setCategories(response.data); 
        })
        .catch(error => {
            console.log(error); 
        })
    }, [])

    function handleChange(){

    }

    function handleSubmit(){
        // history.push(`http://localhost:3000/product/${country}/${market}/${product}`)
    }

    return(
        <div className='product-search'>
            <h1>Product Search</h1>

            <form className='filter'>
                <label>Select the country, marketplace, & product to view: </label>
                {/* <select onChange={handleChange()}>
                    <option key={category} value={category}>Wholesale</option>
                    <option key={category} value={category}>Retail</option>
                </select> */}
                <select onChange={handleChange()}>
                    {categories &&
                    categories.length > 0 &&
                    categories.map(category => {
                        return <option key={category} value={category}>{category}</option>;
                    })}
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
        </div>
    )
}

export default ProductSearch; 
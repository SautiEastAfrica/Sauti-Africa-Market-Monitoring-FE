import React, { useState, useEffect, useContext } from 'react'; 

import '../styles/Product.scss'; 
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../App.js'; 

import { Form, Input, Checkbox, Button, Select } from 'antd';

function ProductSearch(){

    const { axios } = useContext(AuthContext)();

    const history = useHistory(); 
    const [categories, setCategories] = useState([]); 
    const [countries, setCountries] = useState([]); 
    const [markets, setMarkets] = useState([]); 
    const [products, setProducts] = useState([]); 

    const [category, setCategory] = useState([]);
    const [country, setCountry] = useState([]); 
    const [market, setMarket] = useState([]); 
    const [product, setProduct] = useState([]); 

    const { Option } = Select;

    useEffect(() => {
        axios.get(`https://sauti2-app.herokuapp.com/availablepairs/`)
        .then(response => {
            console.log(`Available Pairs: '`, response); 
            setCategories(response.data); 
        })
        .catch(error => {
            console.log(error); 
        })
    }, [])

    function handleChange(){

    }

    function handleSubmit(){
        history.push(`http://localhost:3000/product/${category}/${country}/${market}/${product}`)
    }


        // Starts here
            function onChange(value) {
            console.log(`selected ${value}`);
            }

            function onBlur() {
            console.log('blur');
            }

            function onFocus() {
            console.log('focus');
            }

            function onSearch(val) {
            console.log('search:', val);
            }
        // Ends here

    return(
        <div>
            <Form>
                <h1>Product Search</h1>
                {/* Starts Here */}
                <Form.Item>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a category"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="category1">Category 1</Option>
                        <Option value="category2">Category 2</Option>
                        <Option value="category3">Category 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Select
                        style={{ width: 200 }}
                        placeholder='Select a country'>
                        <Option>Country</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Select
                        style={{ width: 200 }}
                        placeholder='Select a market'
                    >
                        <Option>Market</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                <Select
                    style={{ width: 200 }}
                    placeholder='Select a product'
                >
                        <Option>Product</Option>
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>
        {/* Ends Here */}
{/* 

            <form className='filter'>
                <label>Select the country, marketplace, & product to view: </label>
                {/* <select onChange={handleChange()}>
                    <option key={category} value={category}>Wholesale</option>
                    <option key={category} value={category}>Retail</option>
                </select> */}
                {/* <select onChange={handleChange()}>
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

            </form> */}
        </div>
    )
}

export default ProductSearch; 
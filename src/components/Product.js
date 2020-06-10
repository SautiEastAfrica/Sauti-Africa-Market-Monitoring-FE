import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import LineChart from './LineChart'; 

import '../styles/Product.scss'; 

function Product(){

    const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June']); 
    const [data, setData] = useState([45,16,25,45,2,6]); 
    const title = 'Chart Title';  

    const [api, setApi] = useState([])
    const [category, setCategory] = useState(['wholesale']); 

    useEffect(() => {

        async function getData () { 
          await axios.get(`https://sautimarket.herokuapp.com/data/${category}`) 
          .then(response => {
              console.log(response.data); 
              setApi(response.data[`${category}_data`]);
          })
          .catch(error => {
              console.log(error); 
          })
      }
  
          getData(); 
      }, [])

    return(
        <div className='product'>
            <div className='chart'>
            <LineChart labels={labels} data={data} title={title} />
            </div>
        </div>
    )
}

export default Product; 
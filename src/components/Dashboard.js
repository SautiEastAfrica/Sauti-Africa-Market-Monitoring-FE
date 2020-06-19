import React, { useState, useEffect, useContext } from 'react'; 
import TableRetail from './TableRetail'; 
import TableRetailQC from './TableRetailQC'; 
import TableWholesale from './TableWholesale'; 
import TableWholesaleQC from './TableWholesaleQC';

import { AuthContext } from '../App.js'; 

function Dashboard(){

    const { axios } = useContext(AuthContext)();

    const [retailData, setRetail] = useState([{ country: '', marketplace: '', product: '', currency: '', price: '1', category: '', phase: '',  stressness: '', date: ''}]); 
    
    const [retailQC, setRetailQC] = useState([{ country: '', marketplace: '', product: '', category: '', DQI: '1', DQI_cat: '', completeness: '', duplicates: '', data_length: '', data_points: '', start_date: '', end_date: '', timeliness: '', source: '', mode_D: '' }]); 

    const [wholesaleData, setWholesale] = useState([{ country: '', marketplace: '', product: '', currency: '', price: '1', category: '', phase: '',  stressness: '', date: ''}]); 

    const [wholesaleQC, setWholesaleQC] = useState([{ country: '', marketplace: '', product: '', category: '', DQI: '1', DQI_cat: '', completeness: '', duplicates: '', data_length: '', data_points: '', start_date: '', end_date: '', timeliness: '', source: '', mode_D: '' }]); 

    useEffect(() => {

        async function getRetail () { 
          await axios.get(`https://sautimarket.herokuapp.com/retail/data/latest`) 
          .then(response => {
              console.log(response.data); 
              var tempArray = response.data; 
              addLink(tempArray); 
              setRetail(tempArray);
              console.log(retailData); 
              })
          .catch(error => {
              console.log(error); 
          })
      }

      async function getRetailQC () { 
        await axios.get(`https://sautimarket.herokuapp.com/retail/quality`) 
        .then(response => {
            console.log(response.data); 
            var tempArray = response.data; 
            addQCLink(tempArray); 
            setRetailQC(tempArray);
            console.log(retailQC); 
            })
        .catch(error => {
            console.log(error); 
        })
    }
          getRetail(); 
          getRetailQC(); 

      }, []) 

      useEffect(() => {

        async function getWholesale () { 
          await axios.get(`https://sautimarket.herokuapp.com/wholesale/data/latest`) 
          .then(response => {
              var tempArray = response.data; 
              addLink(tempArray); 
              setWholesale(tempArray);
              console.log(wholesaleData); 
              })
          .catch(error => {
              console.log(error); 
          })
      }

      async function getWholesaleQC () { 
        await axios.get(`https://sautimarket.herokuapp.com/wholesale/quality`) 
        .then(response => {
            console.log(response.data); 
            var tempArray = response.data; 
            addQCLink(tempArray); 
            setWholesaleQC(tempArray);
            console.log(wholesaleQC); 
            })
        .catch(error => {
            console.log(error); 
        })
    }

          getWholesale(); 
          getWholesaleQC(); 

      }, []) 
  
      function addLink(productArray){
          productArray.map(function(object){
            object.link = `http://localhost:3000/product/${object.price_category}/${object.country_code}/${object.market_name}/${object.product_name}`; 
            return object; 
          })
          return productArray;         
      }

     function addQCLink(productArray){
        productArray.map(function(object){
          object.link = `http://localhost:3000/product/${object.price_category}/${object.country_code}/${object.market_name}/${object.product}`; 
          return object; 
        })
        return productArray;         
    }

    return(
        <div>
            <TableRetail data={retailData}/>
            <TableWholesale data={wholesaleData}/>
            <TableRetailQC data={retailQC}/>
            <TableWholesaleQC data={wholesaleQC}/>                    
        </div>
    )
}

export default Dashboard;
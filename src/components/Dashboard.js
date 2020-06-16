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
              setRetail(response.data);
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
            setRetailQC(response.data);
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
              console.log(response.data); 
              setWholesale(response.data);
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
            setWholesaleQC(response.data);
            console.log(wholesaleQC); 
            })
        .catch(error => {
            console.log(error); 
        })
    }

          getWholesale(); 
          getWholesaleQC(); 

      }, []) 
  
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

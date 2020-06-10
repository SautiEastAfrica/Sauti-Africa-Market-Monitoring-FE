import React, { useState, useEffect, useContext } from 'react'; 
import List from './List'; 
import TableRetail from './TableRetail'; 
import TableWholesale from './TableWholesale'; 

import { AuthContext } from '../App.js'; 

function Dashboard(){

    const { axios } = useContext(AuthContext)();

    const wholesale = 'wholesale'; 
    const retail = 'retail'; 

    const [retailData, setRetail] = useState([{ country: '', marketplace: '', product: '', currency: '', price: '1', category: '', phase: '',  stressness: '', date: ''}]); 
    const [wholesaleData, setWholesale] = useState([{ country: '', marketplace: '', product: '', currency: '', price: '1', category: '', phase: '',  stressness: '', date: ''}]); 

    useEffect(() => {

        async function getRetail () { 
          await axios.get(`https://sautimarket.herokuapp.com/${retail}/data/`) 
          .then(response => {
              console.log(response.data); 
              setRetail(response.data[`${retail}_data`]);
  
              var newData = response.data[`${retail}_data`]; 
              console.log(newData); 
              var filteredData = newData.filter(filterPhases); 
              console.log('Filtered Data: ', filteredData); 
              setRetail(filteredData); 
              console.log(retailData); 
              })
          .catch(error => {
              console.log(error); 
          })
      }
          getRetail(); 
      }, []) 

      useEffect(() => {

        async function getWholesale () { 
          await axios.get(`https://sautimarket.herokuapp.com/${wholesale}/data/`) 
          .then(response => {
              console.log(response.data); 
              setWholesale(response.data[`${wholesale}_data`]);
  
              var newData = response.data[`${wholesale}_data`]; 
              console.log(newData); 
              var filteredData = newData.filter(filterPhases); 
              console.log('Filtered Data: ', filteredData); 
              setWholesale(filteredData); 
              console.log(retailData); 
              })
          .catch(error => {
              console.log(error); 
          })
      }
          getWholesale(); 

      }, []) 

      function filterPhases(object){
        return object.phase === 'Crisis' || object.phase === 'Alert' || object.phase === 'Stress'; 
      }
  
    return(
        <div>
            <TableRetail data={retailData}/>
            <TableWholesale data={wholesaleData}/>
        </div>
    )
}

export default Dashboard; 
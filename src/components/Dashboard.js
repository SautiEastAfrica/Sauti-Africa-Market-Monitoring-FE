import React, { useState, useEffect, useContext } from 'react'; 
import List from './List'; 
import Table from './DataTable'; 

import { AuthContext } from '../App.js'; 

function Dashboard(){

    const { axios } = useContext(AuthContext)();

    const wholesale = 'Wholesale'; 
    const retail = 'Retail'; 

    const [data, setData] = useState([{ country: '', marketplace: '', product: '', currency: '', price: '', category: '', phase: '',  stressness: '', date: ''}]); 
    const category = 'wholesale'; 

    useEffect(() => {

        async function getData () { 
          await axios.get(`https://sautimarket.herokuapp.com/${category}/data/`) 
          .then(response => {
              console.log(response.data); 
              setData(response.data[`${category}_data`]);
  
              var newData = response.data[`${category}_data`]; 
              console.log(newData); 
              var filteredData = newData.filter(filterPhases); 
              console.log('Filtered Data: ', filteredData); 
            //   setData(filteredData); 
              console.log(data); 
              })
          .catch(error => {
              console.log(error); 
          })
      }
          getData(); 

      }, []) 

      function filterPhases(object){
        return object.phase === 'Crisis' || object.phase === 'Alert' || object.phase === 'Stress'; 
      }
  
    return(
        <div>
            {/* <List category={wholesale} /> */}
            {/* <List category={retail} /> */}
            <Table data={data}/>
        </div>
    )
}

export default Dashboard; 
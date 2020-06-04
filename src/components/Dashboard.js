import React from 'react'; 
import List from './List';


function Dashboard(){

    const wholesale = 'Wholesale'; 
    const retail = 'Retail'; 

    return(
        <div>
            <List category={wholesale} />
            <List category={retail} />
        </div>
    )
}

export default Dashboard; 
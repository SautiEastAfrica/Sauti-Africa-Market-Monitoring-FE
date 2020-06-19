import React from 'react'; 
import { Card, Descriptions } from 'antd';

import '../styles/Product.scss'; 

function DataQuality(props){

    console.log(`DATA QUALITY Component props: `, props); 

    return(
        <>
        <Card hoverable='true'>
            <Descriptions title="Data Quality" bordered>
                <Descriptions.Item label="DQI">{props.data.DQI}</Descriptions.Item>
                <Descriptions.Item label="DQI Category">{props.data.DQI_cat}</Descriptions.Item>
                <Descriptions.Item label="Annual % Complete">{props.data.completeness}</Descriptions.Item>
                <Descriptions.Item label="Beginning Date Of Data">{props.data.start_date}</Descriptions.Item>
                <Descriptions.Item label="Last Date Of Data">{props.data.end_date}</Descriptions.Item>
                <Descriptions.Item label="Minimum Price">{props.data.min_price}</Descriptions.Item>
                <Descriptions.Item label="Maximum Price">{props.data.max_price}</Descriptions.Item>
                <Descriptions.Item label="Mean">{props.data.mean}</Descriptions.Item>
                <Descriptions.Item label="Mode D">{props.data.Mode_D}</Descriptions.Item>
                <Descriptions.Item label="# Of Observations">{props.data.number_of_observations}</Descriptions.Item>
            </Descriptions>
        </Card>
        </>
    )
}

export default DataQuality; 
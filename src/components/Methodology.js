import React, { useState } from 'react';  

import { Card, Descriptions } from 'antd'; 
import DescriptionsItem from 'antd/lib/descriptions/Item';

function Methodology(){ 

    const [tabKey, setTabKey] = useState({ key: 'general' }); 

    const onTabChange = (key, type) => { 
        console.log(key, type); 
        setTabKey({ [type]: key }); 
    }
    
    const tabList = [
        {
          key: 'general',
          tab: 'General',
        },
        {
          key: 'dqi',
          tab: 'Data Quality Index',
        },
      ];
    
      const contentList = {
        general: <Card type='inner' title='General'>
        <p>
        The World Food Program has developed an indicator to measure stress on the product / market pair known as Alert for Price Spikes (ALPS). Their methodology uses a linear regression to forecast the expected following monthly price.
        </p>

        <p>
        We decided to take the maximum observed price of the month, to be fixed as the monthly price.
        The error between the expected price and the real observed price divided by the standard deviation of the residuals of the forecasting is the ALPS number. 
        </p>

        <p>
        We compare the ALPS to a chart and determine the prices status by the following:
            - it is under 0.25 the prices, we considered the price to be in normal phase
            - it is upper 0.25 but lower than 1, we considered the price to be in stress phase
            - it is upper 1 but lower than 2, we considered the price to be in alert phase
            - it is upper than 2, we considered the price to be in crisis phase
        </p>
        
        <p>
        And the stressness index is how stress the price is. The only phase that can be stressed more than 100% is the crisis, that would point how big the crisis is.
        </p>

        <p>
        The ALPS methodology demands at least three years of historical data to work properly. We decided to use four years or more data for the ALPS, otherwise, if we have more than two but less than four years, we considered a weak version of the ALPS.
        </p>

        <p>
        In the product / market pairs where a linear regression was not possible to operate, we considered an ARIMA forecasting method to substitute the linear regression, so we can get phases of more pairs.
        </p>
        </Card>,
        dqi: <Card type='inner' title='Data Quality Index Methodology'>
        <Descriptions>
          <p>
            A data quality index (DQI) is calculated based on six quality dimensions to rank all time series for later forecasting. Higher the DQI value, better the data quality.
            The DQI is defined as the weighted sum of the six transformed quality dimensions:
            $$DQI = \sum_  i=1  ^6D_iW_i$$
            where  
            ```
            </p>
            <p>
                D1, W1 = tdf['data_length'], 0.6
                D2, W2 = tdf['completeness'], 0.3
                D3, W3 = 1-tdf['mode_D'], 0.9
                D4, W4 = 1-tdf['timeliness'], 0.9
                D5, W5 = 1-tdf['duplicates'], 0.3
                D6, W6 = tdf['data_points'], 0.9
            ```
            </p>
            <p>
            tdf means the transformed dimensions are transformed (scaled to be in the range of 0 to 1). Weights assigned to the quality dimensions are empirical. 
            The following quality index are used extracted from each time series and used in the calculation of six quality dimentions. 
            </p>  
            <Descriptions.Item label='Data Length'>
              length of collected data in terms of days. It is day difference between the start and end of the time series. 
            </Descriptions.Item>
            <Descriptions.Item label='Timeliness'>
              gap between the end of time series and today in terms of days. 0 means sampling is up to today, 30 means the timestamp on the most recent data was 30 days ago.
            </Descriptions.Item>
            <Descriptions.Item label='Completeness'>
            The ratio of the length of valid (not Nan) data to the length of total data in a complete day-by-day time frame. 0 means all data are Nan, 1 means data is perfectly completed.
            </Descriptions.Item>
            <Descriptions.Item label='Duplicates'>
            number of data sampled on a same date. 0 means no duplicates, 10 means there are 10 data entrys are duplicates.   
            </Descriptions.Item>
            <Descriptions.Item label='Mode D'>
            the mode (most frequent) of sampling interval in time series in terms of days. This can be considered to be the resolution of the data. 1 means most of the samples were collected on a daily basis. 7 means most of the samples were collected on a weekly basis.
            </Descriptions.Item>
            <Descriptions.Item label='Data Points'>
                point of valid data, calculated as Data length x Completeness - Duplicates.
            </Descriptions.Item>
        </Descriptions>
        </Card>
      };

return(
    <Card
        tabList={tabList}
        activeTabKey={tabKey}
        onTabChange={key => {
            onTabChange(key, 'key');
          }}
        title='Methodology'
        style={{ width:'86%'}}
        bordered='true'
        >
        { contentList[tabKey.key] } 
    </Card>
    )
}

export default Methodology;
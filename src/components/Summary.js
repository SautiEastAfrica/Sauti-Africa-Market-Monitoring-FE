import React from 'react'; 
import '../styles/Product.scss'; 
import { Card, Descriptions } from 'antd';

function Summary(props){

    return (
      <>
        <Card hoverable='true' style={{ width: '86%' }}>
          <Descriptions title="Product Summary" bordered>
              <Descriptions.Item label="Price Category">{props.quality.price_category}</Descriptions.Item>
              <Descriptions.Item label="Product Category">{props.quality.product_category}</Descriptions.Item>
              <Descriptions.Item label="Last Price Date">{props.data.date_price}</Descriptions.Item>
              <Descriptions.Item label="Country">{props.data.country_code}</Descriptions.Item>
              <Descriptions.Item label="Market">{props.data.market_name}</Descriptions.Item>
              <Descriptions.Item label="Product">{props.data.product_name}</Descriptions.Item>
              <Descriptions.Item label="Last Documented Price">{props.data.observed_price}</Descriptions.Item>
              <Descriptions.Item label="Currency">{props.data.currency_code}</Descriptions.Item>
          </Descriptions>
        </Card>
      </>
    );
  }

export default Summary; 
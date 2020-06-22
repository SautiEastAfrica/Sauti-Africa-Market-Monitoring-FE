import React, { useState } from 'react'; 

import '../styles/Product.scss'; 

import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import { Descriptions, Badge } from 'antd';

const { Meta } = Card;

function Summary(props){
    const [loading, setLoading] = useState(true); 

  const onChange = checked => {
      setLoading({ loading: !checked }); 
  };

  console.log(`SUMMARY Component props: `, props); 

    return (
      <>
        <Card hoverable='true'>
          <Descriptions title="Product Summary" bordered>
              <Descriptions.Item label="Price Category">{props.quality.price_category}</Descriptions.Item>
              <Descriptions.Item label="Product Category">{props.quality.product_category}</Descriptions.Item>
              <Descriptions.Item label="Country">{props.data.country_code}</Descriptions.Item>
              <Descriptions.Item label="Market">{props.data.market_name}</Descriptions.Item>
              <Descriptions.Item label="Product">{props.data.product_name}</Descriptions.Item>
              <Descriptions.Item label="Last Documented Price">{props.data.observed_price}</Descriptions.Item>
              <Descriptions.Item label="Currency">{props.data.currency_code}</Descriptions.Item>
              <Descriptions.Item label="Date">{props.data.date_price}</Descriptions.Item>
          </Descriptions>
        </Card>
      </>
    );
  }

export default Summary; 
import React, { useState, useEffect, useContext } from 'react'; 
import TableRetail from './TableRetail'; 
import TableRetailQC from './TableRetailQC'; 
import TableWholesale from './TableWholesale'; 
import TableWholesaleQC from './TableWholesaleQC';

import { AuthContext } from '../App.js'; 

import "antd/dist/antd.css";

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd'; 
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout; 

// class SiderDemo extends React.Component {
//     state = {
//       collapsed: false,
//     };
  
//     onCollapse = collapsed => {
//       console.log(collapsed);
//       this.setState({ collapsed });
//     };

function Dashboard(){

    const [collapsed, setCollapsed] = useState(false); 

    const onCollapse = () => {
        console.log(collapsed); 
        setCollapsed({ collapsed })
    }

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
        <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Data Quality
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Product</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />} />
                </Menu>
                </Sider>

                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Product Search</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <TableRetail data={retailData}/>
                        <TableWholesale data={wholesaleData}/>
                        <TableRetailQC data={retailQC}/>
                        <TableWholesaleQC data={wholesaleQC}/>                    

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
    )
}

export default Dashboard; 

// import React from 'react'
import '../App.css'
// import { Layout } from 'antd'
// import { Content, Footer, Header } from 'antd/es/layout/layout'
// import { Typography, Col, Row, Button } from 'antd';
// import { CaretRightOutlined, SaveFilled } from '@ant-design/icons';
// import Search from 'antd/es/input/Search';
// import Title from 'antd/es/typography/Title';

// export default function App() {
//   return (
//     <Layout style={{ padding: '20px', backgroundColor: '#fff' }}>
//       <Header style={{ backgroundColor: '#fff', padding: '0', height: 'auto' }}>
//         <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//           <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
//           <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
//           <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
//         </Layout>
//         <Row>
//           <Col span={18}><Title level={2} style={{ margin: '0px' }}>Guest</Title></Col>
//           <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
//             <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
//               Save Changes
//             </Button>
//           </Col>
//           <Typography.Paragraph>
//             By default your guests must be invited, and validated based on the emails in this guestlist. However you can change this in Store admin.
//           </Typography.Paragraph>
//         </Row>
//       </Header>
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Collapse, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const links = ['/storeOverView', '/design', '/product', '/guest', '/email', '/orders', '/shipping', '/billing', 'storeadmin']
const items = [
  { label: 'Store OverView', icon: 'fa-solid fa-store', description: '' },
  { label: 'Design', icon: 'fa-solid fa-swatchbook', description: 'These settings control how your store appears on the web' },
  { label: 'Product', icon: 'fa-solid fa-gift', description: 'Here you van choose the product selection for your store.We have automatically chosen a selection for you based on the information you give us,but you may add or remove items from this list.Just make sure that the expected number of visitors will be plenty higher than the minimun order quantities for all products on your site.' },
  { label: 'Guests', icon: 'fa-solid fa-users', description: ' By default your guests must be invited, and validated based on the emails in this guestlist. However you can change this in Store admin.' },
  { label: 'Emails', icon: 'fa-solid fa-envelope' },
  { label: 'Orders', icon: 'fa-solid fa-cart-shopping' },
  { label: 'Shipping', icon: 'fa-solid fa-truck-fast' },
  { label: 'Billing', icon: 'fa-solid fa-credit-card' },
  { label: 'Store Admin', icon: 'fa-solid fa-wrench' },

  // 'Design',
  // 'Product',
  // 'Guests',
  // 'Emails',
  // 'Orders',
  // 'Shipping',
  // 'Billing',
  // 'Store Admin'
]
// const label = items.map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: items[index],
//   //   link:'/guest'
// }));

const Example = () => {
  const navTo = useNavigate();
  const [collapse, setCollopase] = useState()
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const handleClick = (e) => {
    navTo(links.find((ele, index) => e.key === index.toString()))

  }
  // const MenuItemsStyle={
  //   padding:"8px 16px",
  //   fontSize:"16px",
  //   backgroundColor:"yellow"
  // }
  const activeMenuItemStyle = {
    // ...MenuItemsStyle,
    backgroundColor: "green",
    color: "#fff"
  }
  return (

    <Layout >
      <Sider id='menuBar'
        breakpoint="lg"
        collapsedWidth={'0px'}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapse, type) => {
          console.log(collapse, type);
        }} >
        {/* <div className="demo-logo-vertical" /> */}
        <Menu mode="inline" defaultSelectedKeys={['0']} onClick={(e) => handleClick(e)} style={{
          color: "black",
          height: '100vh',
          padding: '5px',
          backgroundColor: "#f9fafb"
        }}>
          {

            items.map((ele, index) => <Menu.Item key={index} onClick={() => window.innerWidth < 993 && document.querySelector('.ant-layout-sider-zero-width-trigger-left').click()} >{<i className={ele.icon} style={{ width: "30px" }}></i>

            } {ele.label}</Menu.Item>)
          }
        </Menu>
      </Sider>
      {/* <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
    
       
     
      </Layout> */}
    </Layout>
  );
};
export default Example;
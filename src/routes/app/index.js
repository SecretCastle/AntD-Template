import React from 'react';
import { Route , withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

class MainApp extends React.Component {
  render(){
    return(
      <Layout className="app-container">
          <Header className="header-container">
            <div className="logo">logo</div>
            <Menu 
              theme="dark"
              mode="horizontal"
              className="MenuWrap"
            >
              <Item className="menuItem">首页</Item>
              <Item className="menuItem">首页</Item>
              <Item className="menuItem">首页</Item>
              <Item className="menuItem">首页</Item>
            </Menu>
          </Header>
          <Layout className="app-container">
           
            <Content className="app-inner-container"></Content>

          </Layout>
      </Layout>
    )
  }
}

export default MainApp;
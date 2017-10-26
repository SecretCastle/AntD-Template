import React from 'react';
import { Route , withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

import Demo from './routes/demo'
import Demo2 from './routes/demo2';

class MainApp extends React.Component {
  render(){
    const { match } = this.props;
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
              <Item className="menuItem"><Link to={`${match.url}/index`}>首页</Link></Item>
              <Item className="menuItem"><Link to={`${match.url}/index2`}>首页</Link></Item>
              <Item className="menuItem">首页</Item>
            </Menu>
          </Header>
          <Layout className="app-container">
            <Content className="app-inner-container">
              <Route exact path={`${match.url}/index`} component={Demo}/>
              <Route exact path={`${match.url}/index2`} component={Demo2}/> 
            </Content>

          </Layout>
      </Layout>
    )
  }
}

export default withRouter(MainApp);
import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderMenu from '../../container/HeaderClick';
import SiderMenu from '../../container/SiderVisibility';
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

import Demo from './routes/home/pages/demo'
import Demo2 from './routes/demo2';

class MainApp extends React.Component {
  
  render() {
    const { match } = this.props;
    return (
      <Layout className="app-container">
        <HeaderMenu url={`${match.url}`} value="HIDE" />
        <Layout className="app-container">
          <Sider 
            className="sider-container"
            width={180}
          >
            <SiderMenu />
          </Sider>
          <Layout>
            <Header className="content-header">Header</Header>
            <Content className="app-inner-container">              
              <Route exact path={`${match.url}/index`} component={Demo} />
              <Route exact path={`${match.url}/index2`} component={Demo2} />             
            </Content>
            <Footer className="content-footer">CopyRight @ 庆科云 2012 - 2017</Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(MainApp);
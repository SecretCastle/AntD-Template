import React from 'react';
import { Route , withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

import Home from './routes/Home';
import Product from './routes/Product';
import MyHeader from '../../container/components/header'



class MainApp extends React.Component {
  render(){
    const { match } = this.props;
    return(
      <Layout className="app-container">
          <MyHeader />
          <Layout className="app-container">
            <Route exact path={`${match.url}`} component={Home} />
            <Route exact path={`${match.url}/index`} component={Product}/>
          </Layout>
      </Layout>
    )
  }
}

export default withRouter(MainApp);
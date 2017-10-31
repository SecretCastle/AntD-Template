/* import react */
import React from 'react';
import { Route , withRouter, Link } from 'react-router-dom';
/* import antd UI */
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;
/* import antd component */
import Home from './routes/Home';
import Product from './routes/Product';
import MyHeader from 'fogcomp/HeaderMenu';
import LeftNav from 'fogcomp/SiderMenu';
import BreadCommon from 'fogcomp/BreadCommon';

class MainApp extends React.Component {
  render(){
    const { match } = this.props;
    return(
      <Layout className="app-container">
          <MyHeader url={`${match.url}`} value="SHOW" />
          <Layout className="app-container ant-layout-has-sider">
              <LeftNav />
              <Layout className="app-container">
                  <BreadCommon />
                  <Route exact path={`${match.url}`} component={Home} />
                  <Route exact path={`${match.url}/product`} component={Product}/>
              </Layout>
          </Layout>  
      </Layout>
    )
  }
}

export default withRouter(MainApp);
/* import react */
import React from 'react';

import { Route , withRouter, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import Home from './routes/Home';
import Product from './routes/Product';
import Ability from './routes/Ability';
import BackTop from 'antd/lib/back-top';
import MyHeader from 'fogcomp/HeaderMenu';
import LeftNav from 'fogcomp/SiderMenu';
import BreadCommon from 'fogcomp/BreadCommon';


class MainApp extends React.Component {
  render(){
    const { MenuShow, match, dispatch } = this.props;
    return(
      <Layout className="app-container">
        <BackTop visibilityHeight={100}/>
        <MyHeader url={`${match.url}`} value="SHOW" />
        <Layout className="app-container ant-layout-has-sider">
          <LeftNav />
          <Layout
            className={
              ClassNames(
                'app-container'
              )
            }>
            <BreadCommon />
            <Layout style={{overflow:'scroll'}}>
              <Route exact path={`${match.url}`} component={Home} />
              <Route path={`${match.url}/product`} component={Product}/>
              <Route path={`${match.url}/ability`} component={Ability}/>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}


function getStateFromRedux(state){
  return {
      MenuShow: state.MenuFn.isShow
  }
}

export default connect(getStateFromRedux)(withRouter(MainApp));
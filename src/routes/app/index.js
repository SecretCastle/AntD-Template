import React from 'react';
import { Route , withRouter, Link, Switch } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import BackTop from 'antd/lib/back-top';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import Home from './routes/Home';
import MyHeader from 'fogcomp/HeaderMenu';
import LeftNav from 'fogcomp/SiderMenu';
import BreadCommon from 'fogcomp/BreadCommon';
import loadable from 'react-loadable';

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;


function LoadingComponent() {
  return <div>Loading....</div>;
}
let AsynProduct = loadable({
  loader: () => import('./routes/Product'),
  loading: LoadingComponent
})


let AsynAbility = loadable({
  loader: () => import('./routes/Ability'),
  loading: LoadingComponent
})

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
            
            <Layout style={{overflow:'scroll',backgroundColor:'#fff'}}>
              <div className="maxwrap">
                <Route exact path={`${match.url}`} component={Home} />
                <Route path={`${match.url}/product`} component={AsynProduct}/>
                <Route path={`${match.url}/ability`} component={AsynAbility}/>
              </div>
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
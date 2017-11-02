/* import react */
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Link } from 'react-router-dom';
/* import antd UI */
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Badge from 'antd/lib/badge';
import Icon from 'antd/lib/icon';
import DropDown from 'antd/lib/dropdown';
import Avator from 'antd/lib/avatar';
/* import actions */
import { setSiderVisibility } from '../redux/actions/sider';
import HeaderNotice from './HeaderNotice';

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

class MyHeader extends React.Component {
  componentDidMount() {
    const {location} = this.props;
    if(location.pathname === '/app'){
      this.props.dispatch(setSiderVisibility('SHOW'));
    }else{
      this.props.dispatch(setSiderVisibility('HIDE'));
    }
    
  }
  render() {
    const { url } = this.props;

    const menu = (
      <Menu>
        <Menu.Item>我的公司</Menu.Item>
        <Menu.Item>成员管理</Menu.Item>
        <Menu.Item>财务管理</Menu.Item>
        <Menu.Item>工单中心</Menu.Item>
        <Menu.Item>消息中心</Menu.Item>
        <Menu.Item>日志中心</Menu.Item>
        <Menu.Item>退出系统</Menu.Item>
      </Menu>
    )

    return (
      <Header className="header-container">
        <div className="maxwrap">
          <div className="logo">logo</div>
          <div className="header-right">
            <div><a href={`#${url}`} style={{color:'#fff'}}>文档</a></div>
            <HeaderNotice />
            <DropDown overlay={menu} trigger={['click']}>
              <span className="right-user">
                <Avator src="https://gw.alipayobjects.com/zos/rmsportal/lctvVCLfRpYCkYxAsiVQ.png" icon="user"/>
                SecretCastle
              </span>
            </DropDown>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            className="menu-wrap"
            onClick={(obj) => {
              switch (obj.key) {
                case 'home':
                  this.props.dispatch(setSiderVisibility('SHOW'));
                  break;
                case 'product':
                  this.props.dispatch(setSiderVisibility('HIDE'));
                  break;
                case 'application':
                  this.props.dispatch(setSiderVisibility('HIDE'));
                  break;
                case 'ability':
                  this.props.dispatch(setSiderVisibility('HIDE'));
                  break;
                case 'data':
                  this.props.dispatch(setSiderVisibility('SHOW'));
                  break;
                case 'customer':
                  this.props.dispatch(setSiderVisibility('SHOW'));
                  break;
                case 'business':
                  this.props.dispatch(setSiderVisibility('SHOW'));
                  break;
                default:
                  break;
              }
            }
            }
          >
            <Item key="home" className="menuItem"><Link to={`${url}`}>首页</Link></Item>
            <Item key="product" className="menuItem"><Link to={`${url}/product`}>产品</Link></Item>
            <Item key="application" className="menuItem"><Link to={`${url}/application`}>应用</Link></Item>
            <Item key="ability" className="menuItem"><Link to={`${url}/ability`}>能力</Link></Item>
            <Item key="data" className="menuItem"><Link to={`${url}/data`}>数据</Link></Item>
            <Item key="customer" className="menuItem"><Link to={`${url}/customer`}>客户</Link></Item>
            <Item key="business" className="menuItem"><Link to={`${url}/business`}>业务</Link></Item>
          </Menu>
          
        </div>
      </Header>
    )
  }
}

const mapDispatchToProps = (state) => {
  return {

  }
}

export default connect(mapDispatchToProps)(withRouter(MyHeader));
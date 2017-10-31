/* import react */
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Link } from 'react-router-dom';
/* import actions */
import { setSiderVisibility } from '../redux/actions/sider';
/* import antd UI */
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

class MyHeader extends React.Component {
  componentDidMount() {
    this.props.dispatch(setSiderVisibility('SHOW'));
  }
  render() {
    const { url } = this.props;
    return (
      <Header className="header-container">
        <div className="logo">logo</div>
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
      </Header>
    )
  }
}

const mapDispatchToProps = (state) => {
  return {

  }
}

export default connect(mapDispatchToProps)(MyHeader);
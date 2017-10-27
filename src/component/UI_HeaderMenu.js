import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { setSiderVisibility } from '../actions/sider';

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

class HeaderMenu extends React.Component {
    render(){
        return (
          <Header className="header-container">
            <div className="logo">logo</div>
            <Menu
              theme="dark"
              mode="horizontal"
              className="menu-wrap"
            >
              <Item className="menuItem"
                onClick = {
                    this.props.dispatch(setSiderVisibility('HIDE'))                 
                }>
                <Link to={`${this.props.url}/index/${this.props.value}`}>
                首页
                </Link>
              </Item>
              <Item className="menuItem">产品</Item>
              <Item className="menuItem"><Link to={`${this.props.url}/index2`}>应用</Link></Item>
              <Item className="menuItem">能力</Item>
              <Item className="menuItem">数据</Item>
              <Item className="menuItem">日志</Item>
              <Item className="menuItem">成员管理</Item>
              <Item className="menuItem">财务</Item>
            </Menu>
          </Header>
        )
    }
}

export default HeaderMenu
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route , withRouter, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;
class MyHeader extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <Header className="header-container">
                <div className="logo">logo</div>
                <Menu 
                theme="dark"
                mode="horizontal"
                className="menu-wrap"
                >
                    <Item className="menuItem"><Link to={`${match.url}`}>首页</Link></Item>
                    <Item className="menuItem"><Link to={`${match.url}/product`}>产品</Link></Item>
                    <Item className="menuItem"><Link to={`${match.url}/application`}>应用</Link></Item>
                    <Item className="menuItem"><Link to={`${match.url}/ability`}>能力</Link></Item>
                    <Item className="menuItem"><Link to={`${match.url}/data`}>数据</Link></Item>
                    <Item className="menuItem"><Link to={`${match.url}/customer`}>客户</Link></Item>
                    <Item className="menuItem"><Link to={`${match.url}/business`}>业务</Link></Item>
                </Menu>
            </Header>
        )
    }
}

export default withRouter(MyHeader);
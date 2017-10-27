import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

class SiderMenu extends React.Component {
    render(){
        console.log(this.props)
        return (          
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              className="sider-wrap"
            >
              <Item className="menuItem">itme1</Item>
              <Item className="menuItem">item2</Item>
              <Item className="menuItem">item3</Item>
              <Item className="menuItem">item4</Item>
              <Item className="menuItem">item5</Item>
            </Menu>
        )
    }
}

export default SiderMenu;
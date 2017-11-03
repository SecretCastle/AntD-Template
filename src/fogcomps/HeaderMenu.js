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
/* import data */
import Config from '../MenuConfig.json'

class MyHeader extends React.Component {
  state = {
    menuList: []
  }
  /* 导航列表循环渲染函数 */
  createHeaderMenuList() {
    let MenuList = []; // 渲染列表数组
    let labels = [];  // 读取json配置文件数组
    for (let label in Config) {
      labels.push(label)
    }
    labels.map((label) => {
      MenuList.push((
        <Item key={Config[label].en_menuitem} className="menuItem">
          <Link to={Config[label].path}>
            {Config[label].menuitem}
          </Link>
        </Item>
      ))
    })
    this.setState({
      menuList: MenuList
    })
  }

  componentDidMount() {
    const { location } = this.props;
    /* 判断进入页面是否为首页，控制侧边栏显隐 */
    // if (location.pathname === '/app') {
    //   this.props.dispatch(setSiderVisibility('SHOW'));
    // } else {
    //   this.props.dispatch(setSiderVisibility('HIDE'));
    // }
    /* 导航列表循环渲染函数 */
    this.createHeaderMenuList()
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
          >
            {this.state.menuList}
          </Menu>
        </div>
      </Header>
    )
  }
}

// const mapDispatchToProps = (state) => {
//   return {

//   }
// }

// export default connect(mapDispatchToProps)(withRouter(MyHeader));
export default withRouter(MyHeader);

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

// import Config from '../../MenuConfig.json';

class LeftSide extends React.Component {
    render() {
        return(
            <Sider 
                className={this.props.visible ? "sider-container":"hide" }
            >
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
          </Sider>
        )
    }
}

const getSiderVisible = (filter) => {
  switch(filter){
      case 'SHOW':
          return true
      case 'HIDE':
          return false
      default:
          return
  }
}

const mapStateToProps = (state) => {
  return {
      visible : getSiderVisible(state.Sider.sideState)
  }
}

export default connect(mapStateToProps)(LeftSide);

import React from 'react';
import Menu from 'antd/lib/menu';
const { Item, SubMenu } = Menu; 
import Config from '../../MenuConfig.json';

class LeftSide extends React.Component {
    render() {
        return(
            <div className="sider-container">
                <Menu>
            
                </Menu>
            </div>
        )
    }
}

export default LeftSide;

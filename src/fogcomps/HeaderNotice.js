import React from 'react';
import Drowdown from 'antd/lib/dropdown';
import Badge from 'antd/lib/badge';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';
import Popover from 'antd/lib/popover';
import Tabs from 'antd/lib/tabs';

class HeaderNotice extends React.Component {
    render() {


        const menu = (
            <Tabs style={{width:260}}>
                <Tabs.TabPane tab="消息" key="1">
                    <Menu className="msgbox-container">
                        <Menu.Item>
                            <span className="icon"><Icon type="mail"/></span>
                            <span className="text">
                                你有新的饿了么订单，请注意查收;
                                你有新的饿了么订单，请注意查收;
                                你有新的饿了么订单，请注意查收;
                                你有新的饿了么订单，请注意查收
                            </span>
                        </Menu.Item>
                    </Menu>
                </Tabs.TabPane>
                <Tabs.TabPane tab="公告" key="2">
                    <Menu className="msgbox-container">
                        <Menu.Item>
                            <span className="icon"><Icon type="mail"/></span>
                            <span className="text">
                                你有新的饿了么订单，请注意查收;
                                你有新的饿了么订单，请注意查收;
                                你有新的饿了么订单，请注意查收;
                                你有新的饿了么订单，请注意查收
                            </span>
                        </Menu.Item>
                    </Menu>
                </Tabs.TabPane>
                <Tabs.TabPane tab="待办" key="3">
                    <span>当前没有消息</span>
                </Tabs.TabPane>
            </Tabs>
        )
        
        return (
            <Popover content={menu} trigger="click">
                <Badge count={4} className="bell">
                    <Icon type="bell"/>
                </Badge>
            </Popover>
        )
    }
}

export default HeaderNotice;;
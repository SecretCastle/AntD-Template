import React from 'react';
import Tabs from 'antd/lib/tabs';
import CommonDebug from './components/CommunicateDebug';
import FunctionalDebug from './components/FunctionalDebug';
import OnlineDebug from './components/OnlineDebug';

const TabPane = Tabs.TabPane;


class PHardware extends React.Component {
    render(){
        return (
            <div className="hardware-container">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="通讯调试" key="1"><CommonDebug /></TabPane>
                    <TabPane tab="功能调试" key="2"><FunctionalDebug /></TabPane>
                    <TabPane tab="挂机测试" key="3"><OnlineDebug /></TabPane>
                </Tabs>
            </div>
        )
    }
}

export default PHardware;
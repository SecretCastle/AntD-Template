import React from 'react';
const TabPane = Tabs.TabPane;
import Tabs from 'antd/lib/tabs';
class MyTabs extends React.Component {
    callback = (e) => {
        console.log(e);
    }
    render(){
        const {show} = this.props;
        return(
            <Tabs defaultActiveKey={show} onChange={this.callback}>
                <TabPane tab="Tab 1" key="1">点击按钮显示的为Menu区域，预留位置用，可删除</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}

export default MyTabs;
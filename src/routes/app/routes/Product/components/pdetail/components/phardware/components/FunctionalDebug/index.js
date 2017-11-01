import React from 'react';
import Icon from 'antd/lib/icon';
import Tabs from 'antd/lib/tabs';
import Button from 'antd/lib/button';
import Tablez from 'fogcomp/Tablez';
const TabPane = Tabs.TabPane;

class FunctionalDebug extends React.Component{
    render(){
        const {ant} = this.props;
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
          }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="#">Action 一 {record.name}</a>
                <span className="ant-divider" />
                <a href="#">Delete</a>
                <span className="ant-divider" />
                <a href="#" className="ant-dropdown-link">
                  More actions <Icon type="down" />
                </a>
              </span>
            ),
          }];
          
          const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          }];
          
        return(
            <div>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={"left"}
                >
                    <TabPane tab="测试用例" key="1">
                      <Tablez columns={columns} dataSource={data} pagination={false}/>
                      <Button style={{marginTop:20,color:'#fff',backgroundColor:'#29bb9c'}}>新建用例版本</Button>
                    </TabPane>
                    <TabPane tab="测试任务" key="2">
                      <Tablez columns={columns} dataSource={data}/>
                    </TabPane>
                </Tabs>
                
            </div>
        )
    }
}

export default FunctionalDebug;
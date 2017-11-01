import React from 'react';
import Tablez from 'fogcomp/Tablez';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
class OnlineDebug extends React.Component{
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
                <Tablez columns={columns} dataSource={data} pagination={false} />
                <Button style={{marginTop:20,color:'#fff',backgroundColor:'#29bb9c'}}>添加调试设备</Button>
            </div>
        )
    }
}

export default OnlineDebug;
import React from 'react';
import Button from 'antd/lib/button';
import Tablez from 'fogcomp/Tablez';
class PFunc extends React.Component{
    render() {
        const columns = [{
            title: '功能字段',
            dataIndex: 'fname',
            render: text => <a href="">{text}</a>,
        }, {
            title: '名称',
            dataIndex: 'name',
        }, {
            title: '类型',
            dataIndex: 'type',
        },{
            title:'取值',
            dataIndex:'values'
        }];
        const data = [{
            key: '1',
            fname: 'Power',
            name:'电源开关',
            type: 'int',
            values:'0=关，1=开'
        }, {
            key: '2',
            fname: 'WindSpeed',
            name:'风速',
            type: 'int',
            values:'0=无，1=慢速，2=中速，3=高速'
        }, {
            key: '3',
            fname: 'WorkTime',
            name:'工作时间',
            type: 'String',
            values:'00:00-23:59'
        }, {
            key: '4',
            fname: 'ErrorCode',
            name:'故障代码',
            type: 'int',
            values:'0=无，1=电机短路，2=传感器异常'
        }];

        const columns2 = [{
            title: '功能字段',
            dataIndex: 'fname',
            render: text => <a href="">{text}</a>,
        }, {
            title: '名称',
            dataIndex: 'name',
        }, {
            title: '类型',
            dataIndex: 'type',
        },{
            title:'取值',
            dataIndex:'values'
        },{
            title:'操作',
            dataIndex:'fn',
            render:(text,record) =>{
                return (
                    <span>
                        <a>删除</a>
                    </span>
                )
            }
        }];
        const data2 = [{
            key: '1',
            fname: 'Power',
            name:'电源开关',
            type: 'int',
            values:'0=关，1=开',
        }, {
            key: '2',
            fname: 'WindSpeed',
            name:'风速',
            type: 'int',
            values:'0=无，1=慢速，2=中速，3=高速'
        }, {
            key: '3',
            fname: 'WorkTime',
            name:'工作时间',
            type: 'String',
            values:'00:00-23:59'
        }, {
            key: '4',
            fname: 'ErrorCode',
            name:'故障代码',
            type: 'int',
            values:'0=无，1=电机短路，2=传感器异常'
        }];
        
        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };
        return (
            <div className="table-container">
                <div>
                    <h2>公版功能定义</h2>
                    <Tablez rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
                </div>
                <div className="box">
                    <h2>自定义功能<span><a>如何定义自定义功能?</a></span></h2>
                    <Tablez columns={columns2} dataSource={data2} pagination={false} />
                </div>
                <div className="buttons flex">
                    <Button style={{width:150}}>新增功能</Button>
                    <Button type="primary" style={{width:150}}>保存更改</Button>
                </div>
                
            </div>
        )
    }
}

export default PFunc;
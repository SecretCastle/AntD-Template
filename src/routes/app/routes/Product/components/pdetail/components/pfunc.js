import React from 'react';
import Table from 'antd/lib/table';

class PFunc extends React.Component{
    render() {
        const colums = [{
            title:'选择',
            dataIndex:'',
            width:'50'
        },{
            title:'功能字段',
            dataIndex:'',
            width:'200'
        },{
            title:'名称',
            dataIndex:''
        },{
            title:'类型',
            dataIndex:''
        },{
            title:'取值',
            dataIndex:''
        }]

        return (
            <div className="table-container">
                <Table columns={colums}/>
            </div>
        )
    }
}

export default PFunc;
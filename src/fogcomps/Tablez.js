import React from 'react';
import Table from 'antd/lib/table';

class Tablez extends React.Component {
    render(){
        const { rowSelection,columns,dataSource,pagination } = this.props;
        return(
            <Table 
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={dataSource} 
                pagination={pagination} 
            />
        )
    }
}

export default Tablez;
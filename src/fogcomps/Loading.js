import React from 'react';
import Spin from 'antd/lib/spin';


class Loading extends React.Component {
    render(){
        return (
           <Spin size="large" className="loading-container" tip="加载中..."/>
        )
    }
}

export default Loading;
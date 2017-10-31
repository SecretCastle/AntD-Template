import React from 'react';
import Layout from 'antd/lib/layout';
const { Content } = Layout;

class Ability extends React.Component {
    render(){
        return(
            <Layout>
                <Content className="app-inner-out-container"> 
                    <div>ability</div>
                </Content>
            </Layout>
        )
    }
}

export default Ability;
import React from 'react';
import Layout from 'antd/lib/layout';
const { Content } = Layout
class Product extends React.Component {
    render(){
        return (
            <Layout>
                <Content className="app-inner-out-container">
                    Product
                </Content>
            </Layout>
        )
    }
}

export default Product;
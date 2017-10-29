import React from 'react';
import Layout from 'antd/lib/layout';
import { Route } from 'react-router-dom';
import ProductList from './components/productlist';
const { Content } = Layout;


class Product extends React.Component {
    render(){
       const {match} = this.props;
        return (
            <Layout>
                <Content className="app-inner-out-container">
                    <Route exact path={`${match.url}`} component={ProductList}/>
                </Content>
            </Layout>
        )
    }
}

export default Product;
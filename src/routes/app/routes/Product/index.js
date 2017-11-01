import React from 'react';
import Layout from 'antd/lib/layout';
import { Route , Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import ProductList from './components/productlist';
import PDetail from './components/pdetail';

const { Content } = Layout;
class Product extends React.Component {
    render(){
        const {match} = this.props;
        return (
            <Content className="app-inner-out-container"> 
                <Route exact path={`${match.url}`} component={ProductList}/>
                <Route path={`${match.url}/pconfig/:id`} component={PDetail}/>
                <Route path={`${match.url}/ota/:id`} component={PDetail}/>
            </Content>
        )
    }
}

export default Product;
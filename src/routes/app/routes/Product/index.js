import React from 'react';
import Layout from 'antd/lib/layout';
import { Route , Switch} from 'react-router-dom';
import ProductList from './components/productlist';
import PDetail from './components/pdetail';
import { connect } from 'react-redux';
import ClassNames from 'classnames';


const { Content } = Layout;


class Product extends React.Component {
    componentWillMount(){

    }

    componentWillUnmount(){
        
    }
    render(){
        const {match} = this.props;
        return (
            <Content className="app-inner-out-container"> 
                <Route exact path={`${match.url}`} component={ProductList}/>
                <Route exact path={`${match.url}/pconfig/:id`} component={PDetail}/>
                <Route exact path={`${match.url}/ota/:id`} component={PDetail}/>
            </Content>
        )
    }
}

export default Product;
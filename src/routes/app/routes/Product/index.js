import React from 'react';
import Layout from 'antd/lib/layout';
import { Route , Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import loadable from 'react-loadable';
import Loading from 'fogcomp/Loading';
const { Content } = Layout;

const AsynProductDetail = loadable({
    loader: () => import('./components/pdetail'),
    loading: () => (
        <Loading />
    )
})

const AsynProductList = loadable({
    loader: () => import ('./components/productlist'),
    loading: () => <Loading />
})

class Product extends React.Component {
    render(){
        const {match} = this.props;
        return (
            <Content className="app-inner-out-container"> 
                <Route exact path={`${match.url}`} component={AsynProductList}/>
                <Route path={`${match.url}/pconfig/:id`} component={AsynProductDetail}/>
                <Route path={`${match.url}/ota/:id`} component={AsynProductDetail}/>
            </Content>
        )
    }
}

export default Product;
import React from 'react';
import Layout from 'antd/lib/layout';
import { Route , Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import loadable from 'react-loadable';
import Loading from 'fogcomp/Loading';
const { Content } = Layout;
import {getParamId} from 'reduxSrc/actions/getParamId';

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
                <Route path={`/app/product/detail/:name/:id`} component={AsynProductDetail}/>
            </Content>
        )
    }
    componentWillUnmount(){
        const { dispatch } = this.props;
        dispatch(getParamId({
            hasid: false,
            id: ''
        }))
    }
}

export default connect()(Product);
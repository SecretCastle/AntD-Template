import React from 'react';
import Layout from 'antd/lib/layout';
import { connect } from 'react-redux';
import { ShowHideMenu } from 'reduxSrc/actions/menu/menu';
import {Route} from 'react-router-dom';
import loadable from 'react-loadable';
import Loading from 'fogcomp/Loading';
const { Content } = Layout;

const AsynPFunc = loadable({
    loader: () => import('./components/pfunc'),
    loading: () =>  (<Loading />)
})

const AsynPHardwarre = loadable({
    loader: () => import('./components/phardware'),
    loading: () => (<Loading />)
})

const AsynPConfig = loadable({
    loader: () => import('./components/pconfig'),
    loading: () => (<Loading />)
})

class PDetail extends React.Component{
    render() {
        const {match} = this.props;
        return(
            <div>
                <Route exact path={`${match.url}`} component={AsynPConfig}/>
                <Route  path={`${match.url}/pfunc`} component={AsynPFunc}/>   
                <Route  path={`${match.url}/hardware`} component={AsynPHardwarre}/>     
            </div>
        )
    }
}

export default connect()(PDetail);
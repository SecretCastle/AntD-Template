import React from 'react';
import Layout from 'antd/lib/layout';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import loadable from 'react-loadable';
import Loading from 'fogcomp/Loading';
const { Content } = Layout;
import {getParamId} from 'reduxSrc/actions/getParamId';

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
        return(
            <div>
                <Route path={`/app/product/detail/pconfig/:id`} component={AsynPConfig}/>
                <Route path={`/app/product/detail/pfunc/:id`} component={AsynPFunc}/>   
                <Route path={`/app/product/detail/hardware/:id`} component={AsynPHardwarre}/>     
            </div>
        )
    }

    componentDidMount(){
        const {match, location, dispatch} = this.props;
        if(match.params.id){
            dispatch(
                getParamId(
                    {
                        hasid: true, 
                        id:'11111111111111111111'
                    }
                )
            )
        }
    }
}


export default connect()(PDetail);
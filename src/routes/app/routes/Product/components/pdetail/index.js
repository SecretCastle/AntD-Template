import React from 'react';
import Layout from 'antd/lib/layout';
import { connect } from 'react-redux';
import { ShowHideMenu } from 'reduxSrc/actions/menu/menu';
import {Route} from 'react-router-dom';
import PConfig from './components/pconfig';

const { Content } = Layout;


class PDetail extends React.Component{
    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(ShowHideMenu({isShow:true}))
    }
    componentWillUnmount(){
        const { dispatch } = this.props;
        dispatch(ShowHideMenu({isShow:false}))
    }
    render() {
        const {match} = this.props;
        return(
            <div>
                <Route exact path={`${match.url}`} component={PConfig}/>
                <Route exact path={`${match.url}/pfunc`} component={PConfig}/>
                <Route exact path={`${match.url}/hardware`} component={PConfig}/>
                <Route exact path={`${match.url}/pmessage`} component={PConfig}/>
                <Route exact path={`${match.url}/pmodule`} component={PConfig}/>
                <Route exact path={`${match.url}/upgrade`} component={PConfig}/>
                <Route exact path={`${match.url}/version`} component={PConfig}/>            
            </div>
        )
    }
}

export default connect()(PDetail);
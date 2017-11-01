import React from 'react';
import Layout from 'antd/lib/layout';
import { connect } from 'react-redux';
import { ShowHideMenu } from 'reduxSrc/actions/menu/menu';
import {Route} from 'react-router-dom';
import PConfig from './components/pconfig';
import PFunc from './components/pfunc';

const { Content } = Layout;


class PDetail extends React.Component{
    render() {
        const {match} = this.props;
        return(
            <div>
                <Route exact path={`${match.url}`} component={PConfig}/>
                <Route  path={`${match.url}/pfunc`} component={PFunc}/>
                <Route  path={`${match.url}/hardware`} component={PConfig}/>
                <Route  path={`${match.url}/pmessage`} component={PConfig}/>
                <Route  path={`${match.url}/pmodule`} component={PConfig}/>
                <Route  path={`${match.url}/upgrade`} component={PConfig}/>
                <Route  path={`${match.url}/version`} component={PConfig}/>            
            </div>
        )
    }
}

export default connect()(PDetail);
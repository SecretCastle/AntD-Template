import React from 'react';
import { Route, withRouter, Redirect, Link, Switch} from 'react-router-dom';
//css
import 'antd/dist/antd.less';
import '../styles/fogcloud/base.less';

//components
import MainApp from 'routes/app'
import NoMatch from 'routes/404'

class App extends React.Component {
  render(){
    const { match , location } = this.props;

    const isRoot = location.pathname === '/' ? true:false;
    if(isRoot){
      return (<Redirect to={'/app'}/> );
    }

    return (
      <div className="MultiContainerWrap">
        <div className="app-inner app-container">
          <Switch>
            <Route path={`${match.url}app`} component={MainApp} />
            <Route exact component={NoMatch}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App);
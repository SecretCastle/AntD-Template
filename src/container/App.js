import React from 'react';
import { Route, withRouter, Redirect, Link } from 'react-router-dom';
//css
import '../styles/fogcloud/base'


//components
import MainApp from 'routes/app'

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
          <Route path={`${match.url}app`} component={MainApp} />
        </div>
      </div>
    )
  }
}

export default withRouter(App);
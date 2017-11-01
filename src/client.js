import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import loadable from 'react-loadable';
import reducers from './redux/reducers';
import Loading from 'fogcomp/Loading';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(middleware))
)

//异步的
const AsynApp = loadable({
  loader: () => import('./container/App'),
  loading: () => (<Loading />)
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={AsynApp} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('v3app')
)
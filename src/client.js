import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

import App  from './container/App';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(middleware))
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('v3app')
)
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';

// React router and redux
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// React router and redux development Tools
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// Import Pages
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

// Redux reducers
import User from './reducers/user';
const reducer = combineReducers({
  routing: routerReducer,
  user: User,
});

// Creates Redux Development Tools
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={ false }>
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

// Create Redux Store with our defined reducers
const store = createStore(
  reducer,
  DevTools.instrument(),
)

// Sync Redux Router with Browser History
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <Router history={ history }>
        <Route path="/" component={ Layout } >
          <IndexRoute component={Home} />
          <Route path="dashboard" component={ Dashboard } />
          <Route path="login" component={ Login } />
        </Route>
        <Route path="*" component={ PageNotFound } />
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer.js';

import Home from './components/Home';
import Feed from './components/Feed';

import './App.css';

const store = createStore(reducer);

function App() {
  
  return (
    <Provider store={store}>
      <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/feed">
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
      
  );
}

export default App;

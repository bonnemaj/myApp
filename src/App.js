import React from 'react';

import Index from './components/Index';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import './indexStylesheet.css';
import './BestelLocatie.css'

import { configureStore } from './store/configureStore';
const store = configureStore();


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact={false} path='/' component={Index} />
        </Router>
      </Provider>
    );
  }
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import Login from './pages/Login';
import ImageList from './pages/ImageList';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={Login} />
        <Route path="/ImageList" component={ImageList} />
      </NativeRouter>
    </Provider>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouting from './containers/AppRouting';

import configureStore from './store/configureStore';
const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (module.hot) module.hot.accept();
serviceWorker.unregister();

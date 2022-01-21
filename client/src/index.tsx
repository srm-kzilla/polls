import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxStateProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reduxStore from './store/store';

ReactDOM.render(
  <BrowserRouter>
    <ReduxStateProvider store={reduxStore}>
      <App />
    </ReduxStateProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

const disableConsole = () => {
  console.log = () => {};
  console.error = () => {};
};

disableConsole();

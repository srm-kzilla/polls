import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StateProvider} from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <StateProvider store={store}>
    <App />
 </StateProvider>
 </BrowserRouter> ,
  document.getElementById('root')
);


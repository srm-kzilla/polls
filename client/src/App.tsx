import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HompePage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/polls" component={HomePage} />
        <Route exact path="/admin/:id" component={AdminPage} />
        <Route exact path="/user/:id" component={UserPage} />
      </Switch>
      <ToastContainer> </ToastContainer>
    </>
  );
}

export default App;

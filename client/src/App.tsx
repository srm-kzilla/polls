import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HompePage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/LandingPage';
import Error from './pages/ErrorPage';
import Expired from './pages/ExpiredPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/new" component={HomePage} />
        <Route exact path="/results/:id" component={AdminPage} />
        <Route exact path="/user/:id" component={UserPage} />
        <Route exact path="/error" component={Expired}></Route>
        <Route component={Error}></Route>
      </Switch>
      <ToastContainer> </ToastContainer>
    </>
  );
}

export default App;

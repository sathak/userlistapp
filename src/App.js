import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import SignupPage from './components/templates/signupPage';
import EditPage from './components/templates/editPage';
import userlist from './components/templates/userlist';
import TopNavigationBar from './components/templates/TopNavigationbar';

function App (){
  
    return (
      <BrowserRouter >
        <div>
          <div>
            <TopNavigationBar />
          </div>
          <div>
            <Route exact path="/" render={() => (
              <Redirect to="/userlist" />
            )} />
            <Route path="/userlist" component={userlist} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/edit/:userId" render={(props) => (
              <EditPage  {...props} />
            )} />
          </div>
        </div>
      </BrowserRouter>
    );
  
}

export default App;

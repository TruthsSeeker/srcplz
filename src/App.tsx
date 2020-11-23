import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './styles/colors.css'
import { AuthContext } from './utils/context';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const login = () => {
    setLoggedIn(true)
  }
  const logout = () => {
    setLoggedIn(false)
  }
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{isLoggedIn: loggedIn, login: login, logout: logout}}>
        <div className="Background-Gradient">
          <Navbar/>
          <Sidebar/>
          <Switch>
            <Route exact path="/mission">
              <Mission/>
            </Route>
            <Route path="/blog">
              Blog
            </Route>
            <Route exact path="/contact">
              Contact Us
            </Route>
          </Switch>
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;

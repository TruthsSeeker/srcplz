import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
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
    <AuthContext.Provider value={{isLoggedIn: loggedIn, login: login, logout: logout}}>
    <Navbar/>
    <div className="Background-Gradient">
    </div>
    </AuthContext.Provider>
  );
}

export default App;

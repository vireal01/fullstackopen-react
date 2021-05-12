import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/profile';

const App = () => {
  return (
    <div className="appWripper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}


export { App };

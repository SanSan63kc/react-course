import React, {Component} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App =()=>{
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <ProfilePage/>      
    </div>);
}

export default App;

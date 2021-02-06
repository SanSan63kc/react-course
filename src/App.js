import React, {Component} from 'react'
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FrendsContainer from './components/Frends/FrendsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Settings from './components/Settings/Settings';

const App=(props)=>{

  return (
    <BrowserRouter>
      <div className="main__page__content">
        <Header/>
        <Navbar/>
        <div className="profile__page__content">
          
          <Route path="/profile" 
            render={()=><ProfilePage />}/>
          
          <Route path="/dialogs" 
            render={()=><DialogsContainer  />}/>

          <Route path="/frends" 
            render={()=><FrendsContainer/>}/>
          
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>   
      </div>
    </BrowserRouter>);
}

export default App;

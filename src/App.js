import React from 'react';
import './App.css';
import Header from './Component/Header'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import TinderCards from './Component/TinderCards'
import SwipeButtons from './Component/SwipeButtons'
import Chats from './Component/Chats'
import ChatScreen from './Component/ChatScreen'
function App() {
  return (
    <div className="App">
      <Router>
    {/* Header */}
    
    <Switch>
    
    {/*Tinder Cards */}
    <Route path='/' exact={true}>
    <Header/>
      < TinderCards/>
       <SwipeButtons/>
     </Route>
    
    {/*Buttons below tinder cards */}
    <Route path='/chat' exact={true}>
    <Header backButton="/"/>
    <Chats/>
     </Route>
    {/*Chats screen */}
    <Route path='/chat/:person'>
    <Header backButton="/chat"/>
    <ChatScreen/>
     </Route>
    {/* Individual chat screen*/}
     <Route path='/chat'>

     </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;

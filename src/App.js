import React from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Dashboard from './components/Dashboard/Dashboard'
import Demo from './components/Demo/Demo'
import Footer from './components/Footer/Footer'
import Window from './components/Window/Window'
import './App.css'


export default class App extends React.Component {
  render() {
    return (
      <div className = "main">
        <Toolbar/>
        <Dashboard />
        <Window />
        <Demo />
        <Footer/>

      </div>
    );
  }
}
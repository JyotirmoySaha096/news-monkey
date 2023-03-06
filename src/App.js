import React , { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import News from './component/News';

export default class App extends Component {
  //  c = "John";
  render(){
    return (
      <div>
        <NavBar />
        <News pageSize={9} country="in" category="general"/>
      </div>
    )
  }
}
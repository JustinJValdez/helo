import React, { Component } from 'react';
import './App.css';
import Auth from "./Component/Auth/Auth";
import Dashboard from "./Component/Dashboard/Dashboard";
import Form from "./Component/Form/Form";
import Post from "./Component/Post/Post";
import Nav from "./Component/Nav/Nav";


class App extends Component {
  render() {
    return (
      <div className="App">
       <Auth/>
       <Dashboard/>
       <Form/>
       <Post/>
       <Nav/>


      </div>
    );
  }
}

export default App;

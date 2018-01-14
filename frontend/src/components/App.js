import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as ReadableAPI from '../utils/ReadableAPI'
import Navigation from './Navigation.js';

class App extends Component {

  componentDidMount() {
    ReadableAPI.getCategories().then((categories) => {
      document.querySelector('.main').innerHTML += JSON.stringify(categories);
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Route exact path="/" render={() => (
          <div className="container main">
            stuff
          </div>
        )}/>
        <Route path="/create" render={({history}) => (
          <div className="container main">
            create
          </div>
        )}/>
      </div>
    );
  }
}

export default App;

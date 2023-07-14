import './App.css';
import React, { Component } from 'react'
import Header from './components/HeaderComponent';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from './components/HomeComponent';
import ListToDoComponent from './components/ListToDoComponent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Switch>
            <Route path='/' component={home} />
            <Route path='/todo' component={ListToDoComponent} />
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

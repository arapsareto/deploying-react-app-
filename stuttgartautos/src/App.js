
import React from 'react';
import './App.css';
import About from './About';
import Completed from './Completed';
import Review from './Review';
import Book from './Book';
import { NavBar } from './Nav';
import {pic1} from './image/benz.jpg'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Route  path='/about' exact component={About}/>
      <Route  path='/completed' exact component={Completed}/>
      <Route  path='/book' exact component={Book}/>
      <Route  path='/review' exact component={Review}/>

      

      
      </BrowserRouter>
      {/* <NavBar />
      <About />
      <Completed />
      <Book /> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navigation />
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/about" component={About}/>
           <Route path="/post" component={Post}/>
           <Route path="/contact" component={Contact}/>
           
        </Switch>
      <Footer />
    </Router> 
    
    </>
  );
}




export default App;

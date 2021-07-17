
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/About';
import Post from './pages/Post';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route>
          <About path="/about"/>
        </Route>
        <Route>
          <Post path="/post"/>
        </Route>
        <Route>
          <Contact path="/contact"/>
        </Route>
      </Switch>
    </Router> 
    <Main />
    <Footer />
    </>
  );
}




export default App;

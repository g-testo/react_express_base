import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import { ContactPage } from './ContactPage';
import { IndexPage } from './IndexPage';
import { AboutPage } from './AboutPage';

export const App = () => (
  <div>

    <div className="navContainer">
      <ul className="navList">
        <div className="floatLeft">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
        </div>
        <div className="floatRight">
          <li><Link to="/">Login</Link></li>
        </div>
      </ul>
    </div>

    <Route exact path="/" component={IndexPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route path="/about" component={AboutPage}/>
  </div>
)
export default App;

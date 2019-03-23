import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Mynavbar from './Components/Navbar';
import Carrousel from './Components/Carrousel';
import Articles from './Components/Articles';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Mynavbar />
        <br>
        </br>
        <br>
        </br>
        <center>
        <Carrousel />
        </center>
        <br>
        </br>

        <Articles />
  
      <Articles />

      <br>
      </br>
<footer>

  
</footer>
      </div>
    );
  }
}

export default App;

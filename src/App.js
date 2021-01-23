import React from 'react';
import './App.css';

//componentes
import Links from './components/Links';

//notificaiones
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//boostrap
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';


function App() {


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><h3>Fernando <span className="text-primary">Ramirez</span></h3><small className="text-primary ml-3">Front end developer</small></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="mr-5" href="https://fjdeveloperservice.com/" target="_blank">Portfolio</Nav.Link>
      <Nav.Link className="mr-5"  href="https://github.com/ferjavi40" target="_blank">Github repository</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    <div className="container  p-4">

      <div className="row">
      <Links/>
      
      </div>
      <ToastContainer/>
    </div>
    </div>
  );
}

export default App;

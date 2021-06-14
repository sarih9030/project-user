import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';
  import { Navbar,
    Nav} from 'react-bootstrap';
    import ShowDetails from './showDetails';
    import SignUp from './signup';
import ListUsers from './listUsers'

 export default function TopNav(props) {
    return (
        <Router>
        <div>
          <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">first level</Link></Nav.Link>
        <Nav.Link><Link to="/showDetails">second level</Link></Nav.Link>
        <Nav.Link><Link to="/listUsers">third level</Link></Nav.Link>
      </Nav>
    </Navbar>
            <Switch>
  
           
  
              <Route path='/showDetails'>
                <ShowDetails />
              </Route>
  
              <Route path='/listUsers'>
                <ListUsers />
              </Route>
              <Route exact path='/'>
                <SignUp />
              </Route>
  
            </Switch>
            </div>
          </Router>
    );
}


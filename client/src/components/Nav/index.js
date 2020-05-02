/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  App SCSS  */
import "../../styles/App.scss";

/*  React Bootstrap Components  */
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

/*  Create Nav */
class Nav extends Component {
  render() {
    return (
      <div className="container">
        <Navbar bg="info">
          <Navbar.Brand ><h1 className="text-white display-3">Unlock It!</h1>
          </Navbar.Brand>
          <Form className="inline ml-auto">
            <span className="text-white"><Link to="/"><h6>Logout&emsp;</h6></Link></span>
          </Form>
        </Navbar>
      </div>
    );
  }
}

/*  Export Nav */
export default Nav;
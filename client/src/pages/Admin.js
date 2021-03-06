/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";
import AdminComponents from '../components/AdminTab';

/*  Create Admin  */
class Admin extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">ADMIN DASHBOARD</h1>
        <AdminComponents/>
        <h5 className="text-info text-center">
      <Link to="/"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );

  }
}

/*  Export Admin  */
export default Admin;
/*  React  */
import React from "react";

/*  Create Admin  */
function Admin() {
  return (
    <div className="container">
      <br />
      <h1 className="text-center text-secondary">ADMIN DASHBOARD</h1>
      <h4 className="text-secondary">
        NAVIGATION
      <ul>
          <li>Logout</li>
        </ul>
      </h4>
      <h4 className="text-info">
        TABBED OPTIONS
        <ul>
          <li>Add/Edit Org</li>
          <li>Add/Edit a Teacher</li>
          <li>Add/Edit a Student</li>
        </ul>
      </h4>
      <h3 className="text-center"><a href={"/"}>/Unlock It Home</a></h3>
      <br />
    </div>
  );
}

/*  Export Admin  */
export default Admin;
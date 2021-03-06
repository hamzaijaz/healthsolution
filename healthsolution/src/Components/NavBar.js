import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="./AddPatient">Add Patient</Link>
      <Link to="./ViewPatients">View Patients</Link>
      <Link to="./Contact">Contact</Link>
    </div>
  );
}
export default NavBar;

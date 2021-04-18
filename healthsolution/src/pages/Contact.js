import React from "react";
import ".././App.css";
import ".././bootstrap.min.css";

function Contact() {
  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
        <div className="custom-background">
          <h1>Our Contact</h1>
          <p>Our contact details are as follows</p>
          </div>
        </div>
      </div>

      <div className="mydiv">
          <h1>Address</h1>
          <p>Johnston Street, Abbotsford</p>
          <p>(03) 123 456 789</p>
        
      </div>
    </div>
  );
}

export default Contact;

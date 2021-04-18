import React from "react";

function Home() {
  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
        <div className="custom-background">
          <h1>Welcome to My Health Solutions</h1>
          <p>You can keep record of patients here</p>
          </div>
        </div>
      </div>

      <div className="mydiv">
        <p>You can add a new patient by going to 'Add Patient' from navigation bar</p>
        <p>If you want to view all the patients, click on 'View Patients' in navigation bar</p>
        <p>Click 'Contact' to see our contact details</p>
      </div>

      {/* <Footer/>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </div>
  );
}
export default Home;

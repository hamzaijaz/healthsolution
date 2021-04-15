import React, { useState } from "react";
import ".././bootstrap.min.css";
import authorisedClient from "../common/authorised-axios";

function AddPatient() {
  const [submitted, setSubmitted] = useState(false);

  const onAddPatientSubmit = async values => {
    async function submitt(values) {
      var response = await authorisedClient.post(
        "createpatient?code=hnChhxjHX89V4OvaTvJLzwlZ9z58dWJpZjBjvUUQ1ucUFhjXcoTkQQ==",
        {
          FirstName: values.target.elements.firstName.value,
          LastName: values.target.elements.lastName.value,
          DateOfBirth: values.target.elements.dateOfBirth.value,
          Gender: values.target.elements.gender.value,
          StreetAddress: values.target.elements.streetAddress.value,
          Suburb: values.target.elements.suburb.value,
          Postcode: values.target.elements.postcode.value,
          HealthCoverType: values.target.elements.healthCoverType.value,
          PolicyNumber: values.target.elements.policyNumber.value
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(true);
        }, 5000);
      }
    }
    await submitt(values);
  };

  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
          <h1>Add Patient</h1>
          <p>You can add new patients on this page</p>
        </div>
      </div>

      <div className="mydiv">
        <form onSubmit={onAddPatientSubmit}>
          <h2>Personal Details</h2>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="e.g. John"
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="e.g. Snow"
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>{" "}
            <input
              className="form-control"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              min="1753-06-01"
              max="9999-06-30"
              required
            />
          </div>

          <div className="form-group">
            <label>Gender: </label>{" "}
            <select name="gender" id="gender" required>
              <option value="choose">Choose</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Street Address</label>
            <input
              type="text"
              className="form-control"
              id="streetAddress"
              placeholder="e.g. 300 Collins St"
              required
            />
          </div>

          <div className="form-group">
            <label>Suburb</label>
            <input
              type="text"
              className="form-control"
              id="suburb"
              placeholder="e.g. Richmond"
              required
            />
          </div>

          <div className="form-group">
            <label>Postcode</label>
            <input
              type="text"
              className="form-control"
              id="postcode"
              placeholder="e.g. 3000"
              required
            />
          </div>

          <h2>Health Cover Details</h2>
          <div className="form-group">
            <label>Health Cover Type: </label>{" "}
            <select name="healthCoverType" id="healthCoverType" required>
              <option value="choose">Choose</option>
              <option value="medicare">Medicare</option>
              <option value="bupa">Bupa</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Policy Number</label>
            <input
              type="text"
              className="form-control"
              id="policyNumber"
              required
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Confirm patient</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Patient
          </button>
          {submitted && <span className="ml-2">submitted!</span>}
        </form>
      </div>
    </div>
  );
}
export default AddPatient;

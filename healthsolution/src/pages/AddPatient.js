import React, { useState } from "react";
import ".././bootstrap.min.css";
import authorisedClient from "../common/authorised-axios";
import Button from "react-bootstrap/Button";

function AddPatient() {
    const [submitted, setSubmitted] = useState(false);

    const submit = async (values) => {
        //to prevent refresh on submitting
        values.preventDefault();

        async function submittt(values) {
            var response = await authorisedClient.post(
                "patients",
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
            debugger
        }
        await submittt(values);
    }

    const onAddPatientSubmit = async (values, e) => {
        debugger
        alert('it works!');
        e.preventDefault();

        async function submitt(values) {
            // try{
            // debugger
            // var res = await authorisedClient.get(
            //   `/patients/baf5ff7c-567d-4c3b-b8e9-634e2f08a6fb`,
            //   {
            //     PatientKey: "baf5ff7c-567d-4c3b-b8e9-634e2f08a6fb"
            //   }
            // );
            // debugger
            // }

            // catch(e)
            // {
            //   debugger
            // }

            try {
                var response = await authorisedClient.post(
                    "patients",
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
                alert('it works!');
                e.preventDefault();

                if (response.status === 200) {
                    setSubmitted(true);
                    setTimeout(() => {
                        setSubmitted(true);
                    }, 6000);
                }
            }

            // debugger
            // if (response.status === 200) {
            //   setSubmitted(true);
            //   setTimeout(() => {
            //     setSubmitted(true);
            //   }, 5000);
            // }
            // }

            catch (e) {
                //debugger
            }
        };
        await submitt(values);
    }


    return (
        <div className="container-fluid myheader">
            <div className="row">
                <div className="jumbotron col-10 offset-1 digitalcentre">
                    <div className="custom-background">
                        <h1>Add Patient</h1>
                        <p>You can add new patients on this page</p>
                    </div>
                </div>
            </div>

            <div className="mydiv">
                <form onSubmit={submit}>
                    <h2>Personal Details</h2>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="e.g. John"
                        // required
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="e.g. Snow"
                        // required
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
                        // required
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender: </label>{" "}
                        <select name="gender" id="gender"
                        // required
                        >
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
                        // required
                        />
                    </div>

                    <div className="form-group">
                        <label>Suburb</label>
                        <input
                            type="text"
                            className="form-control"
                            id="suburb"
                            placeholder="e.g. Richmond"
                        // required
                        />
                    </div>

                    <div className="form-group">
                        <label>Postcode</label>
                        <input
                            type="text"
                            className="form-control"
                            id="postcode"
                            placeholder="e.g. 3000"
                        // required
                        />
                    </div>

                    <h2>Health Cover Details</h2>
                    <div className="form-group">
                        <label>Health Cover Type: </label>{" "}
                        <select name="healthCoverType" id="healthCoverType"
                        // required
                        >
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
                        // required
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

                    {/* <input type="button" className="btn btn-primary" onClick={onAddPatientSubmit}/> */}
                    <Button type="submit" className="mt-2">
                        Submit
            </Button>

                    {submitted && <span className="ml-2">submitted!</span>}
                </form>
            </div>
        </div>
    );
}
export default AddPatient;

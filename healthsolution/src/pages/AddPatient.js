import React, { useState } from "react";
import ".././bootstrap.min.css";
import authorisedClient from "../common/authorised-axios";
import Button from "react-bootstrap/Button";
import ReCAPTCHA from "react-google-recaptcha";

function AddPatient() {
    const [displaytext, setDisplayText] = useState("");
    const [captchaIncrementKey, setCaptchaIncrementKey] = useState(1) //HACK: to reset captcha
    const [captchaResponse, setCaptchaResponse] = useState("")

    const onChangeCaptcha = value => {
        setCaptchaResponse(value)
    }

    const submit = async (values) => {
        //to prevent refresh on submitting
        values.preventDefault();

        async function submitRequest(values) {
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
                        PolicyNumber: values.target.elements.policyNumber.value,
                        RecaptchaResponse: captchaResponse
                    }
                );

                if (response.status === 201) {
                    setDisplayText("Patient was Successfully Added!")
                    setCaptchaIncrementKey(captchaIncrementKey + 1)
                }
            }
            catch (e) {
                setCaptchaIncrementKey(captchaIncrementKey + 1)

                if (e.response && e.response.data && e.response.data.detail === "reCAPTCHA verification failed.") {
                    setDisplayText("Captcha verification failed. Please verify captcha and submit again")
                }

                else
                    setDisplayText("There was a problem with the submission!");
            }
        }
        await submitRequest(values);
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

            <div className="mydiv w-50 offset-3">
                <form onSubmit={submit}>
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
                        <select name="gender" id="gender"
                            required
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
                        <select name="healthCoverType" id="healthCoverType"
                            required
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
                            required
                        />
                    </div>

                    {/* intentionally skipped client side validation of captcha to show error coming back from response */}
                    <ReCAPTCHA
                        sitekey="6Ldpmq4aAAAAAPCOUMcu8gtt-ucLn3euX0J8irMP"
                        key={captchaIncrementKey}
                        onChange={onChangeCaptcha}
                    />

                    <Button type="submit" className="mt-2">
                        Submit
                    </Button>

                    <span className="ml-3">{displaytext}</span>
                </form>
            </div>
        </div>
    );
}
export default AddPatient;

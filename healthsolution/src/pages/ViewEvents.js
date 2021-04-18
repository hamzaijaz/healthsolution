import React, { useState, useEffect } from "react";
import Patient from "../Components/Patient";
import authorisedClient from "../common/authorised-axios";

export const ViewEvents = () => {
  const [res, setRes] = useState([]);
  const [noPatients, setNoPatients] = useState(false)

  useEffect(() => {
    async function getEvents() {
      let response = await authorisedClient.get(
        `patients`
      );
      setRes(response);

      if (response.data.length === 0)
      {
        setNoPatients(true)
      }
    }
    getEvents();
  }, []);

  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
        <div className="custom-background">
          <h1>Stored Patients</h1>
          <p>Following is the list of patients</p>
          </div>
        </div>
      </div>
      {res.data && (
        <ul className="nobullets">
          {res.data.map(item => (
            <li key={item.patientKey} style={{ cursor: "pointer" }}>
              <Patient
                FirstName={item.firstName}
                LastName={item.lastName}
                DateOfBirth={item.dateOfBirth}
                Gender={item.gender}
                StreetAddress={item.streetAddress}
                Suburb={item.suburb}
                Postcode={item.postcode}
                HealthCoverType={item.healthCoverType}
                PolicyNumber={item.policyNumber}
              ></Patient>
            </li>
          ))}
        </ul>
      )}
      {noPatients && (
        <div className="mydiv">
          <p>Currently there are no patients stored</p>
        </div>
      )}
    </div>
  );
};
export default ViewEvents;

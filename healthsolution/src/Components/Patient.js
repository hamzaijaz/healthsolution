import React, { useState } from "react";
import PatientModal from "./PatientModal";

export const Patient = ({
  FirstName,
  LastName,
  DateOfBirth,
  Gender,
  StreetAddress,
  Suburb,
  Postcode,
  HealthCoverType,
  PolicyNumber
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false); };
  const handleShow =  () => { setShow(true); }

  return (
    <>
      <PatientModal
        show={show}
        handleClose={handleClose}
        FirstName={FirstName}
        LastName={LastName}
        DateOfBirth={DateOfBirth}
        Gender={Gender}
        StreetAddress={StreetAddress}
        Suburb={Suburb}
        Postcode={Postcode}
        HealthCoverType={HealthCoverType}
        PolicyNumber={PolicyNumber}
      />

      <div className="patient w-50 offset-3">
        <div onClick={handleShow}>
          <h2>{FirstName} {LastName}</h2>
          <div className="row">
            <span className="col-7"><b>Date of Birth:</b> {DateOfBirth}</span>
            <span className="col-7">click to get details</span>
            </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};
export default Patient;

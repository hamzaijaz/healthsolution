import React, { useState } from "react";
import EventModal from "./EventModal";
import Button from "react-bootstrap/Button";
import authorisedClient from "../common/authorised-axios";

export const Event = ({
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
  const handleClose = () => {
    setShow(false);
    //window.location.reload(false);
  };
  const handleShow = () => setShow(true);

  // const deleteClicked = async () => {
  //   async function deleteEvent() {
  //     await authorisedClient.post(
  //       `deleteevent/${eventIdentity}?code=hnChhxjHX89V4OvaTvJLzwlZ9z58dWJpZjBjvUUQ1ucUFhjXcoTkQQ==`
  //     );
  //   }
  //   // <Dialog>Are you sure?</Dialog>;
  //   const r = window.confirm("Do you really want to delete this event?");
  //   if (r === true) {
  //     await deleteEvent();

  //     setTimeout(function() {
  //       window.location.reload(false);
  //     }, 1000);
  //   }
  // };

  return (
    <>
      <EventModal
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

      <div className="patient">
        <div onClick={handleShow}>
          <h2>{FirstName} {LastName}</h2>
          <div className="row">
            <span className="col-7"><b>Date of Birth:</b> {DateOfBirth}</span>
            <span className="col-7"><b>Gender:</b> {Gender}</span>
            <span className="col-7"><b>Street Address:</b> {StreetAddress}</span>
            <span className="col-7"><b>Suburb:</b> {Suburb}</span>
            <span className="col-7"><b>Post code:</b> {Postcode}</span>
            <span className="col-7"><b>Health Cover Type:</b> {HealthCoverType}</span>
            <span className="col-7"><b>Gender:</b> {Gender}</span>
            <span className="col-7"><b>Policy Number:</b> {PolicyNumber}</span>
          </div>
        </div>
        <div>
          {/* {LastName && (
            <Button className="mt-2">
              Delete
            </Button>
          )} */}
        </div>
      </div>
    </>
  );
};
export default Event;

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const PatientModal = ({
  show,
  handleClose,
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

  return (
    <Modal className="mt-5"
      show={show}
      onHide={handleClose}
      dialogClassName="modal-50w"
      style={{ width: "100%", height: "500px" }}
    >
      <Modal.Header>
        <div className="flex flex-justify flex-fill">
            <p className=""><b>First Name:</b> {FirstName}</p>
            <p className=""><b>Last Name:</b> {LastName}</p>
            <p className=""><b>Date of Birth:</b> {DateOfBirth}</p>
            <p className=""><b>Gender:</b> {Gender}</p>
            <p className=""><b>Health Cover Type:</b> {HealthCoverType}</p>
            <p className=""><b>Policy Number:</b> {PolicyNumber}</p>
            <p className=""><b>Street Address:</b> {StreetAddress}</p>
            <p className=""><b>Suburb:</b> {Suburb}</p>
            <p className=""><b>Post code:</b> {Postcode}</p> 

          <Button
            className="patient-modal-close-button mb-sm-0 mb-3 btn btn-secondary"
            type="button"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </Modal.Header>
    </Modal>
  );
};
export default PatientModal;

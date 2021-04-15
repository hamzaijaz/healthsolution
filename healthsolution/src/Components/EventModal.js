import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import authorisedClient from "../common/authorised-axios";

export const EventModal = ({
  show,
  handleClose,
  title,
  description,
  eventIdentity,
  rsvp,
  eventType,
  eventDate,
  eventCost
}) => {
  //const [rsvpClicked, setRsvpClicked] = useState(false);

  const doRsvp = () => {
    async function Rsvp() {
      await authorisedClient.post(
        `rsvp/${eventIdentity}?code=hnChhxjHX89V4OvaTvJLzwlZ9z58dWJpZjBjvUUQ1ucUFhjXcoTkQQ==`
      );
    }
    Rsvp();
    //setRsvpClicked(true);
    //window.location.reload(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-90w"
      style={{ width: "100%", height: "500px" }}
    >
      <Modal.Header>
        <div className="flex flex-justify flex-fill">
          <h1 className="text-center">{title}</h1>
          <p>Description: {description}</p>
          <p>RSVPs: {rsvp}</p>
          <p>Type: {eventType}</p>
          <p>Date: {eventDate}</p>
          <p>Cost: ${eventCost}</p>

          <Button
            className="event-modal-button"
            variant="secondary"
            onClick={doRsvp}
          >
            RSVP
          </Button>

          <Button
            className="event-modal-button"
            type="button"
            variant="secondary"
            className="mb-sm-0 mb-3 btn btn-secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </Modal.Header>
      {/* <Modal.Body className="pt-0">
        <iframe
          title="Offer Document Modal Content"
          src=""
          style={{ width: "100%", height: "300px" }}
        />
      </Modal.Body> */}
    </Modal>
  );
};
export default EventModal;

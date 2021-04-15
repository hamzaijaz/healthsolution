import React, { useState, useEffect } from "react";
import Event from "../Components/Event";
import authorisedClient from "../common/authorised-axios";

export const ViewEvents = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    async function getEvents() {
      let response = await authorisedClient.get(
        `getallevents?code=hnChhxjHX89V4OvaTvJLzwlZ9z58dWJpZjBjvUUQ1ucUFhjXcoTkQQ==`
      );
      setRes(response);
      //console.log(response);
    }
    getEvents();
  }, []);

  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
          <h1>Current Events</h1>
          <p>Following is the list of current events</p>
        </div>
      </div>
      {res.data && (
        <ul className="nobullets">
          {res.data.map(item => (
            <li key={item.eventIdentity} style={{ cursor: "pointer" }}>
              <Event
                title={item.eventTitle}
                description={item.eventDescription}
                eventIdentity={item.eventIdentity}
                eventType={item.eventType}
                eventDate={item.eventDate}
                eventCost={item.eventCost}
                rsvp={item.rsvp}
              ></Event>
            </li>
          ))}
        </ul>
      )}

      {/* <div className="row jumbotron col-10 offset-1">
        <div className="w-100">
          <h2>100</h2>
          <p>this is event 1</p>
        </div>
      </div> */}
    </div>
  );
};
export default ViewEvents;

import React, { useState, useEffect } from "react";
import Event from "../Components/Event";
import authorisedClient from "../common/authorised-axios";

export const Admin = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    async function getEvents() {
      let response = await authorisedClient.get(
        `getallevents?code=hnChhxjHX89V4OvaTvJLzwlZ9z58dWJpZjBjvUUQ1ucUFhjXcoTkQQ==`
      );
      setRes(response);
    }
    getEvents();
  }, []);

  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
          <h1>Admin Page</h1>
          <p>You can manage Events here</p>
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
                isAdmin={true}
              ></Event>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Admin;

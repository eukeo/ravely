// import axios from "axios";
import { useState } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    const apiKey = "62636b71-bfb6-458b-9971-770c10c3034c";
    fetch(`https://edmtrain.com/api/events?client=${apiKey}`)
      .then((response) => response.json())
      .then((result) => {
        const eventData = result.data;
        console.log(eventData);

        let allEvents = [];

        for (let i = 0; i < eventData.length; i++) {
          const event = {
            name: eventData[i].name,
            artists: eventData[i].artistList,
            date: eventData[i].date,
            venue: eventData[i].venue.name,
            address: eventData[i].venue.address,
            location: eventData[i].venue.location,
            link: eventData[i].link,
          };
          allEvents.push(event);
        }
        setEvents(allEvents);
      });
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={getEvents}>More</button>
      <ul>
        {events.map((event) => (
          <li>
            {event.name} - {event.location}
            <h5>
              "{event.venue}" - {event.address}
            </h5>
            <h5>{event.date}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

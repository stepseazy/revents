import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map(e => (
          <EventListItem
            key={e.id}
            event={e}
            deleteEvent={deleteEvent}
            onEventOpen={onEventOpen}
          />
        ))}
      </div>
    );
  }
}

export default EventList;

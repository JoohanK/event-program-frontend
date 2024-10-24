import moment from "moment"
import useFetch from "../hooks/useFetch"
import { Event } from "../interfaces"
import { useState } from "react"
import EventDetails from "./EventDetails"

const EventsList = () => {
  const { data, loading, error } = useFetch<Event[]>(
    "http://localhost:3000/events"
  )

  const [eventSelected, setEventSelected] = useState<Event | null>(null)

  const handleEventClick = (event: Event) => {
    setEventSelected(event)
  }

  const handleClose = () => {
    setEventSelected(null)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="w-auto max-w-fit p-2 m-2 bg-slate-500 rounded-md border-double border-8 border-yellow-400 ">
      <h3 className="text-2xl text-center">Events</h3>
      <div>
        {data ? (
          data.map((event, index) => (
            <div
              key={event._id}
              className={`${
                index % 2 === 0 ? "bg-slate-400" : "bg-slate-300"
              } p-2 hover:bg-slate-200 cursor-pointer`}
              onClick={() => handleEventClick(event)}
            >
              <p>{event.title}</p>
              <p>{moment(event.startDate).format("YYYY-MM-DD")}</p>
              <p>{event.nameOrOrganisation}</p>
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
      {eventSelected && (
        <EventDetails event={eventSelected} onClose={handleClose} />
      )}
    </div>
  )
}

export default EventsList

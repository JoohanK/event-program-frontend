import moment from "moment"
import useFetch from "../hooks/useFetch"
import { Event } from "../interfaces"

const EventsList = () => {
  const { data, loading, error } = useFetch<Event[]>(
    "http://localhost:3000/events"
  )

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
              } p-2`}
            >
              <p>{event.title}</p>
              <p>
                {event.location?.physical}
                <span> </span>
                {moment(event.startDate).format("YYYY-MM-DD")}
              </p>
              <p>{event.nameOrOrganisation}</p>
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  )
}

export default EventsList

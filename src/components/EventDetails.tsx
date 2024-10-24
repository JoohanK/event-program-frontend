import { Event } from "../interfaces"
import moment from "moment"

interface EventDetailsProps {
  event: Event
  onClose: () => void
}

const EventDetails = ({ event, onClose }: EventDetailsProps) => {
  const register = () => {
    console.log("Registering")

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="w-auto max-w-fit p-2 m-2 bg-slate-400 rounded-md border-double border-8 border-yellow-400">
        <h3 className="text-2xl text-center mb-2">{event.title}</h3>

        <p>{event.description}</p>
        {event.images && <img src={event.images[0]} alt={event.title} />}

        <p>
          {moment(event.startDate).format("dddd, Do MMMM YYYY")}
          {event.endDate
            ? " - " + moment(event.endDate).format("dddd, Do MMMM YYYY")
            : null}
        </p>

        <p>
          {moment(event.startTime, "HH:mm:ss").format("HH:mm")}
          {event.endTime
            ? " - " + moment(event.endTime, "HH:mm:ss").format("HH:mm")
            : null}
        </p>

        <p>{event.nameOrOrganisation}</p>
        <div className="flex justify-center">
          <button className="btn btn-primary btn-md m-5" onClick={register}>
            Register
          </button>
          <button className="btn btn-primary btn-md m-5" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventDetails

import BackendStatus from "./components/BackendStatus"
import EventsList from "./components/EventsList"

function App() {
  return (
    <div>
      <h1 className=" text-3xl text-red-300">Frontend</h1>
      <button className="btn btn-primary btn-md m-10">Button example</button>
      <BackendStatus />
      <EventsList />
    </div>
  )
}

export default App

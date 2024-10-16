import BackendStatus from "./components/BackendStatus";

function App() {
  return (
    <div>
      <h1 className=" text-3xl text-red-300">Frontend</h1>
      <button className="btn btn-primary btn-md m-10">Button example</button>
      <BackendStatus />
    </div>
  );
}

export default App;

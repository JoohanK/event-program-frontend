import useFetch from "../hooks/useFetch";

const BackendStatus = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Backend</h3>
      <p>{data}</p>
    </div>
  );
};

export default BackendStatus;
import "./Filters.css";

const Filters = ({ filters }) => {
  return (
    <div className="filters">
      <button onClick={(e) => filters("all")}>All Tasks</button>
      <button onClick={(e) => filters("completed")}>Completed Tasks</button>
      <button onClick={(e) => filters("pending")}>Pending Tasks</button>
    </div>
  );
};

export default Filters;

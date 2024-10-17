const Spinner = () => {
  return (
    <div className="my-5 py-5">
      <div className="text-center my-5 py-3">
        <div
          className="spinner-border"
          role="status"
          style={{ color: "#ff3f6c" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};
export default Spinner;

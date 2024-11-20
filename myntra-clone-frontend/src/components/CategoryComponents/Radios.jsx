const Radios = () => {
  return (
    <div className="pt-3 ps-4">
      {" "}
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
        />
        <label
          className="form-check-label fw-bold fs-8"
          htmlFor="exampleRadios1"
        >
          Men
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <label
          className="form-check-label fw-bold fs-8"
          htmlFor="exampleRadios2"
        >
          Women
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
        />
        <label
          className="form-check-label fw-bold fs-8"
          htmlFor="exampleRadios3"
        >
          Boys
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios4"
          value="option4"
        />
        <label
          className="form-check-label fw-bold fs-8"
          htmlFor="exampleRadios4"
        >
          Girls
        </label>
      </div>
    </div>
  );
};

export default Radios;

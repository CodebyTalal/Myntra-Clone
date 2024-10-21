const Radios = () => {
  return (
    <div className="pt-3 ps-4">
      {" "}
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
        />
        <label class="form-check-label fw-bold fs-8" for="exampleRadios1">
          Men
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <label class="form-check-label fw-bold fs-8" for="exampleRadios2">
          Women
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
        />
        <label class="form-check-label fw-bold fs-8" for="exampleRadios3">
          Boys
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios4"
          value="option4"
        />
        <label class="form-check-label fw-bold fs-8" for="exampleRadios4">
          Girls
        </label>
      </div>
    </div>
  );
};

export default Radios;

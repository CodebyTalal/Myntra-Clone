import { IoIosSearch } from "react-icons/io";

const Categories = () => {
  return (
    <div className="px-4">
      <div className="d-flex justify-content-between align-items-center">
        <strong>CATEGORIES</strong>
        <span
          className="bg-light p-2 rounded-circle d-flex justify-content-center"
          style={{ height: "38px", width: "38px" }}
        >
          <IoIosSearch className="" style={{ height: "21px", width: "21px" }} />
        </span>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label fs-8" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck2"
        />
        <label class="form-check-label fs-8" for="defaultCheck2">
          Disabled checkbox
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck3"
        />
        <label class="form-check-label fs-8" for="defaultCheck3">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck4"
        />
        <label class="form-check-label fs-8" for="defaultCheck4">
          Disabled checkbox
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck5"
        />
        <label class="form-check-label fs-8" for="defaultCheck5">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
        />
        <label class="form-check-label fs-8" for="defaultCheck6">
          Disabled checkbox
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
        />
        <label class="form-check-label fs-8" for="defaultCheck6">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck7"
        />
        <label class="form-check-label fs-8" for="defaultCheck7">
          Disabled checkbox
        </label>
      </div>
      <button className="btn">+ 456 more</button>
    </div>
  );
};

export default Categories;

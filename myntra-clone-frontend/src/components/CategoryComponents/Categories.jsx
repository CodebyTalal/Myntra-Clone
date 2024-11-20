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
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck2"
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck2">
          Disabled checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck3"
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck3">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck4"
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck4">
          Disabled checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck5"
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck5">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck6">
          Disabled checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck6">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck7"
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck7">
          Disabled checkbox
        </label>
      </div>
      <button className="btn">+ 456 more</button>
    </div>
  );
};

export default Categories;

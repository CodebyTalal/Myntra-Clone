import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { checkAction } from "../../store/redux";
import { useMemo } from "react";

const Brands = ({ companies }) => {
  const dispatch = useDispatch();

  const handleCheckbox = (event) => {
    const label = event.target.getAttribute("data-label");
    if (event.target.checked) {
      dispatch(checkAction.setCheck(label));
    } else if (event.target.checked === false) {
      dispatch(checkAction.removeCheck(label));
    }
  };

  return (
    <div className="px-4">
      <div className="d-flex justify-content-between align-items-center">
        <strong>BRAND</strong>
        <span
          className="bg-light p-2 rounded-circle d-flex justify-content-center"
          style={{ height: "38px", width: "38px" }}
        >
          <IoIosSearch className="" style={{ height: "21px", width: "21px" }} />
        </span>
      </div>

      {companies.map((company) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            data-label={company}
            onChange={handleCheckbox}
            id="defaultCheck1"
          />
          <label className="form-check-label fs-8" htmlFor="defaultCheck1">
            {company}
          </label>
        </div>
      ))}
      {/* <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck2"
          data-label="The Indian Garage Co"
          onChange={handleCheckbox}
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck2">
          The Indian Garage Co
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck3"
          data-label="NUEVOSDAMAS"
          onChange={handleCheckbox}
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck3">
          NUEVOSDAMAS
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck4"
          data-label="ADIDAS"
          onChange={handleCheckbox}
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck4">
          ADIDAS
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck5"
          data-label="Roadster"
          onChange={handleCheckbox}
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck5">
          Roadster
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
          data-label="Nike"
          onChange={handleCheckbox}
        />
        <label className="form-check-label fs-8" htmlFor="defaultCheck6">
          Nike
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
          data-label="Nivea"
          onChange={handleCheckbox}
        />
        <label className="form-check-label fs-8 " htmlFor="defaultCheck6">
          Nivea
        </label>
      </div> */}

      <button className="btn">+ 456 more</button>
    </div>
  );
};

export default Brands;

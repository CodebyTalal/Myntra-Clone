import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { checkAction } from "../store/redux";
import { useEffect } from "react";

const Brands = () => {
  const dispatch = useDispatch();

  const handleCheckbox = (event) => {
    const label = event.target.getAttribute("data-label");
    console.log(event);
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
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          data-label="Carlton London"
          onChange={handleCheckbox}
          id="defaultCheck1"
        />
        <label class="form-check-label fs-8" for="defaultCheck1">
          Carlton London
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck2"
          data-label="The Indian Garage Co"
          onChange={handleCheckbox}
        />
        <label class="form-check-label fs-8" for="defaultCheck2">
          The Indian Garage Co
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck3"
          data-label="NUEVOSDAMAS"
          onChange={handleCheckbox}
        />
        <label class="form-check-label fs-8" for="defaultCheck3">
          NUEVOSDAMAS
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck4"
          data-label="ADIDAS"
          onChange={handleCheckbox}
        />
        <label class="form-check-label fs-8" for="defaultCheck4">
          ADIDAS
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck5"
          data-label="Roadster"
          onChange={handleCheckbox}
        />
        <label class="form-check-label fs-8" for="defaultCheck5">
          Roadster
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
          data-label="Nike"
          onChange={handleCheckbox}
        />
        <label class="form-check-label fs-8" for="defaultCheck6">
          Nike
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
          data-label="Nivea"
          onChange={handleCheckbox}
        />
        <label class="form-check-label fs-8 " for="defaultCheck6">
          Nivea
        </label>
      </div>

      <button className="btn">+ 456 more</button>
    </div>
  );
};

export default Brands;

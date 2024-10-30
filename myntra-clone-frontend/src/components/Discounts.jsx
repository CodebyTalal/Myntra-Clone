import { useDispatch } from "react-redux";
import { discountAction } from "../store/redux";

const Discounts = () => {
  const dispatch = useDispatch();
  const handleDiscounts = ({ target }) => {
    const discount = Number(target.getAttribute("data-label")) || 0;
    dispatch(discountAction.setDiscount(discount));
  };

  return (
    <div className=" ps-4">
      <strong>DISCOUNT RANGE</strong>{" "}
      <div class="form-check mt-2">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          data-label="10"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios1">
          10% and above
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          data-label="20"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios2">
          20% and above
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          data-label="30"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios3">
          30% and above
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios4"
          value="option4"
          data-label="40"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios4">
          40% and above
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios5"
          value="option5"
          data-label="50"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios5">
          50% and above
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios6"
          value="option6"
          data-label="60"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios6">
          60% and above
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios7"
          value="option7"
          data-label="70"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios7">
          70% and above
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios8"
          value="option8"
          data-label="80"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios8">
          80% and above
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios9"
          value="option9"
          data-label="90"
          onChange={handleDiscounts}
        />
        <label class="form-check-label fs-8" for="exampleRadios9">
          90% and above
        </label>
      </div>
    </div>
  );
};

export default Discounts;

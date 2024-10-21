import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div class="dropdown header_dropdown px-2">
      <a
        class="dropdown-toggle action_container text-dark pt-3"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <IoPersonOutline style={{ width: "20px", height: "20px" }} />
        <span className="action_name">Profile</span>
      </a>
      <ul class="dropdown-menu p-3 fs-7" aria-labelledby="dropdownMenuButton">
        <strong>Welcome</strong>
        <p>To access account and manage orders</p>
        <Link
          to="/login_page"
          className="btn_pink-light text-pink fw-bold p-3 py-2 bg-white border"
        >
          LOGIN / SIGNUP
        </Link>
        <hr className="gray-400 mt-4" />
        <li>
          <button class="dropdown-item" href="#">
            Orders
          </button>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Wishlist
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Gift Cards
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Contact Us
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Myntra Insider
          </a>
        </li>
        <hr className="mt-2" />
        <li>
          <a class="dropdown-item" href="#">
            Myntra Credit
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Coupons
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Saved Cards
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Saved VPA
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Saved Addresses
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

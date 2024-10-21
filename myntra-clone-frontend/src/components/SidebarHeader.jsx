import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidebarHeader = () => {
  const Category = localStorage.getItem("Category");

  return (
    <div className="p-4 pb-0">
      {" "}
      <a class="d-flex align-items-center mb-2 link-body-emphasis text-decoration-none">
        <Link to="/" class="fs-8 text-decoration-none text-dark">
          Home / &nbsp;
        </Link>
        <strong className="fs-8">{Category}</strong>
      </a>
      <p className="fs-6 fw-bold mb-4">{Category} - </p>
      <div>
        <span className="fw-bold me-5 pe-5">FILTERS</span>
        <div class="dropdown d-inline fs-8 ms-5 ps-5">
          <button
            class="btn dropdown-toggle ms-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Country of Origin
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown d-inline fs-8 ">
          <button
            class="btn dropdown-toggle ms-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bundles
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown d-inline fs-8">
          <button
            class="btn dropdown-toggle ms-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Size
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;

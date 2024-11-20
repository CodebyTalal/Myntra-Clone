import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidebarHeader = () => {
  const Category = useSelector((store) => store.categoryItems);
  const items = useSelector((store) => store.itemsdata);
  return (
    <div className="p-4 pb-0">
      {" "}
      <a className="d-flex align-items-center mb-2 link-body-emphasis text-decoration-none">
        <Link to="/" className="fs-8 text-decoration-none text-dark">
          Home / &nbsp;
        </Link>
        <strong className="fs-8">{Category}</strong>
      </a>
      <p className="fs-6 fw-bold mb-4">
        {Category} -{" "}
        <span className="text-secondary fw-semibold">{items.length} items</span>
      </p>
      <div>
        <span className="fw-bold me-5 pe-5">FILTERS</span>
        <div className="dropdown d-inline fs-8 ms-5 ps-5">
          <button
            className="btn dropdown-toggle ms-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Country of Origin
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown d-inline fs-8 ">
          <button
            className="btn dropdown-toggle ms-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bundles
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown d-inline fs-8">
          <button
            className="btn dropdown-toggle ms-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Size
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
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

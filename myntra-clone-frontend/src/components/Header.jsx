import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
export const displayBagAction = () => {};
const Header = () => {
  const bag = useSelector((store) => store.bag);
  const location = useLocation();
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio{" "}
          <sup className="position-absolute  translate-middle ms-3">New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon ">
          <CiSearch />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        {location.pathname !== "/login_page" && <Dropdown />}

        <Link to="/wishlist" className="action_container text-dark pt-3 px-2">
          <IoMdHeartEmpty style={{ width: "20px", height: "20px" }} />
          <span className="action_name">Wishlist</span>
        </Link>

        <Link to="/bag" className="action_container text-dark pt-3 px-2">
          <BsHandbag style={{ width: "20px", height: "20px" }} />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

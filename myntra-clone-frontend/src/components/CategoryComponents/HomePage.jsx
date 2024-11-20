import HomePageHeader from "/images/HomePageHeader.png";
import sbc from "/images/sbc.png";
import c1 from "/images/c1.png";
import c2 from "/images/c2.png";
import c3 from "/images/c3.png";
import c4 from "/images/c4.png";
import c5 from "/images/c5.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryItemsAction,
  checkAction,
  discountAction,
  filteredItemsAction,
  // handleCategoryThunk,
  itemsdataAction,
} from "../../store/redux";
import { Button } from "bootstrap";
import { useEffect } from "react";

const HomePage = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.items);
  const filtered = useSelector((store) => store.filteredItems);
  // useEffect(() => {
  //   dispatch(filteredItemsAction.setFilteredItems([]));
  //   dispatch(checkAction.setCheck([]));
  //   dispatch(discountAction.setDiscount(0));
  //   console.log("Redux state reset on mount");
  // }, [dispatch]);

  const handleCategoryItems = (label) => {
    const { items } = data[label];

    dispatch(itemsdataAction.addCategoryItems(items));
    dispatch(categoryItemsAction.setCategory(label));
  };

  console.log(filtered);
  return (
    <>
      <img src={HomePageHeader} className="w-100 mt-4" alt="Hero Image" />
      <img src={sbc} alt="Shop by Category" className="my-4" />
      <div className="d-flex justify-content-center mb-5 pb-5">
        <Link
          to="/categoryitem"
          className="m-3"
          onClick={() => handleCategoryItems("EthnicWear")}
        >
          <img src={c1} alt="" />
        </Link>
        <Link
          to="/categoryitem"
          className="m-3"
          onClick={() => handleCategoryItems("WFH Casual Wear")}
        >
          <img src={c2} alt="" />
        </Link>
        <Link
          to="/categoryitem"
          className="m-3"
          onClick={() => handleCategoryItems("Mens Activewear")}
        >
          <img src={c3} alt="" />
        </Link>
        <Link
          to="/categoryitem"
          className="m-3"
          onClick={() => handleCategoryItems("Western Wear")}
        >
          <img src={c4} alt="" />
        </Link>
        <Link
          to="/categoryitem"
          className="m-3"
          onClick={() => handleCategoryItems("Sportswear")}
        >
          <img src={c5} alt="" />
        </Link>
      </div>
    </>
  );
};
export default HomePage;

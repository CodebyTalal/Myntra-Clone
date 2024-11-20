import { Link } from "react-router-dom";
import emptycart from "/images/emptycart.png";
const BagEmptyMessage = () => {
  return (
    <center className="mt-5">
      <h1 className="fw-bold text_pink">Your Bag is empty</h1>
      <img className="w-25 h-25 mb-2" src={emptycart} alt="Empty Wishlist" />
      <p>Add items from your wishlist to Bag & make purchases.</p>
      <Link to={"/wishlist"} className="btn btn-success mb-5 mt-2 fw-semibold">
        See Wishlist
      </Link>
    </center>
  );
};
export default BagEmptyMessage;

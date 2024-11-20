import { Link } from "react-router-dom";
import emptycart from "/images/emptycart.png?url";
const WishlistEmptyMessage = () => {
  return (
    <center className="mt-5">
      <h1 className="fw-bold text_pink">Your Wishlist is empty</h1>
      <img className="w-25 h-25 mb-2" src={emptycart} alt="Empty Wishlist" />
      <p>
        Add items that you like to your wishlist. Review them anytime and easily
        move them to the bag.
      </p>
      <Link to={"/"} className="btn btn-success mb-5 mt-2 fw-semibold">
        Continue Shoping
      </Link>
    </center>
  );
};
export default WishlistEmptyMessage;

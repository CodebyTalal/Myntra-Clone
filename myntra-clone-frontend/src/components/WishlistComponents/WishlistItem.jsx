import { useDispatch, useSelector } from "react-redux";
import { BagAction, summaryAction, wishlistAction } from "../../store/redux";
import { IoClose } from "react-icons/io5";

const WishlistItem = ({ item }) => {
  // const bagitems = useSelector((store) => store.bag);
  // const check = bagitems.forEach((i) => {
  //   return true && i.id === item.id;
  // });
  // console.log(check);

  const dispatch = useDispatch();
  const handleAddtoBag = () => {
    dispatch(BagAction.addToBag(item));
    dispatch(summaryAction.addSummary(item));
  };
  const handleRemovefromWishlist = () => {
    dispatch(wishlistAction.removefromWishlist(item));
  };
  return (
    <div className="wishlist-item-container position-relative m-4">
      <button
        className="btn close-btn px-1 py-0 m-0 position-absolute top-0 end-0 text-pink"
        title="Remove Item from wishlist"
        onClick={handleRemovefromWishlist}
      >
        <IoClose
          style={{
            width: "20px",
            height: "20px",
            color: "#ff3f6c",
          }}
        />
      </button>
      <img className="item-image" src={item.image} alt="item image" />
      <div className="wishlist-rating position-absolute p-2 py-1 ms-2">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="px-3 pb-3">
        <div className="company-name ">{item.company}</div>
        <div className="item-name ">{item.item_name}</div>
        <div className="price ">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        <button
          className="btn-add-bag"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            handleAddtoBag();
            handleRemovefromWishlist();
          }}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;

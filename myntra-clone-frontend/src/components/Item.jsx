import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { wishlistAction } from "../store/redux";
import { useState } from "react";
const Item = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(wishlistAction.addToWishlist(item));
  };
  const [hoverTrue, setHoverTrue] = useState(false);
  console.log(hoverTrue);

  const handleHover = () => {
    setHoverTrue((currentstate) => {
      currentstate = !currentstate;
      return currentstate;
    });
  };
  return (
    <div
      className="item-container position-relative m-4"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img className="item-image" src={item.image} alt="item image" />

      <div className="p-3 pb-2 bg-lighter position-absolute start-0">
        <button
          type="button"
          class="align-bottom wishlist_btn fs-7 fw-bolder"
          onClick={handleAddItem}
        >
          <CiHeart
            style={{ width: "23px", height: "23px", marginInlineEnd: "4px" }}
          />{" "}
          Wishlist
        </button>
      </div>

      {hoverTrue ? (
        <p className="mb-0 Sizes mx-3 fs-7">Sizes: UK6</p>
      ) : (
        <>
          <div className="rating position-absolute p-2 py-1 ms-2">
            {item.rating.stars} ⭐ | {item.rating.count}
          </div>
          <div className="company-name  mx-3">{item.company}</div>
          <div className="item-name mx-3">{item.item_name}</div>
        </>
      )}

      <div className="price mx-3 mb-3">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
    </div>
  );
};

export default Item;

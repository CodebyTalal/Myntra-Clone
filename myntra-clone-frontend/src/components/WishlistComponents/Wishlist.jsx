import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";
import WishlistEmptyMessage from "./WishlistEmptyMessage";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector((store) => store.wishlist);
  return (
    <main className="mt-5 pt-5">
      {wishlist.length === 0 ? (
        <WishlistEmptyMessage />
      ) : (
        <>
          <h1 className="fw-bold text-center text-pink mt-5">My Wishlist</h1>
          <div className="items-container mb-5">
            {wishlist.map((item) => (
              <WishlistItem key={item.id} item={item}></WishlistItem>
            ))}
          </div>
          <div
            class="modal fade "
            id="staticBackdrop"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content rounded-2">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 text-pink text-center fw-bolder"
                    id="staticBackdropLabel"
                  >
                    Congrats !
                  </h1>
                </div>
                <div class="modal-body fw-semibold">
                  The item has been added to the bag. Visit Bag to place your
                  order!
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Wishlist;

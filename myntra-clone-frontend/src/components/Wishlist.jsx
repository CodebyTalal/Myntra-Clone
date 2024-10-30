import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";
import WishlistEmptyMessage from "./WishlistEmptyMessage";

const Wishlist = () => {
  const wishlist = useSelector((store) => store.wishlist);
  return (
    <main className="mt-5 pt-5">
      {wishlist.length === 0 ? (
        <WishlistEmptyMessage />
      ) : (
        <>
          <h1 className="fw-bold text-center">My Wishlist</h1>
          <div class="items-container mb-5">
            {wishlist.map((item) => (
              <WishlistItem key={item.id} item={item}></WishlistItem>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Wishlist;

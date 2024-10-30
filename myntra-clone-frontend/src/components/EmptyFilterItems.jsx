import emptycart from "/images/emptycart.png";
const EmptyFilterItems = () => {
  return (
    <center className="mt-5">
      <h2 className="fw-bolder text_pink">No Items Matched your Filters!</h2>
      <img className="w-50 h-75 mb-2" src={emptycart} alt="Empty Wishlist" />
    </center>
  );
};
export default EmptyFilterItems;

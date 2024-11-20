import { useDispatch } from "react-redux";
import {
  checkAction,
  discountAction,
  filteredItemsAction,
  itemsAction,
  itemsdataAction,
  persistor,
  summaryAction,
} from "../store/redux";

const ResetAllState = () => {
  const dispatch = useDispatch();

  const resetState = () => {
    // Step 1: Clear persisted data
    persistor.purge(); // Removes all persisted state

    // Step 2: Reset Redux slices
    dispatch(summaryAction.resetItems()); // Reset wishlist slice
    dispatch(itemsdataAction.resetItems()); // Reset wishlist slice
    // dispatch(itemsAction.resetItems()); // Reset wishlist slice
    dispatch(filteredItemsAction.resetItems()); // Reset wishlist slice
    dispatch(checkAction.resetItems()); // Reset wishlist slice
    dispatch(discountAction.resetItems()); // Reset wishlist slice
    // Repeat for other slices as needed
    console.log("cleared");
  };

  return (
    <center className="py-5">
      <button className="my-5 wishlist_btn" onClick={resetState}>
        Reset All State
      </button>
    </center>
  );
};

export default ResetAllState;

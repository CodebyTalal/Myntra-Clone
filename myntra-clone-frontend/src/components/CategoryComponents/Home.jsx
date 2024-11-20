import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { useEffect, useMemo, useState } from "react";
import {
  checkAction,
  discountAction,
  filteredItemsAction,
} from "../../store/redux";
import EmptyFilterItems from "./EmptyFilterItems";

const Home = () => {
  let [newFilteredItems, setFilteredItems] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector((store) => store.itemsdata);
  const check = useSelector((store) => store.check);
  // const filteredItems = useSelector((store) => store.filteredItems);
  // console.log(filteredItems);
  const discount = useSelector((store) => store.discount);
  const FetchStatus = useSelector((store) => store.fetchStatus);

  // Reset states when the component mounts
  // dispatch(checkAction.setCheck([]));
  // dispatch(discountAction.setDiscount(0));
  // useEffect(() => {
  //   dispatch(filteredItemsAction.setFilteredItems([]));
  //   dispatch(checkAction.setCheck([]));
  //   dispatch(discountAction.setDiscount(0));
  //   console.log("Redux state reset on mount");
  // }, [location.pathname]);

  console.log(newFilteredItems);
  newFilteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          (check.includes(item.company) || !check.length) &&
          item.discount_percentage >= discount
      ),
    [items, check, discount]
  );

  // useEffect(() => {
  //   dispatch(filteredItemsAction.setFilteredItems(newFilteredItems));
  // }, [newFilteredItems, dispatch]);

  return (
    <div className="items-container justify-content-center w-80 mx-0 px-0 mt-0">
      {newFilteredItems.length === 0 && <EmptyFilterItems />}
      {newFilteredItems.length === 0 && check.length === 0 && discount === 0
        ? items.map((item) => <Item key={item.id} item={item}></Item>)
        : newFilteredItems.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
    </div>
  );
};

export default Home;

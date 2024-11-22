import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { useEffect, useMemo, useState } from "react";
import {
  checkAction,
  discountAction,
  filteredItemsAction,
} from "../../store/redux";
import EmptyFilterItems from "./EmptyFilterItems";

const Home = ({ items }) => {
  const dispatch = useDispatch();
  const check = useSelector((store) => store.check);
  const discount = useSelector((store) => store.discount);
  useEffect(() => {
    dispatch(checkAction.resetItems()); // Reset wishlist slice
    dispatch(discountAction.resetItems());
  }, []);
  console.log(discount);

  const newFilteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          (check.includes(item.company) || !check.length) &&
          item.discount_percentage >= discount
      ),
    [items, check, discount]
  );

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

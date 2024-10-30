import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { useEffect, useMemo } from "react";
import { filteredItemsAction } from "../store/redux";
import EmptyFilterItems from "./EmptyFilterItems";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const check = useSelector((store) => store.check);
  const filteredItems = useSelector((store) => store.filteredItems);
  const discount = useSelector((store) => store.discount);
  const FetchStatus = useSelector((store) => store.fetchStatus);

  const newFilteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          (check.includes(item.company) || !check.length) &&
          item.discount_percentage >= discount
      ),
    [items, check, discount]
  );

  useEffect(() => {
    dispatch(filteredItemsAction.setFilteredItems(newFilteredItems));
  }, [newFilteredItems, dispatch]);

  return (
    <div className="items-container justify-content-center w-80 mx-0 px-0 mt-0">
      {filteredItems.length === 0 && FetchStatus.fetched && (
        <EmptyFilterItems />
      )}
      {filteredItems.length === 0 && check.length === 0 && discount == 0
        ? items.map((item) => <Item key={item.id} item={item}></Item>)
        : filteredItems.map((item) => <Item key={item.id} item={item}></Item>)}
    </div>
  );
};

export default Home;

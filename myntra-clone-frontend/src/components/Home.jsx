import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { useEffect } from "react";
import { filteredItemsAction } from "../store/redux";
const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const check = useSelector((store) => store.check);
  const filteredItems = useSelector((store) => store.filteredItems);
  useEffect(() => {
    items.filter((item) => {
      if (check.includes(item.company) && !filteredItems.includes(item)) {
        dispatch(filteredItemsAction.addfilteredItems(item));
      } else if (
        !check.includes(item.company) &&
        filteredItems.includes(item)
      ) {
        dispatch(filteredItemsAction.removefilteredItems(item));
      }
    });
  }, [check]);
  return (
    <div className="items-container w-80 mx-0 px-0 mt-0">
      {check.length === 0
        ? items.map((item) => <Item key={item.id} item={item}></Item>)
        : filteredItems.map((item) => <Item key={item.id} item={item}></Item>)}
    </div>
  );
};

export default Home;

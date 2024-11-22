import Sidebar from "./Sidebar";
import Home from "./Home";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchStatusAction, itemsAction } from "../../store/redux";

const CategoryItems = () => {
  const [itemsData, setItemsdata] = useState([]);
  const [companies, setCompanies] = useState([]);
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const category = useSelector((store) => store.categoryItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        dispatch(fetchStatusAction.fetchStarted());

        const response = await fetch("http://localhost:8080/items");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { items } = await response.json();
        console.log("Data fetched successfully:", items);
        const { itemsdata } = items[category];
        const { companies } = items[category];
        setItemsdata(itemsdata);
        setCompanies(companies);
        dispatch(fetchStatusAction.fetchFinished());
        dispatch(fetchStatusAction.markFetched()); // Mark data as fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, fetchStatus.fetched]);
  return (
    <main className="mt-5 pt-5 row mx-0">
      {fetchStatus.currentlyFetching ? (
        <Spinner />
      ) : (
        <>
          <Sidebar companies={companies} items={itemsData} />
          <Home items={itemsData} />
        </>
      )}
    </main>
  );
};
export default CategoryItems;

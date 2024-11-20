import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import FetchStatus from "./components/FetchStatus";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchStatusAction, itemsAction } from "./store/redux";

function App() {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetched) return; // Prevent re-fetching

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

        dispatch(itemsAction.addInitialItems(items)); // Add items to Redux
        dispatch(fetchStatusAction.fetchFinished());
        dispatch(fetchStatusAction.markFetched()); // Mark data as fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, fetchStatus.fetched]);

  return (
    <div className="mt-5">
      <Header />
      {/* <FetchStatus /> */}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;

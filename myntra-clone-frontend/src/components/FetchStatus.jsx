import { useDispatch, useSelector } from "react-redux";
import { fetchStatusAction, itemsAction } from "../store/redux";
import { useEffect } from "react";

const FetchStatus = () => {
  const FetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (FetchStatus.fetched) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        dispatch(fetchStatusAction.fetchStarted());
        const response = await fetch("http://localhost:8080/items", { signal });
        const { items } = await response.json();
        console.log("callled");

        // if (items?.length) {
        dispatch(itemsAction.addInitialItems(items));
        // }
        dispatch(fetchStatusAction.fetchFinished());
        dispatch(fetchStatusAction.markFetched());
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [FetchStatus.fetched, dispatch]);
};

export default FetchStatus;

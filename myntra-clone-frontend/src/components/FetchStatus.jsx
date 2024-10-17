import { useDispatch, useSelector } from "react-redux";
import { fetchStatusAction, itemsAction } from "../store/redux";
import { useEffect } from "react";

const FetchStatus = () => {
  const FetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (FetchStatus.fetched) {
      return;
    } else {
      const controller = new AbortController();
      const signal = controller.signal;
      dispatch(fetchStatusAction.fetchStarted());
      fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then(({ items }) => {
          dispatch(itemsAction.addInitialItems(items[0]));
          dispatch(fetchStatusAction.fetchFinished());
          dispatch(fetchStatusAction.markFetched());
        });
      return () => {
        controller.abort();
      };
    }
  }, [FetchStatus]);
};

export default FetchStatus;

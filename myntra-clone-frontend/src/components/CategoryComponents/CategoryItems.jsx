import Sidebar from "./Sidebar";
import Home from "./Home";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";

const CategoryItems = () => {
  // const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <main className="mt-5 pt-5 row mx-0">
      {/* {fetchStatus.currentlyFetching ? (
        <Spinner />
      ) : ( */}
      <>
        <Sidebar />
        <Home />
      </>
      {/* )} */}
    </main>
  );
};
export default CategoryItems;

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchStatus from "./components/FetchStatus";

import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="mt-5">
      <Header />
      <FetchStatus />
      {/*{fetchStatus.currentlyFetching ? <Spinner /> :*/}
      <Outlet></Outlet>
      {/* } */}
      <Footer />
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchStatus from "./components/FetchStatus";

function App() {
  return (
    <div className="mt-5">
      <Header />
      <FetchStatus />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;

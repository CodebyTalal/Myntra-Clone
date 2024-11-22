import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="mt-5">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;

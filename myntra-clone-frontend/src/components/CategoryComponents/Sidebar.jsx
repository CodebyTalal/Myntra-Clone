import Radios from "./Radios";
import Categories from "./Categories";
import Brands from "./Brands";
import Discounts from "./Discounts";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <>
      <SidebarHeader />
      <hr className="my-0" />
      <div className="position-sticky pe-0" style={{ width: "250px" }}>
        <div className="d-flex flex-column flex-shrink-0 border border-bottom-0 border-start-0 border-top-0">
          <Radios />
          <hr />
          <Brands />
          <hr />
          <Discounts />
          <hr />
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

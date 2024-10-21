import Radios from "./Radios";
import Categories from "./Categories";
import Brands from "./Brands";
import Discounts from "./Discounts";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div className="position-sticky">
      <SidebarHeader />
      <hr className="my-0" />
      <div
        class="d-flex flex-column flex-shrink-0 border border-bottom-0 border-start-0 border-top-0"
        style={{ width: "280px" }}
      >
        <Radios />
        <hr />
        <Categories />
        <hr />
        <Brands />
        <hr />
        <Discounts />
      </div>
    </div>
  );
};

export default Sidebar;

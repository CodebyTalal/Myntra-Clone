import { useSelector } from "react-redux";
import Item from "./Item";
import HomePage from "./HomePage";
const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);

  return (
    <main>
      <HomePage />
      <div className="items-container mt-5 pt-5">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </main>
  );
};

export default Home;

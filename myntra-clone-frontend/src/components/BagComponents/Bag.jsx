import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagEmptyMessage from "./BagEmptyMessage";
import BagSummary from "./Bag_Summary";

const Bag = () => {
  const Bag = useSelector((store) => store.bag);
  const summaryData = useSelector((store) => store.summary);

  return (
    <main className="mt-3 py-5 ">
      {Bag.length === 0 ? (
        <BagEmptyMessage />
      ) : (
        <div className="bag-container">
          <div className="bag-items-container">
            {Bag.map((item) => (
              <BagItem key={item.id} item={item}></BagItem>
            ))}
          </div>

          {Bag.length > 0 && (
            <div className="bag-summary">
              <BagSummary
                totalItem={Bag.length}
                totalMRP={summaryData.totalMRP}
                totalDiscount={summaryData.totalDiscount}
                finalPayment={summaryData.finalPayment}
              />
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Bag;

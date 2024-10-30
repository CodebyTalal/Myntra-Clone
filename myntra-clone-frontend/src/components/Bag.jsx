import { useSelector } from "react-redux";
import BagSummary from "./Bag_Summary";
import BagItem from "./BagItem";
import BagEmptyMessage from "./BagEmptyMessage";

const Bag = () => {
  const Bag = useSelector((store) => store.bag);
  const summaryData = useSelector((store) => store.summary);

  return (
    <main className="mt-5 pt-5">
      {Bag.length === 0 ? (
        <BagEmptyMessage />
      ) : (
        <div class="items-container py-5">
          <div class="bag-items-container">
            {Bag.map((item) => (
              <BagItem key={item.id} item={item}></BagItem>
            ))}
          </div>

          {Bag.length > 0 && (
            <div class="bag-summary">
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

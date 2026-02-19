import AddProducts from "./AddProducts";
import Manageproducts from "./ManageProducts"
export default function ManageDashBoard({ type, setView }) {
  if (type == "manage")
    return (
      <>
        <>
          <div className="flex justify-center p-5">
            <Manageproducts />
          </div>
        </>
      </>
    );
  if (type == "add")
    return (
      <>
        <>
          <div className="flex justify-center p-5">
            <AddProducts setView={setView} />
          </div>
        </>
      </>
    );
  if (type == "orders") return <>orders</>;
  return <>not available</>;
}

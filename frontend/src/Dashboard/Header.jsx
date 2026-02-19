import { Plus, Boxes, ClipboardList } from "lucide-react";


export default function Header({ setView }) {
  return (
    
      <div className="flex justify-evenly items-center">
        <button
          onClick={() => setView("manage")}
          className=" m-4 flex flex-col items-center"
        >
          <div className="bg-white rounded-full h-12.5 w-12.5 flex justify-center items-center">
            <Boxes size={40} />
          </div>
          <p className="text-amber-950 font-medium"> Manage Products</p>
        </button>
        <button
          onClick={() => setView("add")}
          className=" m-4 flex flex-col items-center"
        >
          <div className="bg-white rounded-full h-12.5 w-12.5 flex justify-center items-center">
            <Plus size={40} />
          </div>
          <p className="text-amber-950 font-medium"> Add Product</p>
        </button>
        <button
          onClick={() => setView("orders")}
          className=" m-4 flex flex-col items-center"
        >
          <div className="bg-white rounded-full h-12.5 w-12.5 flex justify-center items-center">
            <ClipboardList size={40} />
          </div>
          <p className="text-amber-950 font-medium"> See Orders</p>
        </button>
      </div>
    
  );
}

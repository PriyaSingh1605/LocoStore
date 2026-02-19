import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ManageProducts() {
  const [data, setData] = useState([]);

  // Fetch products
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/sellerproducts", {
        withCredentials: true,
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`, {
          withCredentials: true,
        });
        // Remove deleted product from state
        setData(data.filter((item) => item._id !== id));
        alert("Product deleted successfully!");
      } catch (err) {
        console.log(err);
        alert("Failed to delete product.");
      }
    }
  };

  return (
    <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((item) => (
        <div
          key={item._id}
          className="flex flex-col border p-2 border-amber-950 rounded-lg overflow-hidden bg-white"
        >
          <img src={item.image} className="w-full h-80 object-cover" />
          <div className="p-2 flex flex-col gap-2">
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">⭐ {item.rating} Rating</p>
            <p className="font-semibold">{item.description}</p>
            <p className="text-sm text-gray-600">{item.discount} % Discount</p>

            <Link
              to={`/products/${item._id}/update`}
              className="mt-2 inline-block bg-amber-500 text-white p-2 rounded text-center"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(item._id)}
              className="mt-2 bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

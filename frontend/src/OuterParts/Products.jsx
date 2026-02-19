import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/products", {
          withCredentials: true, 
        });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-full p-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {data.map((item) => (
        <Link
          to={`/products/${item._id}`}
          key={item._id}
          className="flex flex-col border p-2 border-amber-950 rounded-lg overflow-hidden bg-white"
        >
          <img src={item.image} className="w-full h-80 object-cover" />

          <div className="p-2">
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">⭐ {item.rating} Rating</p>
            <p className="font-semibold">{item.description}</p>
            <p className="text-sm text-gray-600"> {item.discount} %Discount</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

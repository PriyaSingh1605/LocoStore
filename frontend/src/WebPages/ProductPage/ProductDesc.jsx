import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDesc() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`http://localhost:3000/products/${id}`, {
          withCredentials: true,
        });
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, [id]);
  if (!product) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 h-[60%]">
      <img
        src={product.image}
        className="w-full h-80 object-contain rounded-lg border"
      />

      <div className="flex flex-col  gap-3">
        <p className="text-2xl font-bold">{product.name}</p>
        <p className="text-lg text-yellow-500">⭐ {product.rating} Rating</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}

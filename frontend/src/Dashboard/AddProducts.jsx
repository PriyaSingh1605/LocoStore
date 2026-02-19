import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
export default function Addproducts({ setView }) {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    name: "",
    description: "",
    rating: "",
    dicount: "",
    price: "",
  });

  // useEffect(() => {
  //   async function sendDetail() {
  //     const res =await axios.post("http://localhost:3000/addProduct");

  //     // if(res.data.success){
  //     //    console.log("product saved");
  //     // }else{
  //     //   console.log("product not saved");
  //     // }
  //   }
  //   sendDetail();
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/addProduct", detail, {
        withCredentials: true,
      });
      // if(res){
      setView("manage");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input type="file" className="w-full border p-2 rounded" />

        <input
          type="text"
          name="name"
          onChange={(e) => {
            setDetail({ ...detail, name: e.target.value });
          }}
          placeholder="Product name"
          className="w-full border p-2 rounded"
        />

        <textarea
          type="text"
          name="description"
          onChange={(e) => {
            setDetail({ ...detail, description: e.target.value });
          }}
          placeholder="Product description"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="rating"
          onChange={(e) => {
            setDetail({ ...detail, rating: e.target.value });
          }}
          placeholder="Rating (1-5)"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="discount"
          onChange={(e) => {
            setDetail({ ...detail, discount: e.target.value });
          }}
          placeholder="Discount %"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          onChange={(e) => {
            setDetail({ ...detail, price: e.target.value });
          }}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Save Product
        </button>
      </form>
    </>
  );
}

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function UserDetails() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3000/logout",
      {},
      {
        withCredentials: true,
      },
    );
    navigate("/login");
  };

  return (
    <>
      <div className="p-2 ">
        <p className="text-lg font-medium">Username</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2  p-4 w-full">
        <button className="w-[40%] md:w-full p-5 rounded bg-white ">
          Orders
        </button>
        <button className="w-[40%] md:w-full p-5 rounded bg-white ">
          Wishlist
        </button>
        <button className="w-[40%] md:w-full p-5 rounded bg-white ">
          Coupons
        </button>
        <button className="w-[40%] md:w-full p-5 rounded bg-white ">
          Help Center
        </button>
      </div>

      <div className="flex flex-col justify-center gap-2  p-4 w-full">
        <Link
          to={"/dashboard"}
          className="bg-white  rounded-lg p-2 font-medium text-center"
        >
          Dashbord
        </Link>
        <button
          onClick={handleLogout}
          className="bg-white  rounded-lg p-2 font-medium"
        >
          Logout
        </button>
      </div>
    </>
  );
}

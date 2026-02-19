import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <>
      <div className="w-full p-4 items-center bg-red-400 flex gap-3 justify-between">
        <Link to={"/"} className="font-medium">
          LocoStore
        </Link>
        {"   "}

        <div className=" flex justify-between items-center gap-3 ">
          <SearchBar />
          <Link to={"/login"} className=" hidden font-medium">
            signup
          </Link>
          <Link to={"/profile"} className="font-medium">
            ProfilePage
          </Link>
        </div>
      </div>
    </>
  );
}

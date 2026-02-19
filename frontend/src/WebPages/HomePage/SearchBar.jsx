import { Search } from "lucide-react";
export default function SearchBar() {
  return (
    <>
      <label className="font-medium whitespace-nowrap">
        {" "}
        <Search size={20} />{" "}
      </label>
      <div className="hidden md:flex items-center gap-2 ">
        <input
          type="text"
          name="search"
          className="flex-1 px-3 py-2 rounded-lg border border-gray-400 outline-none"
        ></input>
      </div>
    </>
  );
}

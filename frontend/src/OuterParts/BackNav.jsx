import { ArrowLeft } from "lucide-react";
import {Link} from "react-router-dom";
export default function ProfileNav({backLink}) {
  return (
    <>
      <div className="w-full p-4 items-center bg-red-400 flex gap-3 justify-between">
        <Link to={backLink}>
          {" "}
          <ArrowLeft size={24} />
        </Link>
      </div>
    </>
  );
}

import BackNav from "../OuterParts/BackNav";
import Footer from "../OuterParts/Footer";
import Header from "./Header";
import ManageDashBoard from "./ManageDashBoard";
import {useState} from "react"
// export default function Dashboard() {
//   return (
//     <div className="h-screen bg-amber-200">
//       <BackNav backLink={"/profile"} />
//       <Header />
//       {/* Manage Product */}
//       <Product />
//       {/* See Orders */}
//     </div>
//   );
// }
export default function Dashboard() {
  const [view, setView] = useState("manage");

  return (
    <div className="relative bg-amber-200">
      <BackNav backLink={"/profile"} />
      <Header setView={setView} />
      <ManageDashBoard type={view} setView={setView} />
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
}

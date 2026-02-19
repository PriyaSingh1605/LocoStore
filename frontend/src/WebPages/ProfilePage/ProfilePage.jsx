import BackNav from "../../OuterParts/BackNav";
import Footer from "../../OuterParts/Footer";
import UserDetails from "./UserDetail";
import MgmtDetails from "./MgmtDetails";

import { useEffect, useState } from "react";
import axios from "axios";
export default function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data); 
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <BackNav backLink={"/"} />

        <div className="md:grid grid-cols-4 gap-4 flex-1 ">
          <div className="bg-amber-300 flex flex-col  justify-top gap-2 p-4">
            <UserDetails />
          </div>
          <div className="bg-red-300 col-span-3 p-4">
            <MgmtDetails user={user} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ProfilePage() {
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/profile", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setUsername(res.data.user); // 👈 string aa rahi hai
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return <div>{username ? `Welcome ${username}` : "Loading..."}</div>;
// }

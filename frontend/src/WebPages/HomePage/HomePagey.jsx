import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [cookies, , removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/verify",
          {},
          { withCredentials: true },
        );

        setUsername(data.user);
        toast.success(`Hello ${data.user}`, { toastId: "welcome" });
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  const Logout = async () => {
    await axios.post(
      "http://localhost:3000/logout",
      {},
      { withCredentials: true },
    );

    removeCookie("token", { path: "/" });
    navigate("/login");
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
        
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default HomePage;

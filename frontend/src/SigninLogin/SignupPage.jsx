import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function SignupPage() {
  const navigate = useNavigate();
  const parameters = [
    {
      id: 1,
      labelid: "username",
      label: "Username",
      type: "text",
    },
    {
      id: 2,
      labelid: "email",
      label: "Email",
      type: "text",
    },
    {
      id: 3,
      labelid: "password",
      label: "Password",
      type: "password",
    },
  ];

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/signup",
        {
          username: user.username,
          email: user.email,
          password: user.password,
        },
        {
          withCredentials: true, // ye zaruri hai cookies ke liye
        },
      );
      console.log(res);
      if (res.data.success) {
        setUser({ username: "", email: "", password: "" });
        navigate("/");
      }

      console.log(res.data);
    } catch (err) {
      console.log(err.response.data.message); // "User already exists"
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
        <div className="min-h-[60vh] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[30%] flex flex-col text-center bg-white border border-gray-400  rounded-xl shadow-md p-6">
          <h1 className="text-2xl text-center mb-6"> SIGNUP </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {parameters.map((key) => (
              <div className="flex flex-col gap-2 md:gap-4" key={key.labelid}>
                <label
                  className="md:w-40 text-left text-sm font-medium"
                  htmlFor={key.labelid}
                >
                  {key.label}
                </label>
                <input
                  type={key.type}
                  name={key.labelid}
                  value={user[key.labelid]}
                  id={key.labelid}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full md:flex-1 rounded-lg border border-gray-400 px-3 py-2"
                />
              </div>
            ))}
            <p>
              {" "}
              Already have an account ?
              <Link to="/login" className="text-blue-600">
                {" "}
                Login
              </Link>
            </p>
            <button
              type="submit"
              className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

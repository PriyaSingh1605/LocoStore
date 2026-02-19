import { Link, useNavigate } from "react-router-dom"; // <-- import useNavigate
import { useState } from "react";
import axios from "axios"; // Make sure axios is imported
export default function LoginPage() {
  const navigate = useNavigate();
  const parameters = [
    {
      id: 1,
      labelid: "email",
      label: "Email",
      type: "email",
    },
    {
      id: 2,
      labelid: "password",
      label: "Password",
      type: "password",
    },
  ];

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email: user.email,
          password: user.password,
        },
        { withCredentials: true },
      );

      console.log(res.data);

      if (res.data.success) {
        console.log("Login successful");
        navigate("/");
      } else {
        console.log("Login failed");
      }
    } catch (err) {
      console.log("Error:", err);
    }

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
        <div className="min-h-[50vh] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[30%] flex flex-col text-center bg-white border border-gray-400  rounded-xl shadow-md p-6">
          <h1 className="text-2xl text-center mb-6"> LOGIN </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {parameters.map((key) => (
              <div className="flex flex-col gap-2 md:gap-4" key={key.labelid}>
                <label className="md:w-40 text-left text-sm font-medium">
                  {key.label}
                </label>
                <input
                  type={key.type}
                  name={key.labelid}
                  value={user[key.labelid]}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-400 px-3 py-2 outline-none focus:outline-none focus:ring-0  "
                ></input>
              </div>
            ))}

            <p className="mt-10">
              {" "}
              Haven't an account ?
              <Link to="/signup" className="text-blue-600">
                {" "}
                Signup
              </Link>
            </p>

            <button
              type="submit"
              className=" w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/verify",
          {},
          { withCredentials: true },
        );
        setAuth(data.status);
      } catch {
        setAuth(false);
      }
    };

    verify();
  }, []);

  if (auth === null) return <h1>Loading...</h1>;

  return auth ? children : <Navigate to="/login" />;
}

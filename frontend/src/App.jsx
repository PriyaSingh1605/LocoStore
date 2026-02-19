import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./WebPages/HomePage/HomePage";
import LoginPage from "./SigninLogin/LoginPage";
import SignupPage from "./SigninLogin/SignupPage";
import ProfilePage from "./WebPages/ProfilePage/ProfilePage";
import ProductPage from "./WebPages/ProductPage/ProductPage";
import ProtectedRoute from "./WebPages/HomePage/ProtectedRoute";
import Dashboard from "./Dashboard/Dashboard"
import UpdateProduct from "./Dashboard/UpdateProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/product"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id/update"
          element={
            <ProtectedRoute>
              <UpdateProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

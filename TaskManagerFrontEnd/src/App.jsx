import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/Users/RegisterPage";
import LoginPage from "./pages/Users/LoginPage";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/Users/ProfilePage";
import MenuPage from "./pages/MenuPage";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
    </AuthProvider>
  );
}

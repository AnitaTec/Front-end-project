import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import RegisterPage from "./RegisterPage/RegisterPage.jsx";
import NotFoundPage from "./NotFoundPage/NotFoundPage.jsx";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;

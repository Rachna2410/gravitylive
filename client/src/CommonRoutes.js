import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/About-us/AboutUs";
import ChooseUs from "./components/Choose-us/ChooseUs";
import Courses from "./components/Courses-section/Courses";
import Features from "./components/Feature-section/Features";
import Footer from "./components/Footer/Footer";
import FreeCourse from "./components/Free-course-section/FreeCourse";
import Newsletter from "./components/Newsletter/Newsletter";
import Testimonials from "./components/Testimonial/Testimonials";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import PopularPages from "./pages/PopularPages";
import Login from "./components/Login/Login";
import SignUp from "./components/Sign-Up/SignUp";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import ProtectedRoutes from "./services/ProtectedRoutes";

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/" element={<Home />} exact />
      {/* Protect Routes */}
      <Route path="/" element={<ProtectedRoutes />} exact>
        <Route path="aboutus" element={<AboutUs />} exact />
        <Route path="courses" element={<Courses />} exact />
        <Route path="chooseus" element={<ChooseUs />} exact />
        <Route path="features" element={<Features />} exact />
        <Route path="freeCourse" element={<FreeCourse />} exact />
        <Route path="testimonials" element={<Testimonials />} exact />
        <Route path="newsletter" element={<Newsletter />} exact />
        <Route path="footer" element={<Footer />} exact />
        <Route path="pages" element={<PopularPages />} />
        <Route path="blog" element={<Blog />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
};

export default CommonRoutes;

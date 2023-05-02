import React, { useRef } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { Container } from "reactstrap";
import gravityImg from "../../assests/images/gravity.png";
import { getToken, removeToken } from "../../services/LocalStorageService";
import "./header.css";

// const navLinks = [
//   {
//     display: "Home",
//     url: "/",
//   },
//   {
//     display: "About",
//     url: "/aboutus",
//   },

//   {
//     display: "Courses",
//     url: "/courses",
//   },
//   {
//     display: "Pages",
//     url: "/pages",
//   },
//   {
//     display: "Blog",
//     url: "/blog",
//   },
//   {
//     display: "Login",
//     url: "/login",
//   },
// ];

const Header = () => {
  const navigate = useNavigate()
  const menuRef = useRef();
  const token = getToken('token')
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const handleLogout=()=>{
    removeToken('token');
    navigate('/login')
  }

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div>
            <h2 className=" d-flex align-items-center gap-1">
              <img src={gravityImg} alt=""   />
            </h2> 
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              
              <ul className="nav__list">
                
                <li className="nav__item">
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to={"/aboutus"}>About</NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to={"/courses"}>Courses</NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to={"/pages"}>Pages</NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to={"/blog"}>Blog</NavLink>
                  </li>
                <li className="nav__item">
                  {token? <NavLink to={"/"} onClick={handleLogout}>Logout</NavLink> : <NavLink to={"/login"}>Login</NavLink>}
                </li>
                <li className="nav__item">
                </li>
              </ul>
              
            </div>

            <div className="nav__right">
              <a href="tel:7737191159" >
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +91 7737191159
              </p>
              </a>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

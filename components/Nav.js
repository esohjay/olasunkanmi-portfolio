import Link from "next/link";
import React, { useState, useEffect } from "react";
import navStyles from "../styles/Nav.module.css";

const Nav = ({ background }) => {
  const [showNav, setShowNav] = useState(false);
  const [fixedNav, setFixedNav] = useState("");
  const handleScroll = () => {
    if (window.pageYOffset > 80) {
      setFixedNav("navbar-fixed");
    } else {
      setFixedNav("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // Start of Nav section
    <nav className={`h-[55px] ${fixedNav} `}>
      {/* Navbar */}
      <div
        className={`flex justify-between h-[100%] items-center p-5  text-white ${background}`}
      >
        {/* Logo */}
        <h3 className="font-bold">Olasunkanmi</h3>
        {/* Hamburger Icon */}
        <button
          onClick={() => setShowNav(!showNav)}
          id="menu-btn"
          className={`${showNav ? "open" : ""} hamburger md:hidden`}
        >
          <span className="hamburgerTop"></span>
          <span className="hamburgerMiddle"></span>
          <span className="hamburgerBottom"></span>
        </button>
        {/* Big screen nav links */}
        <ul className="hidden space-x-6 md:flex justify-center w-[60%] font-bold items-center bg-transparent  ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#project">Projects</Link>
          </li>
          <li>
            <Link href="#service">Services</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className={`${
          showNav ? "flex" : "hidden"
        } w-[100%] transition-all duration-700`}
      >
        <ul className="flex flex-col w-[100%] justify-center items-center bg-white py-6 ">
          <li className="py-3 w-[100%] pl-3 text-mainColor hover:text-white cursor-pointer font-bold transition-all duration-500 hover:bg-mainColor">
            <Link href="/">Home</Link>
          </li>
          <li className="py-3 w-[100%] pl-3 text-mainColor hover:text-white cursor-pointer font-bold transition-all duration-500 hover:bg-mainColor">
            <Link href="#about">About</Link>
          </li>
          <li className="py-3 w-[100%] pl-3 text-mainColor hover:text-white cursor-pointer font-bold transition-all duration-500 hover:bg-mainColor">
            <Link href="#project">Projects</Link>
          </li>
          <li className="py-3 w-[100%] pl-3 text-mainColor hover:text-white cursor-pointer font-bold transition-all duration-500 hover:bg-mainColor">
            <Link href="#service">Services</Link>
          </li>
          <li className="py-3 w-[100%] pl-3 text-mainColor hover:text-white cursor-pointer font-bold transition-all duration-500 hover:bg-mainColor">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .hamburger {
            cursor: pointer;
            width: 24px;
            height: 24px;
            transition: all 0.25s;
            position: relative;
          }

          .hamburgerTop,
          .hamburgerMiddle,
          .hamburgerBottom {
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 2px;
            background: white;
            transform: rotate(0);
            transition: all 0.5s;
          }

          .hamburgerMiddle {
            transform: translateY(7px);
          }

          .hamburgerBottom {
            transform: translateY(14px);
          }

          .open {
            transform: rotate(90deg);
            transform: translateY(0px);
          }

          .open .hamburgerTop {
            transform: rotate(45deg) translateY(6px) translate(6px);
          }

          .open .hamburgerMiddle {
            display: none;
          }

          .open .hamburgerBottom {
            transform: rotate(-45deg) translateY(6px) translate(-6px);
          }
          .navbar-fixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #407899;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
            z-index: 2;
          }
        `}
      </style>
    </nav>
    // End of nav
  );
};
Nav.defaultProps = {
  background: "bg-mainColor",
};
export default Nav;

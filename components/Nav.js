import Link from "next/link";
import React, { useState, useEffect } from "react";

const Nav = ({ background }) => {
  const [showNav, setShowNav] = useState(false);
  const [fixedNav, setFixedNav] = useState("");
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
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
    <nav className={`h-[60px] ${fixedNav} relative z-10  `}>
      {/* Navbar */}
      <div
        className={`flex justify-between h-[100%] items-center p-5  text-white ${
          showNav ? "bg-mainColor" : background
        }`}
      >
        {/* Logo */}
        <h3 className="font-bold text-2xl">
          <Link href={"/"}>
            <a>Olasunkanmi</a>
          </Link>
        </h3>
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
      {/* Small Screen */}
      <div
        className={`${
          showNav ? "flex" : "hidden"
        } w-[100%] transition-all duration-700 `}
      >
        <ul className="flex flex-col w-[100%] justify-center items-center bg-mainColor py-6 ">
          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%] px-5 text-white hover:bg-white hover:text-mainColor cursor-pointer font-bold transition-all duration-500 "
          >
            <Link href="/">
              <a className="py-5 block text-center  ">Home</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%] px-5 text-white hover:bg-white hover:text-mainColor cursor-pointer font-bold transition-all duration-500 "
          >
            <Link href="#about">
              <a className="py-5 block text-center  ">About</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%] px-5 text-white hover:bg-white hover:text-mainColor cursor-pointer font-bold transition-all duration-500 "
          >
            <Link href="#project">
              <a className="py-5 block text-center  ">Projects</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%] px-5 text-white hover:bg-white hover:text-mainColor cursor-pointer font-bold transition-all duration-500 "
          >
            <Link href="#service">
              <a className="py-5 block text-center  ">Services</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%] px-5 text-white hover:bg-white hover:text-mainColor cursor-pointer font-bold transition-all duration-500 "
          >
            <Link href="#contact">
              <a className="py-5 block text-center  ">Contact</a>
            </Link>
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
            z-index: 100;
            animation: 1000ms ease-in-out 0s normal none 1 running fadeInDown;
          }
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
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

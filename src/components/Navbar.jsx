import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import close from "../assets/close.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-[150px] h-[32px] bg-primary" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`} className="hover:text-white">{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <img
            src={close}
            alt="close"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(false)}
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(true)}
            className="w-[28px] h-[28px] object-contain cursor-pointer text-secondary"
          />
        )}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar mt-0`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <Link to={`/${nav.id}`} className="hover:text-white">{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

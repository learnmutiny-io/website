import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import footerlogo from "../assets/footerlogo.png";
import close from "../assets/close.svg";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar fixed top-0 z-50 bg-primary sm:pr-[140px] pr-[35px]">
      <Link
        to="/"
        className="flex items-center"
        onClick={() => setActive("Home")}
      >
        <img
          src={footerlogo}
          alt="logo"
          className="w-[80px] h-[80px] bg-primary"
        />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-[16px] ${active === nav.title ? "text-lightPink" : "text-white"
              } ${active === "signup" && nav.title === "signup" ? "border border-white" : ""
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${nav.title === "signup" ? "bg-dimPrimary" : ""
              } `}
            style={nav.title === "signup" ? styles.signUpContainer : {}}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`} className="hover:text-lightPink" >
              {nav.title}
            </Link>
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
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar mt-0`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <Link to={`/${nav.id}`} className="hover:text-white">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

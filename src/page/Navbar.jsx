import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Bio } from "../data/Bio";

const navbarContainer = `flex justify-between items-center bg-gray-950 py-4 px-4 lg:px-10`;
const logoWrapper = `flex justify-center items-center gap-2 cursor-pointer`;
const logo = ` text-xl text-amber-600 font-bold`;
const nav = ` hidden md:flex justify-center items-center list-none gap-10 `;
const navLink = `hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer`;
const btnSytle =
  "hidden lg:flex bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 text-gray-950 rounded-lg p-3 px-8";
const faWrapper =
  "md:hidden cursor-pointer text-cyan-600 hover:text-cyan-400 duration-200";
const mobileNav = "md:hidden h-screen bg-gray-950 w-1/2 fixed right-0 p-2";
const mobileNavUl = "flex flex-col gap-7 justify-center items-center";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const sections = ["About", "skills", "projects", "contact"];

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="sticky top-0 text-cyan-600 z-10">
        <div className={navbarContainer}>
          <div onClick={() => scrollToTop()} className={logoWrapper}>
            <div className={logo}>{Bio.name}</div>
          </div>
          <div className={nav}>
            {sections &&
              sections.map((section, index) => (
                <li key={index} className={navLink}>
                  <Link to={section} smooth duration={500}>
                    {capitalizeFirstLetter(section)}
                  </Link>
                </li>
              ))}
          </div>
          <button className={btnSytle}>
            <a href={Bio.linkedin} target="_blank">
              LinkedIn
            </a>
          </button>
          <div onClick={() => setIsMobile(!isMobile)} className={faWrapper}>
            {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        {isMobile && (
          <div className={mobileNav}>
            <ul className={mobileNavUl}>
              {sections &&
                sections.map((section, index) => (
                  <li key={index} className={navLink}>
                    <Link
                      onClick={() => setIsMobile(!isMobile)}
                      to={section}
                      smooth
                      duration={500}
                    >
                      {capitalizeFirstLetter(section)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

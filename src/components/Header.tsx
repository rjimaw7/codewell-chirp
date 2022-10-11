import React, { MouseEventHandler, useState } from "react";
import TwitterWhite from "../assets/Twitter.svg";
import Hamburger from "../assets/Hamburger Menu.svg";
import CloseBTN from "../assets/Close.svg";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const burger = event.currentTarget.children[1];

    if (burger.classList.contains("hidden")) {
      burger.classList.remove("hidden");
      setIsActive(true);
    } else {
      burger.classList.add("hidden");
      setIsActive(false);
    }
  };

  return (
    <header className="bg-bgColor">
      <nav className="relative container mx-auto flex justify-between items-center p-5 md:flex-row">
        <h2 className="cursor-pointer font-bold text-lg text-blueColor">
          Chirp.
        </h2>

        {/* Menu Items */}
        <ul className="hidden text-greyColor md:flex flex-row items-center space-x-8 cursor-pointer">
          <li>Home</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li className="bg-blueColor text-white rounded-md p-3 flex cursor-pointer">
            <img className="mr-1" src={TwitterWhite} alt="twitterwhite" /> Sign
            in with Twitter
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div onClick={toggleClick} className="block cursor-pointer md:hidden">
          <img src={isActive ? CloseBTN : Hamburger} alt="hamburger-menu" />

          <div
            id="menu"
            className="hidden absolute items-center py-10 mt-9 font-bold bg-bgColor
            sm:w-auto sm:self-center left-5 right-5
            "
          >
            <ul className="text-lg flex flex-col justify-center items-center space-y-4 ">
              <li>Home</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li className="bg-blueColor text-white rounded-md p-3 flex cursor-pointer">
                <img className="mr-1" src={TwitterWhite} alt="twitterwhite" />{" "}
                Sign in with Twitter
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

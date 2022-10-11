import React from "react";
import TwitterBlack from "../assets/Twitter (Black).svg";

const Footer = () => {
  return (
    <section id="footer" className="bg-skyBlueColor">
      <footer className="container mx-auto p-5 md:flex md:justify-between md:items-center">
        <h2 className="cursor-pointer font-bold text-lg text-blueColor">
          Chirp.
        </h2>
        <div className="flex items-center gap-5 text-lg cursor-pointer mt-2">
          <img src={TwitterBlack} alt="twitterblack" />
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

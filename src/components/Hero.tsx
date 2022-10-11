import TwitterWhite from "../assets/Twitter.svg";
import Avatar1 from "../assets/userAvatar01.svg";
import Avatar2 from "../assets/userAvatar02.svg";
import Avatar3 from "../assets/userAvatar03.svg";
import Avatar4 from "../assets/userAvatar04.svg";
import Avatar5 from "../assets/userAvatar05.svg";
import Avatar6 from "../assets/userAvatar06.svg";
import Avatar7 from "../assets/userAvatar07.svg";
import Avatar8 from "../assets/userAvatar08.svg";
import Avatar9 from "../assets/userAvatar09.svg";
import HeroTablet from "../assets/Hero Image (Tablet View).png";
import HeroDesktop from "../assets/Hero Image (Desktop View).png";

const Hero = () => {
  return (
    <section id="hero" className="bg-bgColor">
      <div className="container mx-auto p-5 flex flex-col-reverse md:flex-col-reverse lg:flex-row ">
        {/* Left Item */}
        <div className="md:mt-16">
          <h1 className="text-4xl font-bold text-left md:text-6xl md:text-left">
            Twitter analytics taken to a whole new level.
          </h1>
          <p className="text-greyColor mt-2 text-lg">
            Chirp is a suite of Twitter analytics that will help you better
            understand your audience, which tweets they like, and most
            importantly, when they are the most active on Twitter.
          </p>

          <div className="mt-3 md:flex md:items-center md:gap-2">
            <button className="bg-blueColor text-white rounded-md p-3 flex items-center w-full justify-center md:w-1/3">
              <img className="mr-1" src={TwitterWhite} alt="twitterwhite" />{" "}
              Sign in with Twitter
            </button>

            <p className="text-blueColor text-center my-4 cursor-pointer">
              Learn more &#8594;
            </p>
          </div>

          <div className="hero-images flex my-4 ">
            <img className="" src={Avatar1} alt="" />
            <img className="-ml-4 md:-ml-6" src={Avatar2} alt="" />
            <img className="-ml-4 md:-ml-6" src={Avatar3} alt="" />
            <img className="-ml-4 md:-ml-6" src={Avatar4} alt="" />
            <img className="-ml-4 md:-ml-6" src={Avatar5} alt="" />
            <img className="-ml-4 md:-ml-6" src={Avatar6} alt="" />
            <img className="-ml-4 md:-ml-6" src={Avatar7} alt="" />
            <img className="-ml-4 md:-ml-6" src={Avatar8} alt="" />
            <img className="-ml-4 md:-ml-6" src={Avatar9} alt="" />
          </div>

          <p className="text-greyColor text-lg md:w-2/3">
            Join <span className="text-blueColor">195</span> other who have
            analyzed their followers and scheduled{" "}
            <span className="text-blueColor">1342</span> tweets!
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-5 md:flex md:justify-end">
          <img
            className="lg:w-2/3 md:hidden lg:block"
            src={HeroDesktop}
            alt="herotablet"
          />
          <div>
            <img
              className="hidden md:block lg:hidden"
              src={HeroTablet}
              alt="herotablet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

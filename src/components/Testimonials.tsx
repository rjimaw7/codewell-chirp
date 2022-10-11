import TwitterBlue from "../assets/Twitter (Blue).svg";
import Avatar1 from "../assets/userAvatar01.svg";
import Avatar5 from "../assets/userAvatar05.svg";
import Avatar7 from "../assets/userAvatar07.svg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-skyBlueColor">
      <div className="container mx-auto p-5 grid grid-cols-1">
        <h2 className="py-5 font-bold text-4xl text-left w-96 md:max-w-md lg:w-full lg:max-w-md">
          What our customers say
        </h2>

        <div
          id="boxes"
          className="items-center lg:mb-12 lg:grid lg:grid-cols-3 lg:gap-4"
        >
          <div className="border border-transparent p-5 bg-white rounded-md mb-5 lg:mb-0">
            <div className="relative flex flex-row justify-between">
              <img className="" src={Avatar1} alt="" />
              <div className="flex flex-col items-center absolute left-12">
                <h2 className="font-bold text-lg">Sara May</h2>
                <p className="text-greyColor -mt-1">@sara_may</p>
              </div>
              <img src={TwitterBlue} alt="twitterblue" />
            </div>

            <p className="text-greyColor py-3 text-lg">
              I just tried out @chirp and it's amazing, love all the analytics I
              can see.
            </p>

            <div className="flex flex-row justify-between">
              <span>&#128148; 2</span>
              <p>March 2, 2021</p>
            </div>
          </div>

          <div className="border border-transparent p-5 bg-white rounded-md mb-5 lg:mb-0 lg:translate-y-7">
            <div className="relative flex flex-row justify-between">
              <img className="" src={Avatar7} alt="" />
              <div className="flex flex-col items-center absolute left-12">
                <h2 className="font-bold text-lg">Jack Scott</h2>
                <p className="text-greyColor -mt-1">@jackscott</p>
              </div>
              <img src={TwitterBlue} alt="twitterblue" />
            </div>

            <p className="text-greyColor py-3 text-lg">
              I initially started using Chirp to support the co-founder as I
              personally knew him, but after having tried it out for a few
              weeks, I can genuinely say this changed my Twitter game.
            </p>

            <div className="flex flex-row justify-between">
              <span>&#128148; 32</span>
              <p>March 2, 2021</p>
            </div>
          </div>

          <div className="border border-transparent p-5 bg-white rounded-md mb-5 lg:mb-0">
            <div className="relative flex flex-row justify-between">
              <img className="" src={Avatar5} alt="" />
              <div className="flex flex-col items-center absolute left-12">
                <h2 className="font-bold text-lg">Jessica May</h2>
                <p className="text-greyColor -mt-1">@jmay98987</p>
              </div>
              <img src={TwitterBlue} alt="twitterblue" />
            </div>

            <p className="text-greyColor py-3 text-lg">
              Absolutely love everything about Chrip, from the design to how
              everything works smoothly.
            </p>

            <div className="flex flex-row justify-between">
              <span>&#128148; 221</span>
              <p>March 2, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

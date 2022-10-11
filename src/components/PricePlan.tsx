import TwitterWhite from "../assets/Twitter.svg";
import Verified from "../assets/Checkmark.svg";

const PricePlan = () => {
  return (
    <section id="pricing">
      <div className="container mx-auto p-5 flex flex-col items-center mt-10">
        <div className="text-center">
          <h2 className="font-bold text-4xl">One simple price plan.</h2>
          <p className="text-lg text-greyColor mt-4 mb-8 max-w-lg">
            Start growing your Twitter account by analyzing your follower's
            patterns.
          </p>
        </div>
        <div className="border border-orange-400 bg-bgColor rounded-md p-5 lg:mt-7">
          <div className="mb-6">
            <p className="text-greyColor text-lg">Monthly</p>
            <p className="text-greyColor text-lg">
              <span className="font-bold text-black text-5xl">$9</span>/mo
            </p>
          </div>

          <div className="text-lg border-y-2 border-greyColor">
            <div className="py-4">
              <div className="flex gap-4">
                <img src={Verified} alt="" />
                <p>Unlimited* scheduled tweets and threads </p>
              </div>

              <div className="flex gap-4 py-4">
                <img src={Verified} alt="" />
                <p>Schedule up to 3 weeks in advance. </p>
              </div>

              <div className="flex gap-4">
                <img src={Verified} alt="" />
                <p>
                  Real-time audience analytics tracking up to 5k followers.{" "}
                </p>
              </div>
            </div>
          </div>

          <button className="bg-blueColor text-white rounded-md p-3 flex items-center mt-5 w-full justify-center md:w-1/3 lg:w-full">
            <img className="mr-1" src={TwitterWhite} alt="twitterwhite" /> Start
            Trial with Twitter
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricePlan;

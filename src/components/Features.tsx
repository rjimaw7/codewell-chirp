const Features = () => {
  return (
    <section id="features">
      <div className="container mx-auto p-5 grid grid-cols-1">
        <h2 className="py-5 font-bold text-4xl text-left md:max-w-md lg:max-w-md">
          Features that help you Tweet smarter.
        </h2>
        <div id="boxes" className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="border border-greyColor rounded-md p-5 text-greyColor mb-5">
            <span className="text-3xl">&#128578;</span>
            <h3 className="font-bold text-black text-xl py-2">Analytics</h3>
            <p>
              We constantly monitor your audience as it grows &#8212; so you can
              Tweet when your followers are most likely to be online and ready
              to engage with your content{" "}
            </p>
          </div>

          <div className="border border-greyColor rounded-md p-5 text-greyColor mb-5">
            <span className="text-3xl">&#128578;</span>
            <h3 className="font-bold text-black text-xl py-2">
              Smart Analyzer
            </h3>
            <p>
              Chirp automatically recognizes your followers most active times
              and automatically sends you notifications if you're missing out on
              an opportunity.
            </p>
          </div>

          <div className="border border-greyColor rounded-md p-5 text-greyColor mb-5">
            <span className="text-3xl">&#128578;</span>
            <h3 className="font-bold text-black text-xl py-2">
              Scheduled Your Tweets
            </h3>
            <p>
              Quality tweets drive tons of engagement. With Chirp, youcan write
              tweets in an advance and scheduled them when your audience is most
              likely to read.
            </p>
          </div>

          <div className="border border-greyColor rounded-md p-5 text-greyColor mb-5">
            <span className="text-3xl">&#128578;</span>
            <h3 className="font-bold text-black text-xl py-2">Dark Mode</h3>
            <p>
              Friendly on the eyes, no matter what time you wrtie your Tweets.
              All colors are chosen to make sure your eyes are at ease at all
              times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

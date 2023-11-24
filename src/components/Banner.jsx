import bannerImg from '../assets/bannerImg.jpg'
const Banner = () => {
    const bannerBg = {
        background: `url(${bannerImg}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
      };
  return (
    <div
      className="hero min-h-screen"
      style={bannerBg}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-full justify-start text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-[#D7FBE8] font-bold">
            Find Your Dream Home Today
          </h1>
          <p className="mb-5">
            With a commitment to crafting
            remarkable spaces, we redefine luxury living, offering bespoke homes
            that resonate with your aspirations.
          </p>
          <button className="btn bg-[#1F8A70] text-[#D7FBE8] hover:bg-[#00425A] border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

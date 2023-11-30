import about from "../assets/img_1.jpg"

const AboutSecion = () => {
    return (
        <div className="py-20 flex lg:flex-row flex-col-reverse items-center">
            <div className="lg:w-1/2 pr-5 space-y-10">
            <h3 className="sm:text-4xl text-3xl font-bold text-[#1F8A70] pt-5">Unlocking Opportunities in Real Estate</h3>
            <p className="text-[#00425A]">At KeyStone, we redefine real estate experiences. Our platform offers a seamless journey for buyers, sellers, and investors alike, providing comprehensive services and personalized assistance at every step.</p>
            </div>
            <div className="overflow-hidden rounded-xl lg:w-1/2"><img src={about} alt="" /></div>
        </div>
    );
};

export default AboutSecion;
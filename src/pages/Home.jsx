import AboutSecion from "../components/AboutSecion";
import AdvertiseSecion from "../components/AdvertiseSecion";
import Banner from "../components/Banner";
import Container from "../components/Container";
import ReviewSecion from "../components/ReviewSecion";
import SpecialOffers from "../components/SpecialOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <AboutSecion />
        <AdvertiseSecion />
      </Container>
      <SpecialOffers/>
      <Container data="pb-20">
        <ReviewSecion />
      </Container>
    </>
  );
};

export default Home;

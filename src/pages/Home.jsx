import AdvertiseSecion from "../components/AdvertiseSecion";
import Banner from "../components/Banner";
import Container from "../components/Container";
import ReviewSecion from "../components/ReviewSecion";

const Home = () => {
  return (
    <>
      <Banner />
      <Container data="pb-20">
        <AdvertiseSecion/>
        <ReviewSecion />
      </Container>
    </>
  );
};

export default Home;

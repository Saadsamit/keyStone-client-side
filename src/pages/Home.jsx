import Banner from "../components/Banner";
import Container from "../components/Container";
import ReviewSecion from "../components/ReviewSecion";

const Home = () => {
  return (
    <>
      <Banner />
      <Container data="pb-20">
        <ReviewSecion />
      </Container>
    </>
  );
};

export default Home;

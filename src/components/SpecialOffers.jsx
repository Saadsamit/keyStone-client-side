import { Link } from 'react-router-dom';
import specialImg from '../assets/bg-info3.jpg'
import Container from './Container';

const SpecialOffers = () => {
    return (
        <div style={{backgroundImage: `url(${specialImg})`}} className='hero bg-cover bg-no-repeat mt-20 mb-10'>
  <div className="hero-overlay bg-opacity-60"></div>
  <Container>
  <div className="hero-content !justify-start !items-start text-neutral-content py-10">
    <div className='lg:w-1/2'>
      <h1 className="mb-5 md:text-5xl text-4xl font-bold text-[#D7FBE8]">Special Offers Every Day.</h1>
      <p className="mb-5">We Help you find the best places and offer near you. Bring to the table win-win survival strategies to ensure proactive domination going forward.</p>
      <Link to={'/login'} className="btnStyle border-none">Get Started</Link>
    </div>
  </div>
  </Container>
</div>
    );
};

export default SpecialOffers;
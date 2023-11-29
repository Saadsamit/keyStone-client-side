import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation } from 'swiper/modules';
const Slider = ({children,isTrue}) => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768:{
                slidesPerView:2
            }
        }}
        navigation={!isTrue}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    );
};
Slider.propTypes={
    children: PropTypes.node.isRequired,
    isTrue: PropTypes.bool
}
export default Slider;
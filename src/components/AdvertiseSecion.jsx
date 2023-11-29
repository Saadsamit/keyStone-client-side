import { SwiperSlide } from "swiper/react";
import GetAdvertise from "../api/getAdvertise";
import LoadingCards from "./LoadingCards";
import Slider from "./Slider";
import PropertiesCard from "./PropertiesCard";

const AdvertiseSecion = () => {
  const [data, isPending] = GetAdvertise();
  if (isPending) {
    return <LoadingCards />;
  }
  return (
    data.length && (
      <div>
        <h2 className="text-[#1F8A70] text-4xl font-bold text-center py-10">
          Advertisement
        </h2>
        <Slider isTrue={true}>
          {data?.map((Data) => (
            <SwiperSlide key={Data?._id}>
              <PropertiesCard data={Data} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    )
  );
};

export default AdvertiseSecion;

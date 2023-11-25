import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Container from "./../components/Container";
import MyModal from "../components/MyModal";
import { useState } from "react";
import ReviewSecion from "../components/ReviewSecion";
const PropertiesDetail = () => {
  const { id } = useParams();
  const axios = useAxiosPrivate();
  let [isOpen, setIsOpen] = useState(false)

  const closeModal = ()=> {
    setIsOpen(false)
  }

  const openModal = ()=> {
    setIsOpen(true)
  }

  const detailData = async () => {
    const { data } = await axios(`/Properties/${id}`);
    return data;
  };
  const { data = {} } = useQuery({
    queryKey: ["Detail-Data"],
    queryFn: detailData,
  });
  console.log(data);
  return (
    <Container data={"py-10 space-y-4"}>
      <div className="h-[70vh] overflow-hidden rounded-xl">
        <img src={data?.property?.image} className="w-full h-full" alt="" />
      </div>
      <h2 className="card-title">
          {data?.property?.title}
          <div className="badge bg-[#1F8A70] text-[#D7FBE8]">{data.status}</div>
        </h2>
      <div className="avatar cursor-pointer flex items-center gap-2">
        <div className="w-8 rounded-full">
          <img src={data?.agent?.image} />
        </div>
        <p>{data?.agent?.name}</p>
      </div>
      <p>{data?.property?.details}</p>
      <p>{data?.property?.PriceRange}</p>
      <button className="btnStyle" onClick={openModal}>Add to wishlist</button>
      <MyModal isOpen={isOpen} closeModal={closeModal} >
      <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
      </MyModal>
      <ReviewSecion/>
    </Container>
  );
};

export default PropertiesDetail;

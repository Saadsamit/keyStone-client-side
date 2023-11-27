import { Navigate, useParams } from "react-router-dom";
import Container from "./../components/Container";
import MyModal from "../components/MyModal";
import { useState } from "react";
import ReviewSecion from "../components/ReviewSecion";
import Spiner from "../components/Spiner";
import Detail from "../api/PropetiesDetail/Detail";
import useRole from "../api/useRole";

const PropertiesDetail = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [role] = useRole("client");
  const [data, isPending] = Detail(id);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spiner isTrue={false} />
      </div>
    );
  }
  if (data.error) {
    return <Navigate to={"/"} />;
  }
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
      {role && (
        <button className="btnStyle" onClick={openModal}>
          Add to wishlist
        </button>
      )}
      <MyModal isOpen={isOpen} closeModal={closeModal}>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Payment successful
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
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
      <ReviewSecion
        id={data?._id}
        title={data?.property?.title}
        AgentName={data?.agent?.image}
        isTrue={true}
      />
    </Container>
  );
};

export default PropertiesDetail;

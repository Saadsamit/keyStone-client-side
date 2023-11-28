import { loadStripe } from "@stripe/stripe-js";
import GetMyPropertie from "../../../api/getMyPropertie";
import MyPropertieCard from "../../../components/MyPropertieCard";
import NoDataFound from "../../../components/NoDataFound";
import Loading from "./../../../components/Loading";
import { useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const MyProperty = () => {
  const axios = useAxiosPrivate();
  const stripePromise = loadStripe(import.meta.env.VITE_Stripe_key);
  const [MyPropertyData, isPending, refetch] = GetMyPropertie();
  const [clientSecret, setClientSecret] = useState("");
  if (isPending) {
    return <Loading />;
  }
  const handleSecret = (price) => {
    axios.post("/create-payment-intent", { price  }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  };

  return (
    <div>
      <h2 className="text-xl py-5 text-center text-[#1F8A70]">My reviews</h2>
      <NoDataFound data={MyPropertyData}>
        <div className="grid lg:grid-cols-2 gap-4 p-5">
          {MyPropertyData.map((data) => (
            <MyPropertieCard
              stripePromise={stripePromise}
              handleSecret={handleSecret}
              clientSecret={clientSecret}
              refetch={refetch}
              key={data?._id}
              data={data}
            />
          ))}
        </div>
      </NoDataFound>
    </div>
  );
};

export default MyProperty;

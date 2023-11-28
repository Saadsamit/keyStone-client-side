import PropTypes from "prop-types";
import MyModal from "./MyModal";
import { useState } from "react";
import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
const MyPropertieCard = ({
  data: cardData,
  handleSecret,
  clientSecret,
  refetch
}) => {
  const axios = useAxiosPrivate()
  const [isOpen, setIsOpen] = useState(false);
  const elements = useElements();
  const stripe = useStripe();
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!elements || !stripe || !clientSecret){
      return toast.error('payment fail')
    }
    const card = elements.getElement(CardElement)
    if(card === null){
      return toast.error('payment fail')
    }
    const {error} = await stripe.createPaymentMethod({
      type: "card",
      card
    })
    if(error){
      return toast.error(error.message)
    }
    const {paymentIntent} = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: card,
        billing_details:{
          email: cardData?.userEmail,
          name: cardData?.userName
        }
      }
    })
    if(paymentIntent){
      axios.put(`/update-PropertyBought/${cardData._id}`,{id: paymentIntent.id}).then(()=>{
        setIsOpen(false)
        refetch()
        toast.success('Payment Successfully')
      })
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={cardData.property.image} alt="Shoes" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <div className="avatar cursor-pointer flex items-center gap-2">
          <div className="w-8 rounded-full">
            <img src={cardData.agent.image} />
          </div>
          <p>{cardData.agent.name}</p>
        </div>
        <h2 className="card-title items-start">
          {cardData.property.title}
          <div
            className={`badge ${
              cardData.status === "verified" ||
              cardData.status === "accepted" ||
              cardData.status === "bougth"
                ? "bg-[#1F8A70]"
                : cardData.status === "pending"
                ? "bg-[#FC7300]"
                : "bg-red-500"
            } text-[#D7FBE8]`}
          >
            {cardData.status}
          </div>
        </h2>
        <p>{cardData.property.location}</p>
        <p>${cardData?.offerAmount}</p>
        {cardData.status === "accepted" && (
          <button
            className="btnStyle w-ful"
            onClick={() => {
              openModal();
              handleSecret(cardData?.offerAmount);
            }}
          >
            buy
          </button>
        )}
        <MyModal isOpen={isOpen} closeModal={closeModal}>
            <form onSubmit={handleSubmit}>
              <h3>Amount ${cardData?.offerAmount}</h3>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="btnStyle" disabled={!stripe || !elements || !clientSecret}>buy</button>

            </form>
        </MyModal>
      </div>
    </div>
  );
};
MyPropertieCard.propTypes = {
  data: PropTypes.object,
  handleSecret: PropTypes.func,
  clientSecret: PropTypes.string,
  refetch: PropTypes.func
};

export default MyPropertieCard;

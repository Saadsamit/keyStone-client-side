import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MyModal from "./MyModal";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { myAuthProvider } from "../provider/AuthProvider";
import toast from "react-hot-toast";
const PropertiesCard = ({ data:cardData, isTrue, handleDelete }) => {
  const {register,handleSubmit} = useForm()
  const {user} = useContext(myAuthProvider)
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const onSubmit = data=>{
    const price = cardData.property.PriceRange.replace(/\$/g, "").split("-")
    const num1 = parseInt(price[0])
    const num2 = parseInt(price[1])
    const offerAmount = parseInt(data.offeramount)
    if(num1 < offerAmount && num2 > offerAmount ){
      //the post here
    }else{
      toast.error(`enter number between ${num1} - ${num2}`)
    }
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={cardData.property.image} alt="Shoes" className="w-full" />
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
          <div className="badge bg-[#1F8A70] text-[#D7FBE8]">{cardData.status}</div>
        </h2>
        <p>{cardData.property.location}</p>
        <p>{cardData.property.PriceRange}</p>
        <div className="card-actions justify-end">
          {isTrue ? (
            <>
              <button
                className="btn bg-red-500 text-white hover:bg-red-600 w-full"
                onClick={() => handleDelete(cardData._id)}
              >
                remove property
              </button>
              <button className="btnStyle w-full" onClick={openModal}>
                Make an offer
              </button>
            </>
          ) : (
            <Link to={`/Properties-Detail/${cardData._id}`} className="btnStyle">
              see details
            </Link>
          )}
        </div>
        <MyModal isOpen={isOpen} closeModal={closeModal}>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="Propertytitle">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                Property title
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="Propertytitle"
                disabled
                defaultValue={cardData?.property?.title}
                placeholder="Property title"
                className="input input-bordered border-[#1F8A70] disabled:text-black focus:outline-[#1F8A70]"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="Propertylocation">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                Property location
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="Propertylocation"
                disabled
                defaultValue={cardData?.property?.location}
                placeholder="Property location"
                className="input input-bordered border-[#1F8A70] disabled:text-black focus:outline-[#1F8A70]"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="Agentname">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                Agent name
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="Agentname"
                disabled
                defaultValue={cardData?.agent?.name}
                placeholder="Property title"
                className="input input-bordered border-[#1F8A70] disabled:text-black focus:outline-[#1F8A70]"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="PriceRange">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                Price Range
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="PriceRange"
                disabled
                defaultValue={cardData.property.PriceRange}
                placeholder="Price Range"
                className="input input-bordered border-[#1F8A70] disabled:text-black focus:outline-[#1F8A70]"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="buyerEmail">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                buyer Email
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="buyerEmail"
                disabled
                defaultValue={user?.email}
                placeholder="buyer Email"
                className="input input-bordered border-[#1F8A70] disabled:text-black focus:outline-[#1F8A70]"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="buyername">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                buyername
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="buyername"
                disabled
                defaultValue={user?.displayName}
                placeholder="buyer name"
                className="input input-bordered border-[#1F8A70] disabled:text-black focus:outline-[#1F8A70]"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="offeramount">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                offer amount
                </span>
              </label>
              <input
                type="number"
                name="name"
                id="offeramount"
                {...register("offeramount", { required: true })}
                placeholder="enter offer amount"
                className="input input-bordered border-[#1F8A70] disabled:text-black focus:outline-[#1F8A70]"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btnStyle">make offer</button>
            </div>
          </form>
        </MyModal>
      </div>
    </div>
  );
};
PropertiesCard.propTypes = {
  data: PropTypes.object,
  isTrue: PropTypes.bool,
  handleDelete: PropTypes.func,
};

export default PropertiesCard;

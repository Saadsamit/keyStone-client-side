import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AgentPropertieCard = ({ data: cardData,handleDelete }) => {
    
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
        {cardData.status === "rejected" || (
          <Link to={`/Dashboard/update-propertie/${cardData?._id}`} className="btnStyle w-full">update</Link>
        )}
        <button onClick={()=>handleDelete(cardData?._id)} className="btnStyle !bg-red-500 w-full">delete</button>
      </div>
    </div>
  );
};
AgentPropertieCard.propTypes = {
  data: PropTypes.object,
  handleDelete: PropTypes.func
};

export default AgentPropertieCard;

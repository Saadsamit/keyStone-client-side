import PropTypes from "prop-types";
const RequestedPropertiesCard = ({ data,handleClick}) => {
  return (
    <div className="card bg-[#D7FBE8]">
      <div className="card-body text-[#1F8A70]">
            <h2 className="card-title">Property Title: {data?.property?.title}</h2>
        <h2>Property Location: {data?.property?.location}</h2>
        <h2>Buyer Name: {data?.userName}</h2>
        <h2>Buyer Email: {data?.userEmail}</h2>
        <h2>Offered Price: ${data?.offerAmount}</h2>
        <button onClick={()=>handleClick(data._id,'accepted',data.agent.email,data.propertyId)} className="btnStyle">accepted</button>
        <button onClick={()=>handleClick(data._id,'rejected')} className="btnStyle !bg-red-500 w-full">rejected</button>
      </div>
    </div>
  );
};
RequestedPropertiesCard.propTypes = {
    data: PropTypes.object,
    handleClick: PropTypes.func
};
export default RequestedPropertiesCard;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PropertiesCard = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={data.property.image} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
      <div className="avatar cursor-pointer flex items-center gap-2">
          <div className="w-8 rounded-full">
            <img src={ data.agent.image} />
          </div>
          <p>{data.agent.name}</p>
        </div>
        <h2 className="card-title">
          {data.property.title}
          <div className="badge bg-[#1F8A70] text-[#D7FBE8]">{data.status}</div>
        </h2>
        <p>{data.property.location}</p>
        <p>{data.property.PriceRange}</p>
        <div className="card-actions justify-end">
          <Link to={`/Properties-Detail/${data._id}`} className="btnStyle">see details</Link>
        </div>
      </div>
    </div>
  );
};
PropertiesCard.propTypes = {
  data: PropTypes.object,
};

export default PropertiesCard;

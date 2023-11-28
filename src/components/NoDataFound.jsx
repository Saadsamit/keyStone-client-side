
import PropTypes from 'prop-types';

const NoDataFound = ({data,children}) => {
    return data.length === 0 ? ( <div className="flex justify-center items-center min-h-[calc(100vh-100px)] text-xl">
            no data found
        </div>) : children
        

};
NoDataFound.propTypes = {
    data: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired
  };
export default NoDataFound;
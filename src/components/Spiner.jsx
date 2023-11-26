import { ImSpinner4 } from "react-icons/im";
import PropTypes from 'prop-types';

const Spiner = ({isTrue}) => {
    return <ImSpinner4  className={`animate-spin ${isTrue ? 'text-3xl text-white' : 'text-4xl text-[#1F8A70]'}`}/>
};
Spiner.propTypes={
    isTrue: PropTypes.bool.isRequired
}
export default Spiner;
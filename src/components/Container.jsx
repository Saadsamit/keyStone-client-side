import PropTypes from "prop-types";

const Container = ({ children, data }) => {
  return (
    <div className={`max-w-6xl mx-auto xl:px-0 md:px-10 sm:px-5 px-2 ${data}`}>
      {children}
    </div>
  );
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.string,
};

export default Container;

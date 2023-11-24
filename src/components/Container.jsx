import PropTypes from 'prop-types';

const Container = ({children}) => {
    return (
        <div className='max-w-6xl mx-auto xl:px-0 md:px-10 sm:px-5 px-2'>
            {children}
        </div>
    );
};
Container.propTypes={
    children: PropTypes.node.isRequired
}

export default Container;
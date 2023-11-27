import LoadindCard from './LoadindCard';

const LoadingCards = () => {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 py-10 grid-cols-1 gap-6">
          <LoadindCard />
          <LoadindCard />
          <LoadindCard />
        </div>
    );
};

export default LoadingCards;
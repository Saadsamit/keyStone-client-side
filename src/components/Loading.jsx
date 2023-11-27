import Spiner from "./Spiner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Spiner isTrue={false} />
    </div>
  );
};

export default Loading;

const LoadindCard = () => {
  return (
    <div className="flex flex-col gap-4 w-52">
      <div className="skeleton h-32 w-full"></div>
      <div className="flex items-center gap-4">
        <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton w-10 h-4 shrink-0"></div>
      </div>
      <div className="skeleton h-4 shrink-0"></div>
      <div className="flex justify-end gap-4">
      <div className="skeleton w-28 h-10 rounded-lg shrink-0"></div>
      </div>
    </div>
  );
};

export default LoadindCard;

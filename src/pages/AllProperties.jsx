import { useState } from "react";
import PropertiesCard from "../components/PropertiesCard";
import Container from "../components/Container";
import allProperties from "./../api/AllProperties";
import LoadingCards from "../components/LoadingCards";

const AllProperties = () => {
  const [search, setSearch] = useState("");
  const [allData, refetch, isPending] = allProperties(search);
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
    setSearch("");
    e.target.reset();
  };
  return (
    <Container data={"py-10"}>
      <form
        className="flex justify-center items-center pb-10 join"
        onSubmit={handleSubmit}
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Propertie"
          className="input input-bordered focus:border-[#1F8A70] focus:outline-none w-full max-w-xs join-item"
        />
        <input
          type="submit"
          value={"submit"}
          className="btn bg-[#1F8A70] text-[#D7FBE8] hover:bg-[#00425A] capitalize join-item"
        />
      </form>

      {isPending ? (
        <LoadingCards />
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {allData.map((data, idx) => (
            <PropertiesCard key={idx} data={data} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default AllProperties;

import { Navigate, useParams } from "react-router-dom";
import Container from "./../components/Container";
import ReviewSecion from "../components/ReviewSecion";
import Detail from "../api/PropetiesDetail/Detail";
import useRole from "../api/useRole";
import { useContext } from "react";
import { myAuthProvider } from "../provider/AuthProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const PropertiesDetail = () => {
  const axios = useAxiosPrivate();
  const { id } = useParams();
  const { user } = useContext(myAuthProvider);
  const [role] = useRole("client");
  const [data, isPending] = Detail(id);
  if (isPending) {
    return <Loading />;
  }
  if (data.error) {
    return <Navigate to={"/"} />;
  }
  const handleClick = () => {
    const wishlistData = {
      propertyId: data?._id,
      property: data?.property,
      agent: data?.agent,
      status: data?.status,
      userEmail: user?.email,
      userName: user?.displayName,
      userImage: user?.photoURL
    };
    axios.post("/post-Wishlist", wishlistData).then((res) => {
      if (res.data.isExist) {
        return toast.error("The Data Already Exist");
      }
      toast.success("Data Successfully Added to Wishlist");
    });
  };
  return (
    <Container data={"py-10 space-y-4"}>
      <div className="h-[70vh] overflow-hidden rounded-xl">
        <img src={data?.property?.image} className="w-full h-full" alt="" />
      </div>
      <h2 className="card-title">
        {data?.property?.title}
        <div className="badge bg-[#1F8A70] text-[#D7FBE8]">{data.status}</div>
      </h2>
      <div className="avatar cursor-pointer flex items-center gap-2">
        <div className="w-8 rounded-full">
          <img src={data?.agent?.image} />
        </div>
        <p>{data?.agent?.name}</p>
      </div>
      <p>{data?.property?.details}</p>
      <p>{data?.property?.PriceRange}</p>
      {role && (
        <button className="btnStyle" onClick={handleClick}>
          Add to wishlist
        </button>
      )}
      <ReviewSecion
        id={data?._id}
        title={data?.property?.title}
        AgentName={data?.agent?.name}
        isTrue={true}
      />
    </Container>
  );
};

export default PropertiesDetail;

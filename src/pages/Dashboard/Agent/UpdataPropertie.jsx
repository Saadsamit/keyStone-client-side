import { useForm } from "react-hook-form";
import { imageUploder } from "../../../api/imageUploder/imageUploder";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import GetAProperties from "../../../api/getAProperties";
import Loading from "../../../components/Loading";
import { useState } from "react";
import Spiner from "../../../components/Spiner";

const UpdatePropertie = () => {
  const { id } = useParams();
  const axios = useAxiosPrivate();
  const [loading, setIsLoading] = useState(false)
  const [propertie, isPending, refetch] = GetAProperties(id);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  if (isPending) {
    return <Loading />;
  }
  const price = propertie?.property?.PriceRange.replace(/\$/g, "").split("-");
  const num1 = parseInt(price[0]);
  const num2 = parseInt(price[1]);

  const onSubmit = async (data) => {
    setIsLoading(true)
    const imageFile = { image: data.photo_Url[0] };
    let updateData;
    let PriceRange;
    if (data.PriceRange2.length > 6 || data.PriceRange1.length > 6) {
      return toast.error("number cannot then 6 character");
    }
    if (data.PriceRange1 > data.PriceRange2) {
      PriceRange = `$${data.PriceRange2} - $${data.PriceRange1}`;
    } else {
      PriceRange = `$${data.PriceRange1} - $${data.PriceRange2}`;
    }
    if (imageFile.image) {
      const imgData = await imageUploder(imageFile);
      updateData = {
        property: {
          image: imgData.data.display_url,
          title: data.title,
          location: data.location,
          details: data.details,
          PriceRange,
        },
      };
      axios.put(`/updateProperties/${id}`,updateData).then(()=>{
        setIsLoading(false)
          toast.success('Propertie Update Successfully')
          refetch()
          navigate('/Dashboard/My-added-properties')
      }).catch(()=>{
        setIsLoading(false)
        toast.error('fail to update')
      })
    } else {
      updateData = {
        property: {
          title: data.title,
          location: data.location,
          details: data.details,
          PriceRange,
        },
      };
      axios.put(`/updateProperties/${id}`,updateData).then(()=>{
        setIsLoading(false)
          toast.success('Propertie Update Successfully')
          refetch()
          navigate('/Dashboard/My-added-properties')
      }).catch(()=>{
        setIsLoading(false)
        toast.error('fail to update')
      })
    }
  };
  return (
    <div>
      <h2 className="text-xl py-5 text-[#1F8A70] text-center">
        Update Propertie
      </h2>
      <div className="bg-[#D7FBE8] m-5 p-5 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 grid-cols-1  gap-4">
            <div className="form-control">
              <label className="label" htmlFor="PhotoURL">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                  Photo URL
                </span>
              </label>
              <input
                type="file"
                name="photourl"
                id="PhotoURL"
                placeholder="Photo URL"
                className="file-input file:bg-[#1F8A70] file:text-[#D7FBE8] file:border-[#1F8A70] focus:outline-[#1F8A70] border-[#1F8A70] file-input-bordered file-input-success w-full"
                {...register("photo_Url")}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="title">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                  title
                </span>
              </label>
              <input
                type="text"
                id="title"
                placeholder="title"
                defaultValue={propertie?.property?.title}
                className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70]"
                {...register("title")}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="location">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                  location
                </span>
              </label>
              <input
                type="text"
                id="location"
                placeholder="location"
                defaultValue={propertie?.property?.location}
                className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70]"
                {...register("location")}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="PriceRange">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                  Price Range
                </span>
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  id="PriceRange"
                  placeholder="$ Starting price"
                  defaultValue={num1}
                  className="input input-bordered border-[#1F8A70] w-1/2 focus:outline-[#1F8A70]"
                  {...register("PriceRange1")}
                />
                <p className="text-2xl">-</p>
                <input
                  type="number"
                  placeholder="$ Ending price"
                  defaultValue={num2}
                  className="input input-bordered w-1/2 border-[#1F8A70] focus:outline-[#1F8A70]"
                  {...register("PriceRange2")}
                />
              </div>
            </div>
            <div className="form-control sm:col-span-2">
              <label className="label" htmlFor="details">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                  details
                </span>
              </label>
              <textarea
                id="details"
                placeholder="details"
                defaultValue={propertie?.property?.details}
                className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70] min-h-[100px] p-1"
                {...register("details")}
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button className="btnStyle mt-5" disabled={loading}>{loading ? <Spiner isTrue={true}/> : 'Update propertie'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePropertie;

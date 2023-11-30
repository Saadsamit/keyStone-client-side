import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { myAuthProvider } from './../../../provider/AuthProvider';
import { imageUploder } from "../../../api/imageUploder/imageUploder";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddNewPropertie = () => {
    const {user} = useContext(myAuthProvider)
    const [IsLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    const axios = useAxiosPrivate()
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    setIsLoading(true)
    const imageFile = { image: data.photo_Url[0] };
    const imgData = await imageUploder(imageFile);
    let PriceRange;
    if(data.PriceRange2.length > 6 || data.PriceRange1.length > 6){
      setIsLoading(false)
        return toast.error('number cannot then 6 character');
    }
    if(data.PriceRange1 > data.PriceRange2){
        PriceRange = `$${data.PriceRange2} - $${data.PriceRange1}`
    }else{
        PriceRange = `$${data.PriceRange1} - $${data.PriceRange2}`
    }
    const addData = {property: { image:imgData.data.display_url, title:data.title, location:data.location, details:data.details, PriceRange }, agent: { name:user.displayName, image:user.photoURL, email:user.email }}
    axios.post('/newPropertie',addData).then(()=>{
      setIsLoading(false)
        toast.success('Propertie Add Successfully')
        navigate('/Dashboard/My-added-properties')
    }).catch(()=>{
      setIsLoading(false)
    })
  };
  //property: { image, title, location, details, PriceRange }, agent: { name, image, email }
  return (
    <div>
      <h2 className="text-xl py-5 text-[#1F8A70] text-center">
        Add New Propertie
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
                {...register("photo_Url", { required: true })}
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
                className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70]"
                {...register("title", { required: true })}
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
                className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70]"
                {...register("location", { required: true })}
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
                  className="input input-bordered border-[#1F8A70] w-1/2 focus:outline-[#1F8A70]"
                  {...register("PriceRange1", { required: true })}
                />
                <p className="text-2xl">-</p>
                <input
                  type="number"
                  placeholder="$ Ending price"
                  className="input input-bordered w-1/2 border-[#1F8A70] focus:outline-[#1F8A70]"
                  {...register("PriceRange2", { required: true })}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="agentName">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                  Agent Name
                </span>
              </label>
              <input
                type="text"
                id="agentName"
                defaultValue={user.displayName}
                placeholder="Agent Name"
                className="input input-bordered disabled:text-black border-[#1F8A70] focus:outline-[#1F8A70]"
                {...register("agentName", { required: true, disabled: true })}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="agentEmail">
                <span className="label-text capitalize ps-2 text-[#1F8A70]">
                  Agent Email
                </span>
              </label>
              <input
                type="text"
                id="agentEmail"
                defaultValue={user.email}
                placeholder="Agent Email"
                className="input input-bordered disabled:text-black border-[#1F8A70] focus:outline-[#1F8A70]"
                {...register("agentEmail", { required: true, disabled: true })}
              />
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
                className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70] min-h-[100px] p-1"
                {...register("details", { required: true })}
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button className="btnStyle mt-5" disabled={IsLoading}>add propertie</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewPropertie;

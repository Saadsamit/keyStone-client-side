import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import MyModal from "../../components/MyModal";
import GetUser from "../../api/GetUser";
import Spiner from "../../components/Spiner";
import { useForm } from "react-hook-form";
import { myAuthProvider } from "../../provider/AuthProvider";
import { imageUploder } from "../../api/imageUploder/imageUploder";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import toast from "react-hot-toast";
const MyProfile = () => {
  const axios = useAxiosPrivate();
  const [user, isPending, refetch] = GetUser();
  const { register, handleSubmit } = useForm();
  const { updateUser, loading, isLoading } = useContext(myAuthProvider);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spiner isTrue={false} />
      </div>
    );
  }
  const onSubmit = async (data) => {
    isLoading(true);
    const imageFile = { image: data.photo_Url[0] };
    const name = data.name;
    if (imageFile.image) {
      const imgData = await imageUploder(imageFile);
      updateUser(name, imgData.data.display_url)
        .then(() => {
          const UpdateData = { name, image: imgData.data.display_url };
          axios.put(`/updateUser/${user?.email}`, UpdateData).then((res) => {
            refetch();
            isLoading(false);
            if (res.data.modifiedCount > 0) {
              toast.success("Update Successfully ");
            }
          });
        })
        .catch(() => {
          toast.error("Update fail");
          isLoading(false);
        });
    } else {
      updateUser(name)
        .then(() => {
          const UpdateData = { name };
          axios.put(`/updateUser/${user?.email}`, UpdateData).then((res) => {
            refetch();
            isLoading(false);
            if (res.data.modifiedCount > 0) {
              toast.success("Update Successfully ");
            }
          });
        })
        .catch(() => {
          toast.error("Update fail");
          isLoading(false);
        });
    }
  };
  return (
    <div className="flex justify-center sm:items-center w-full sm:min-h-screen">
      <div className="card sm:w-96 bg-[#D7FBE8] shadow-xl">
        <div className="card-body text-[#1F8A70]">
          <div className="flex justify-end">
            <button onClick={openModal} className="text-[#1F8A70]">
              <FaEdit />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={user?.image} />
              </div>
            </div>
            <h2 className="card-title">{user?.name}</h2>
            <div className="badge bg-[#1F8A70] text-[#D7FBE8] font-semibold">
              {user?.role}
            </div>
            <p className="text-center">{user?.email}</p>
          </div>
          <MyModal isOpen={isOpen} closeModal={closeModal}>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                <label className="label" htmlFor="name">
                  <span className="label-text capitalize ps-2 text-[#1F8A70]">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  id="name"
                  placeholder="Name"
                  className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70]"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btnStyle">
                  {loading ? <Spiner isTrue={true} /> : "change"}
                </button>
              </div>
            </form>
          </MyModal>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

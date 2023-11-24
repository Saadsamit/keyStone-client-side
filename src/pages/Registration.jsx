import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { imageUploder } from "../api/imageUploder/imageUploder";
import { myAuthProvider } from "../provider/AuthProvider";

const Registration = () => {
  const { createUser, updateUser, user, logoutUser } =
    useContext(myAuthProvider);
  const [passwordShow, setPasswordShow] = useState(true);
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.photo_Url[0] };
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const imgData = await imageUploder(imageFile);
    createUser(email, password).then(() => {
      updateUser(name, imgData.data.display_url).then(() => {
        logoutUser().then(() => {
          //nav user to login page
        });
      });
    });
    reset();
  };
  console.log(user);
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <div className="hero-content flex-col">
        <h1 className="text-[#0B666A] text-center capitalize py-6 font-bold text-4xl">
          Registration now
        </h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-[#0B666A] bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="PhotoURL">
                <span className="label-text capitalize ps-2 text-[#0B666A]">
                  Photo URL
                </span>
              </label>
              <input
                type="file"
                name="photourl"
                id="PhotoURL"
                placeholder="Photo URL"
                className="file-input file-input-bordered file-input-success w-full max-w-xs"
                {...register("photo_Url", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text capitalize ps-2 text-[#0B666A]">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="input input-bordered border-[#0B666A] focus:outline-[#0B666A]"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text capitalize ps-2 text-[#0B666A]">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input input-bordered border-[#0B666A] focus:outline-[#0B666A]"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text capitalize ps-2 text-[#0B666A]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={passwordShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="input input-bordered border-[#0B666A] focus:outline-[#0B666A] w-full"
                  {...register("password", { required: true })}
                />
                <div
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="absolute top-1/2 cursor-pointer text-[#0B666A] -translate-y-1/2 text-xl right-2"
                >
                  {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]">
                Registration
              </button>
            </div>
            <p>
              If You Have A Account{" "}
              <Link to="/login" className="text-[#0B666A] link-hover">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

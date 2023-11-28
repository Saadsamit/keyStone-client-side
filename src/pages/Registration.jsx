import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { imageUploder } from "../api/imageUploder/imageUploder";
import { myAuthProvider } from "../provider/AuthProvider";
import Container from "../components/Container";
import signUpImg from "../assets/sgnUp.jpg";
import Spiner from "../components/Spiner";
import toast from "react-hot-toast";
const Registration = () => {
  const { createUser, updateUser, logoutUser, loading, isLoading } =
    useContext(myAuthProvider);
  const [passwordShow, setPasswordShow] = useState(true);
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const imageFile = { image: data.photo_Url[0] };
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const imgData = await imageUploder(imageFile);
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must be at least 1 capital letter");
      return;
    } else if (!/[!\@\#\$\%\^\&\*\)\(\+\=\.\_\-]/.test(password)) {
      toast.error("Password must be at least 1 special character");
      return;
    }
    createUser(email, password)
      .then(() => {
        updateUser(name, imgData.data.display_url).then(() => {
          reset();
          logoutUser().then(() => {
            navigate("/login");
            toast.success("Registration Successfully ");
          });
        });
      })
      .catch(() => {
        isLoading(false);
        toast.error("fail to Registration");
      });
  };

  return (
    <Container data={"pb-10"}>
      <h1 className="text-[#1F8A70] text-center capitalize py-6 font-bold text-4xl">
        Registration now
      </h1>
      <div className="card flex-row-reverse bg-[#D7FBE8] overflow-hidden border ">
        <form className="card-body sm:w-1/2" onSubmit={handleSubmit(onSubmit)}>
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
            <label className="label" htmlFor="name">
              <span className="label-text capitalize ps-2 text-[#1F8A70]">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70]"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text capitalize ps-2 text-[#1F8A70]">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70]"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text capitalize ps-2 text-[#1F8A70]">
                Password
              </span>
            </label>
            <div className="relative">
              <input
                type={passwordShow ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Password"
                className="input input-bordered border-[#1F8A70] focus:outline-[#1F8A70] w-full"
                {...register("password", { required: true })}
              />
              <div
                onClick={() => setPasswordShow(!passwordShow)}
                className="absolute top-1/2 cursor-pointer text-[#1F8A70] -translate-y-1/2 text-xl right-2"
              >
                {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btnStyle">
              {loading ? <Spiner isTrue={true} /> : "Registration"}
            </button>
          </div>
          <p>
            If You Have A Account{" "}
            <Link to="/login" className="text-[#1F8A70] link-hover">
              Login
            </Link>
          </p>
        </form>
        <div className="w-1/2 sm:block hidden">
          <img src={signUpImg} alt="" className="w-full h-full" />
        </div>
      </div>
    </Container>
  );
};

export default Registration;

import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { myAuthProvider } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import loginImg from "../assets/login.jpg";
const Login = () => {
  const { googleLoginUser, loginUser } = useContext(myAuthProvider);
  const [passwordShow, setPasswordShow] = useState(true);
  const { register, reset, handleSubmit } = useForm();
  const handleGoogle = () => {
    googleLoginUser();
  };
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password);
    reset();
  };
  return (
    <Container data={"pb-10"}>
      <h1 className="text-[#1F8A70] text-center capitalize py-6 font-bold text-4xl">
        login now
      </h1>
      <div className="card flex-row bg-[#D7FBE8] overflow-hidden border ">
        <form className="card-body sm:w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <button
            onClick={handleGoogle}
            type="button"
            className="py-2 mb-2 border-2 border-[#1F8A70] bg-white rounded-xl w-full"
          >
            <div className="flex justify-center text-[#1F8A70] items-center text-lg hover:underline">
              <FcGoogle className="text-2xl mr-1" />
              Sign up with google
            </div>
          </button>
          <div className="flex justify-around items-center px-4">
            <div className="bg-[#0B666A] h-[2px] w-2/5"></div>
            <p className="text-center">or</p>
            <div className="bg-[#1F8A70] h-0.5 w-2/5"></div>
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
                className="absolute top-1/2 text-[#1F8A70] cursor-pointer -translate-y-1/2 text-xl right-2"
              >
                {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            <label className="label">
              <a
                href="#"
                className="label-text-alt text-[#1F8A70] link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btnStyle">Login</button>
          </div>
          <p>
            {"If You Don't Have Account"}{" "}
            <Link to="/Registration" className="text-[#1F8A70] link-hover">
              Registrar
            </Link>
          </p>
        </form>
        <div className="w-1/2 sm:block hidden">
          <img src={loginImg} alt="" className="w-full h-full" />
        </div>
      </div>
    </Container>
  );
};

export default Login;

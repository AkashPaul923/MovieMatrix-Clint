import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
// import { toast } from "react-toastify";
import { LuEyeOff, LuEye } from "react-icons/lu";

const Login = () => {
  const [seePass, setSeePass] = useState(true);
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    
  };
  

  return (
    <div className="bg-gradient-to-b from-blue-200 via-cyan-100 to-blue-200 py-20">
      <div
        className="max-w-xl mx-auto bg-white py-10 border-2 rounded-2xl"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="text-center mb-6 font-bold text-3xl">Login</h1>

        <div className="card max-w-lg mx-auto  w-full shrink-0">
          <button
            // onClick={handleGoogle}
            className="btn btn-outline btn-info text-center mx-auto flex"
          >
            <FaGoogle></FaGoogle> <span>Login with Google</span>
          </button>
          <div className="divider mb-0">OR</div>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={`${seePass ? "password" : "text"}`}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <div className="absolute text-xl right-6 top-12">
                {seePass ? (
                  <p onClick={() => setSeePass(!seePass)}>
                    <LuEye />
                  </p>
                ) : (
                  <p onClick={() => setSeePass(!seePass)}>
                    <LuEyeOff />
                  </p>
                )}
              </div>
              <label className="label">
                <p
                //   onClick={handleForgetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">
            Does'n have an account?{" "}
            <Link className="text-red-500" to="/auth/register">
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

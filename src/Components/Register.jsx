import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { AuthContext } from "../Auth/AuthProvider";

const Register = () => {
  const { handleRegister, manageProfile , handleGoogleSignIn, setUser } = useContext( AuthContext )
  const navigate = useNavigate()

    // // Check for an uppercase letter
    const hasUppercase = /(?=.*[A-Z])/;

    // // Check for a lowercase letter
    const hasLowercase = /(?=.*[a-z])/;
    const [seePass , setSeePass] = useState( true )

  const handleSubmit = ( e ) =>{
    e.preventDefault()
    const name = e.target.name.value
    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(name, photo, email, password);
    if(!hasUppercase.test(password)){
      return toast.error("Must have an Uppercase letter in the password")
    }
    if(!hasLowercase.test(password)){
      return toast.error("Must have a Lowercase letter in the password ")
    }
    if(password.length < 6){
      return toast.error("Length must be at least 6 character ")
    }
    handleRegister( email, password )
    .then((res) =>{
      manageProfile( name, photo )
      .then(() =>{
        setUser({...res.user, displayName: name, photoURL : photo})
        navigate("/")
      })
      toast.success("Successfully register")
    })
    .catch(() =>{
      toast.error("User already exist")
    })
  }
  const handleGoogle = () => {
    handleGoogleSignIn()
    .then(res=>{
      navigate("/")
      toast.success("Successfully Login")
    })
  }
   
  
  return (
    <div className=" py-20">
      <div className="max-w-xl mx-auto bg-base-300 py-10 border-2 rounded-2xl" data-aos="zoom-in" data-aos-duration="1000">
        <h1 className="text-center font-bold text-3xl mb-5">Create an Account</h1>
        
        <div className="card max-w-lg mx-auto  w-full shrink-0">
            <button onSubmit={handleGoogle} className="btn btn-outline btn-info text-center mx-auto flex"><FaGoogle></FaGoogle> <span>Login with Google</span></button> 
            <div className="divider mb-0">OR</div>
          <form onSubmit={handleSubmit} className="card-body pt-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={`${seePass ? "password" : "text" }`}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <div className="absolute text-xl right-6 top-12">
                {
                  seePass ? <p onClick={() => setSeePass(!seePass)}><LuEye /></p> :
                  <p onClick={() => setSeePass(!seePass)}><LuEyeOff /></p>
                }
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">Already have an account? <Link className="text-red-500" to="/auth/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
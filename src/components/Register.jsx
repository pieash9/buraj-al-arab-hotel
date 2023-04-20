import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState(false)
  const { createUser,updateUserData,emailVerification } = useContext(AuthContext);

  const handleRegister = (e) => {
    setError("");
    setSuccess("");

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmP = form.confirmP.value;
    // console.log(name, email, password, confirmP);
    if (password.length < 8) {
      toast.error("Password must be more than 8 character!!");
      return;
    } else if (password !== confirmP) {
      toast.error("Password did not match!!");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password should contain at least one upper case!!");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      toast.error("Password should contain at least one digit!!");
      return;
    } else if (!/(?=.*[!#$%&? "])/.test(password)) {
      toast.error("Password should contain at least one special character!!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Please check your email to confirm registration");
        updateUserData(result.user,name)
        emailVerification(result.user)
      })
      .catch((error) => {
        console.log(error);
        toast.error("SomeThing went wrong. Please try again");
      });
      
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={show1? 'text':'password'}
                placeholder="password"
                className="input input-bordered"
              />
              {!show1 ? <FaEyeSlash onClick={()=>(setShow1(!show1))} className="ml-auto -mt-8 mr-3 text-xl cursor-pointer text-gray-500"/>:
                  <FaEye onClick={()=>(setShow1(!show1))} className="ml-auto -mt-8 mr-3 text-xl cursor-pointer"/>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Retype password</span>
              </label>
              <input
                name="confirmP"
                type={show? 'text':'password'}
                placeholder="Retype password"
                className="input input-bordered"
              />
              {!show ? <FaEyeSlash onClick={()=>(setShow(!show))} className="ml-auto -mt-8 mr-3 text-xl cursor-pointer text-gray-500"/>:
                  <FaEye onClick={()=>(setShow(!show))} className="ml-auto -mt-8 mr-3 text-xl cursor-pointer"/>}
            </div>

            <div className="form-control mt-4">
              <button className="btn btn-primary">Register</button>
            </div>
            <label className="label">
              <small>
                Already have an account?
                <Link
                  to="/login"
                  className="ml-1 link link-hover text-blue-500"
                >
                  Login
                </Link>
              </small>
            </label>
            <p className="text-error">{error}</p>
            <p className="text-success">{success}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

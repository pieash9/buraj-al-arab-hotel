import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  const { googleLogin, signInWithEmailAndPass, resetPassword } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show,setShow] = useState(false)
  const emailRef = useRef();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  console.log(location)
  

  const handleLogin = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPass(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login success");
        form.reset()
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log(error);
        toast.error("Cant log in !!");
      });
  };

  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("please input a valid email to reset password");
      return;
    }
    resetPassword(email)
    
      .then((result) => {
        toast.success("please check your email to reset password");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful");
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log(error);
        toast.error("Can not log in");
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
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
                  type={show? 'text':'password'}
                  placeholder="password"
                  className="input input-bordered"
                  />
                 {!show ? <FaEyeSlash onClick={()=>(setShow(!show))} className="ml-auto -mt-8 mr-3 text-xl cursor-pointer text-gray-500"/>:
                  <FaEye onClick={()=>(setShow(!show))} className="ml-auto -mt-8 mr-3 text-xl cursor-pointer"/>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              
              <p className="text-error">{error}</p>
              <p className="text-success">{success}</p>
            </form>

            <div className="ml-7 -mt-5 mb-5">
              <label className="label">
                <a className="label-text-alt">
                  Forgot password?{" "}
                  <button
                    onClick={handleResetPassword}
                    className="link-error link link-hover"
                  >
                    reset password
                  </button>
                </a>
              </label>
              <label className="label">
                <small>
                  Don't have an account?
                  <Link
                    to="/register"
                    className="ml-1 link link-hover text-blue-500"
                  >
                    Register here
                  </Link>
                </small>
              </label>
              <button onClick={handleGoogleLogin} className="btn btn-accent  ">
                {" "}
                <FaGoogle className="mr-3 text-2xl" /> Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

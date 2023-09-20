import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useRef } from "react";
import { CheckValidate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMssg, setErrorMssg] = useState({
    isValid: {
      email: true,
      password: true,
    }, // Assume the form is valid by default
    errors: {},
  });

  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const validation = CheckValidate(
      email.current.value,
      password.current.value
    );
    setErrorMssg(validation);
  };
  const { errors, isValid } = errorMssg;

  const isSignInToggle = () => {
    setSignInForm(!isSignInForm);
    setErrorMssg({
      isValid: {
        email: true,
        password: true,
      }})
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" bg-black absolute w-3/12 my-36 p-12 mx-auto right-0 left-0 text-white opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <p className=" text-red-600">{!isValid.email && errors.email}</p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full  bg-gray-700"
        />
        <p className=" text-red-600">{!isValid.password && errors.password}</p>
        <button
          className=" p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" cursor-pointer" onClick={isSignInToggle}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already have an account Sign In Now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

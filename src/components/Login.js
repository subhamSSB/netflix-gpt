import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useRef } from "react";
import { CheckValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMssg, setErrorMssg] = useState({
    isValid: {
      email: true,
      password: true,
    }, // Assume the form is valid by default
    errors: {},
  });
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const validation = CheckValidate(
      email.current.value,
      password.current.value
    );
    setErrorMssg(validation);
    if (!validation.isValid.email || !validation.isValid.password) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMssg({
                isValid: {
                  password: false,
                },
                errors: {
                  password: error,
                },
              });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMssg({
            isValid: {
              password: false,
            },
            errors: {
              password: errorCode + "-" + errorMessage,
            },
          });
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMssg({
            isValid: {
              password: false,
            },
            errors: {
              password: errorCode + "-" + errorMessage,
            },
          });
        });
    }
  };
  const { errors, isValid } = errorMssg;

  const isSignInToggle = () => {
    setSignInForm(!isSignInForm);
    setErrorMssg({
      isValid: {
        email: true,
        password: true,
      },
    });
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className=" h-screen object-cover w-screen"
          src={BG_LOGO_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" bg-black absolute w-screen md:w-3/12 my-36 p-12 mx-auto right-0 left-0 text-white opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
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

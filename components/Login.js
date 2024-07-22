"use client";

import React from "react";
import { auth } from "../lib/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User signed in: ", result.user);
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;

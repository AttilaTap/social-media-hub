"use client";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebaseConfig";
import Login from "./login";
import Image from "next/image";

const ClientLayout = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <div>
        <p>Welcome, {user.displayName}</p>
        <div style={{ position: "relative", width: "50px", height: "50px" }}>
          <Image
            src={user.photoURL}
            alt={user.displayName}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
      {children}
    </>
  );
};

export default ClientLayout;

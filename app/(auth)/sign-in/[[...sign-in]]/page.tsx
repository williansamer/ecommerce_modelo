import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn />
    </div>
  )
}
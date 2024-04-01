import React, { Suspense } from "react";
import { UserProfile } from "@clerk/nextjs";
const Welcome = () => {
  return (
    <section className="container mx-auto w-full   flex justify-center">
      <UserProfile />
    </section>
  );
};

export default Welcome;

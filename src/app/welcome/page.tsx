import React, { Suspense } from "react";
import { UserProfile } from "@clerk/nextjs";
const Welcome = () => {
  return (
    <Suspense>
      <section className='container mx-auto w-full   flex justify-center'>
        <UserProfile />
      </section>
    </Suspense>
  );
};

export default Welcome;

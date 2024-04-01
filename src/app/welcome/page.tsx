<<<<<<< HEAD

"use client"
import React from 'react'
import { UserProfile } from '@clerk/nextjs'
const Welcome = () => {
  return (
    <section className='container mx-auto w-full   flex justify-center'>

      <UserProfile/>
    </section>
  )
}

export default Welcome
=======
import React, { Suspense } from "react";
import { UserProfile } from "@clerk/nextjs";
const Welcome = () => {
  return (
    <section className='container mx-auto w-full   flex justify-center'>
      <UserProfile />
    </section>
  );
};

export default Welcome;
>>>>>>> 2ce02c791e0ae117a649d719e08f86bf37509bab

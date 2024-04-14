"use client"
import localFont from "next/font/local"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const myFont = localFont({ src: "../../../public/MoreSugarRegular.ttf" })
export const Hero: React.FC = () => {
  return (
    <div>
      <div className="flex items-center pb-60 justify-center flex-col m-3 sm:m-0">
        <Image width={500} height={500} src="/hero-image.png" className="z-10 h-96 object-contain" alt="display image on homepage" />
        <p className={`${myFont.className} text-center text-2xl  inline max-w-xl`}>
          Unlock your language potential with our <span className="text-green-500">bite-sized</span> course designed for travelers!
        </p>

        <div className="sm:flex items-center mx-auto  justify-center mt-4">
          <Link
            href="sign-up"
            className="inline-flex register action-button  bg-indigo-500 sm:w-auto w-full items-center justify-center rounded-md border border-transparent px-8 py-4 text-xl  text-white"
          >
            Get started here
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
    </div>
  )
}

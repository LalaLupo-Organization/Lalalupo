"use client";
import orderOneGreen from "@/public/orderedListOne.svg";
import orderTwoGreen from "@/public/orderedListTwo.svg";
import orderOneRed from "@/public/orderedListOneNeg.svg";
import orderTwoRed from "@/public/orderedListTwoNeg.svg";
import orderThreeRed from "@/public/orderedListThreeNeg.svg";
import Image from "next/image";
import localFont from "next/font/local";
import { v4 as uuid } from "uuid";
const myFont = localFont({ src: "../../../public/MoreSugarRegular.ttf" });

const dotPointsPostive = [
  {
    name: "",
    description:
      "Do you find yourself jet-setting to a foreign place with NO clue how to speak the language?",
    icon: orderOneGreen,
  },
  {
    name: "",
    description: "Do you need a way to chat with locals on your travels? ",
    icon: orderTwoGreen,
  },
];
const dotPointsNegative = [
  {
    name: "",
    description: "Are you an expert in your target language? ",
    icon: orderOneRed,
  },
  {
    name: "",
    description: "Do you pride yourself on being clueless?",
    icon: orderTwoRed,
  },
  {
    name: "",
    description:
      "Are you allergic to learning and fun? Do you revel in the chaos of botched orders and getting lost? Do you plan on hiring a personal translator?",
    icon: orderThreeRed,
  },
];

export const FeatureScreenshotOnRight: React.FC = () => {
  return (
    <div className='overflow-hidden  bg-gradient-to-t from-purple-400 md:from-yellow-500  py-24 sm:py-80'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <p
                className={`${myFont.className} mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
              >
                Is this course for you?
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                If you can answer &quot;yes&quot; to both of these:
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {dotPointsPostive.map((dotpoint) => (
                  <div key={uuid()} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <Image
                        className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                        src={dotpoint.icon}
                        alt='orderedList'
                        width={20}
                        height={20}
                      />
                      {dotpoint.name}
                    </dt>{" "}
                    <dd className='inline'>{dotpoint.description}</dd>
                  </div>
                ))}
              </dl>
              <p className='mt-6  font-semibold text-lg leading-8 text-green-600'>
                This course is for you!
              </p>
            </div>
            <div className='lg:max-w-lg mt-20'>
              <p
                className={`${myFont.className} mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
              >
                Should I ditch this language course?
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                If you can answer &quot;yes&quot; to any one of these:
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {dotPointsNegative.map((dotpoint) => (
                  <div key={uuid()} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <Image
                        className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                        src={dotpoint.icon}
                        alt='orderedList'
                        width={20}
                        height={20}
                      />
                      {dotpoint.name}
                    </dt>{" "}
                    <dd className='inline'>{dotpoint.description}</dd>
                  </div>
                ))}
              </dl>
              <p className='mt-6  font-semibold text-lg leading-8 text-red-600'>
                This course is not for you.
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <Image
              src='/section1.png'
              alt='Product screenshot'
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[36rem] mb-8 md:-ml-4 lg:-ml-0'
              width={2432}
              height={1442}
            />

            <Image
              src='/section2.png'
              alt='Product screenshot'
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[36rem] md:-ml-4 lg:-ml-0'
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

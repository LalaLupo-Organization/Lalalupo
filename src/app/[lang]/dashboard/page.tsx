"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import React, { useState, Fragment, useEffect } from "react";
import { v4 as uuid } from "uuid";
import LevelStepLocked from "@/public/LeveStepLocked.svg";

import {
  useGetCourseStructureQuery,
  useGetUserQuery,
} from "@/services/api";
import {
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/20/solid";
import {
  Heading,
  Box,
  Text,
  Button,
  Container,
  Flex,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { BiBook } from "react-icons/bi";
const stats = [
  {
    id: 1,
    name: "Total Subscribers",
    stat: "71,897",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Avg. Open Rate",
    stat: "58.16%",
    icon: EnvelopeOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Avg. Click Rate",
    stat: "24.57%",
    icon: CursorArrowRaysIcon,
    change: "3.2%",
    changeType: "decrease",
  },
];
const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  {
    name: "Teams",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Engineering", href: "#" },
      { name: "Human Resources", href: "#" },
      { name: "Customer Success", href: "#" },
    ],
  },
  {
    name: "Projects",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  {
    name: "Documents",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
import Image from "next/image";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const {
    data: sanityData,
    error: sanityDataError,
    isLoading: sanityDataIsLoading,
  } = useGetCourseStructureQuery({ languageCode: "en-it" });
  const { colorMode, toggleColorMode } = useColorMode();

  const {
    data: firebaseUserData,
    error: firebaseUserError,
    isLoading: firebaseUserIsLoading,
  } = useGetUserQuery(null);

  useEffect(() => {
    if (firebaseUserData && sanityData) {
      console.log("Firebase user data:", firebaseUserData);
      console.log("Sanity data:", sanityData);
    }
  }, [firebaseUserData, sanityData]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex ">
      <div className="flex  h-screen w-72 flex-col gap-y-5 overflow-y-auto bg-white px-6">
        <div className="flex   h-16 shrink-0 items-center">
          <Image
            height={8}
            width={8}
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {!item.children ? (
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-50"
                            : "hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700"
                        )}>
                        <item.icon
                          className="h-6 w-6 shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ) : (
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50",
                                "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                              )}>
                              <item.icon
                                className="h-6 w-6 shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              {item.name}
                              <ChevronRightIcon
                                className={classNames(
                                  open
                                    ? "rotate-90 text-gray-500"
                                    : "text-gray-400",
                                  "ml-auto h-5 w-5 shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel
                              as="ul"
                              className="mt-1 px-2">
                              {item.children.map((subItem: any) => (
                                <li key={subItem.name}>
                                  {/* 44px */}
                                  <Disclosure.Button
                                    as="a"
                                    href={subItem.href}
                                    className={classNames(
                                      subItem.current
                                        ? "bg-gray-50"
                                        : "hover:bg-gray-50",
                                      "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                    )}>
                                    {subItem.name}
                                  </Disclosure.Button>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                <Image
                  height={8}
                  width={8}
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="overflow-hidden bg-white flex justify-end shadow sm:rounded-lg w-1/2 ">
        <div className="px-4 py-5 sm:p-6">
          <main className="lg:pl-72">
            <div className="xl:pr-96">
              <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                {/* Main area */}
                <div>
                  {sanityData && firebaseUserData ? (
                    firebaseUserData &&
                    sanityData.map((unit: any, i: number) => {
                      const isFirstLessonOfUnit =
                        unit.lessonNumber === 1;
                      const isFirstLesson =
                        i === 0 ||
                        (i > 0 &&
                          sanityData[i - 1]?.unitTitle !==
                            unit.unitTitle);
                      const isFirstUnit =
                        i === 0 ||
                        (i > 0 &&
                          sanityData[i - 1]?.unitTitle !==
                            unit.unitTitle);

                      return (
                        <Box
                          key={uuid()}
                          mx={"auto"}
                          p={4}
                          textAlign={"center"}
                          transform={`translateX(${
                            isFirstUnit
                              ? i % 0 === 2
                              : i % 2 === 0
                                ? "0"
                                : i % 4 === 1 || i % 4 === 2
                                  ? "40px"
                                  : "-40px"
                          })`}>
                          {isFirstLessonOfUnit && (
                            <Box
                              h="100"
                              p="4"
                              shadow="sm"
                              color="white"
                              w="500px"
                              bg="primary.400"
                              rounded="2xl"
                              mx={"auto"}>
                              <Flex
                                justifyContent="space-between"
                                alignItems="center">
                                <Box textAlign="left">
                                  <Heading size="sm">
                                    Unit {unit.unitTitle}
                                  </Heading>
                                  <Text>
                                    Lorem ipsum dolor sit amet.
                                  </Text>
                                </Box>
                                <Box>
                                  <Button>
                                    <BiBook size={"24"} /> GuideBook
                                  </Button>
                                </Box>
                              </Flex>
                            </Box>
                          )}

                          <Flex
                            h="11px"
                            alignItems="center"
                            justifyContent="center"
                            mx={"auto"}
                            mt={
                              isFirstLessonOfUnit ? "20px" : undefined
                            }
                            p={8}
                            rowGap={100}
                            textAlign={"center"}>
                            <Box>
                              <Image
                                alt="levelStep"
                                width={85}
                                height={85}
                                src={LevelStepLocked}
                              />
                              {/* {firebaseUserData?.userProgress[i].lessonNumber} */}
                            </Box>
                          </Flex>
                        </Box>
                      );
                    })
                  ) : (
                    <Box mx={"auto"} textAlign={"center"}>
                      <Text>Loading</Text>
                    </Box>
                  )}
                  <Container></Container>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="overflow-hidden bg-white flex justify-end  sm:rounded-lg ">
        <div className="px-4 py-5 sm:p-6">
          {/* Secondary column (hidden on smaller screens) */}
          <div className="mt-12">
            <dl className="mt-5 grid grid-cols-1 gap-5">
              {stats.map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-lg bg-white px-4 pb-24 w-96 pt-5 shadow sm:px-6 sm:pt-6">
                  <dt>
                    <div className="absolute rounded-md bg-indigo-500 p-3">
                      <item.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 truncate text-sm font-medium text-gray-500">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p className="text-2xl font-semibold text-gray-900">
                      {item.stat}
                    </p>
                    <p
                      className={classNames(
                        item.changeType === "increase"
                          ? "text-green-600"
                          : "text-red-600",
                        "ml-2 flex items-baseline text-sm font-semibold"
                      )}>
                      {item.changeType === "increase" ? (
                        <ArrowUpIcon
                          className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowDownIcon
                          className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                          aria-hidden="true"
                        />
                      )}

                      <span className="sr-only">
                        {" "}
                        {item.changeType === "increase"
                          ? "Increased"
                          : "Decreased"}{" "}
                        by{" "}
                      </span>
                      {item.change}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500">
                          View all
                          <span className="sr-only">
                            {" "}
                            {item.name} stats
                          </span>
                        </a>
                      </div>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Button onClick={toggleColorMode} mb="100">
            {colorMode === "light" ? "Dark mode" : "Light mode"}
          </Button>
        </div>
      </div>
    </div>
  );
}

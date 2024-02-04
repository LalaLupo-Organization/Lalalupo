"use client";
import React, { useState, Fragment, useEffect } from "react";
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
import {
  useGetCourseStructureQuery,
  useGetUserQuery,
} from "@/services/api";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { LocalParamProps } from "@/types/languageCodeParams.types";
import LevelStepLocked from "@/public/LeveStepLocked.svg";
import { Dialog, Transition } from "@headlessui/react";
import { AppLogo } from "@/components/icons/Icons";

import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/20/solid";
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
  { name: "Learn", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  {
    name: "Documents",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  {
    id: 1,
    name: "Heroicons",
    href: "#",
    initial: "H",
    current: false,
  },
  {
    id: 2,
    name: "Tailwind Labs",
    href: "#",
    initial: "T",
    current: false,
  },
  {
    id: 3,
    name: "Workcation",
    href: "#",
    initial: "W",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard({
  params: { lang },
}: LocalParamProps) {
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
    <>
      {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center">
                    <AppLogo boxSize={8} />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul
                      role="list"
                      className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-50 text-indigo-600"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}>
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-indigo-600"
                                      : "text-gray-400 group-hover:text-indigo-600",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                          Your teams
                        </div>
                        <ul
                          role="list"
                          className="-mx-2 mt-2 space-y-1">
                          {teams.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? "bg-gray-50 text-indigo-600"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}>
                                <span
                                  className={classNames(
                                    team.current
                                      ? "text-indigo-600 border-indigo-600"
                                      : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                  )}>
                                  {team.initial}
                                </span>
                                <span className="truncate">
                                  {team.name}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}

        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center">
            <AppLogo boxSize={8} />s
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-50 text-indigo-600"
                            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}>
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-indigo-600"
                              : "text-gray-400 group-hover:text-indigo-600",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  Your teams
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? "bg-gray-50 text-indigo-600"
                            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}>
                        <span
                          className={classNames(
                            team.current
                              ? "text-indigo-600 border-indigo-600"
                              : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                          )}>
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                  <Image
                    width={8}
                    height={8}
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
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
          Dashboard
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <Image
            width={8}
            height={8}
            className="h-8 w-8 rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>

      <main className="lg:pl-72">
        <div className="xl:pr-96">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            {/* Main area */}
            <div>
              {sanityData && firebaseUserData ? (
                firebaseUserData &&
                sanityData.map((unit: any, i: number) => {
                  const isFirstLessonOfUnit = unit.lessonNumber === 1;
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
                        i % 2 === 0
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
                              <Text>Lorem ipsum dolor sit amet.</Text>
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
                        mt={isFirstLessonOfUnit ? "20px" : undefined}
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

      <aside className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
        {/* Secondary column (hidden on smaller screens) */}
        <div className="mt-12">
          <dl className="mt-5 grid grid-cols-1 gap-5">
            {stats.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
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
      </aside>
    </>
  );
}

"use client";
import type { LocalParamProps } from "@/types/languageCodeParams.types";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import {
  Box,
  Container,
  useColorMode,
  Flex,
  Center,
  Button,
  Divider,
  Spacer,
  VStack,
  Heading,
  Stack,
  SkeletonText,
  Text,
  Highlight,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AppLogo, AppLogoText } from "@/components/icons/Icons";
import { Dropdown } from "@/components/inputs/Dropdown";
import { useMediaQuery } from "@chakra-ui/react";
import {
  useGetSiteLanguagesQuery,
  useGetHomePageQuery,
} from "@/services/api";
import localFont from "@next/font/local";
import type { ResponsiveValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MascotHiIcon } from "@/components/mascot/icons";
import { UserButton } from "@clerk/nextjs";
const myFont = localFont({
  src: "../../fonts/MoreSugar-Regular.ttf",
});
export default function Home({ params: { lang } }: LocalParamProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const router = useRouter();

  const {
    data: siteLanguageData,
    error: siteLanguageError,
    isLoading: siteLangugageIsLoading,
    isError: siteLanguageIsError,
  } = useGetSiteLanguagesQuery();

  const {
    data: homePageData,
    error: homePageError,
    isLoading: homePageIsLoading,
    isError: homePageIsError,
  } = useGetHomePageQuery({ languageCode: lang });

  const bottom = useBreakpointValue({ base: "8", md: "auto" });
  const width = useBreakpointValue({ base: "full", md: "auto" });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="https://cdn.sanity.io/images/zqzeoj70/production/d02e4623830c3527bb013130d475cb672e8f4bb8-1366x768.png"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        height="70vh" // Adjust the height as needed
        position="relative">
        {/* Content overlay */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="black" // Text color
        >
          {homePageIsLoading ? (
            <SkeletonText
              mt="4"
              noOfLines={1}
              spacing="8"
              skeletonHeight="6"
            />
          ) : (
            <Box>
              <Container>
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/9385a7ba-f9b2-48ff-aea2-0fdc548efdfd/8uptnfS95G.json"
                  style={{
                    height: "310px",
                    width: "310px",
                    position: "absolute",
                    left: isLargerThan600 ? "6.3rem" : "3.2rem",
                    zIndex: "-10",
                    opacity: "0.8",
                  }}>
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
                <MascotHiIcon boxSize="96" />
              </Container>
              <Container>
                <Center>
                  <Heading
                    fontSize={{ base: "2xl", md: "3xl" }}
                    textAlign="center"
                    color="grey.900"
                    mt="-16"
                    className={myFont.className}>
                    The new interactive course teaching you languages
                    online, for free!{" "}
                  </Heading>
                </Center>

                <VStack p={4} direction={{ base: "column" }}>
                  <Button
                    onClick={() => router.push("/register")}
                    fontSize="15px"
                    borderBottom={"3px"}
                    borderStyle="solid"
                    borderBottomColor="grey.700"
                    variant="buttonPrimary">
                    GET STARTED
                  </Button>
                  <Button
                    fontSize="15px"
                    variant="buttonSecondary"
                    borderBottom={"3px"}
                    borderBottomColor="primary.300"
                    borderStyle="solid">
                    I ALREADY HAVE AN ACCOUNT
                  </Button>
                  <Text fontSize={"xxs"} color="grey.500">
                    No credit card required
                  </Text>
                </VStack>
              </Container>
            </Box>
          )}
          <Button
            colorScheme="black" // Adjust color scheme as needed
            size="lg"
            mt="4">
            Your Button
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

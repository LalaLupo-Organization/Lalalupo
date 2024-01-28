"use client";
import React, { useEffect } from "react";
import type { LocalParamProps } from "@/types/languageCodeParams.types";
import { useGetAboutPageQuery } from "@/services/api";
import {
  SkeletonText,
  Text,
  Box,
  Container,
  Heading,
  SimpleGrid,
  GridItem,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useGetLanguageDataQuery } from "@/services/api";
import { v4 as uuid } from "uuid";
import localFont from "@next/font/local";
import { LanguageSelect } from "@/types/languageSelect.types";
import Link from "next/link";
const myFont = localFont({
  src: "../../../fonts/MoreSugarRegular.ttf",
});
const Page = ({ params: { lang } }: LocalParamProps) => {
  const {
    data: languagePageData,
    error: languagePageError,
    isLoading: languagePageIsLoading,
    isError: languageageIsError,
  } = useGetLanguageDataQuery();

  useEffect(() => {
    if (languagePageData) {
      console.log(
        "🚀 ~ useEffect ~ languagePageDatas:",
        languagePageData
      );
    }
  }, []);

  return (
    <Box>
      <Container maxW="4xl">
        <Box mt="36">
          <Heading
            size={{ base: "sm", sm: "md" }}
            style={myFont.style}
            textAlign={"center"}>
            I want to learn...
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 2, sm: 4 }}
          justifyItems={"center"}
          mt="10"
          rowGap="4">
          {languagePageData &&
            languagePageData.map((item: LanguageSelect) => {
              return (
                <Link href="\" key={uuid()}>
                  <GridItem
                    _hover={{
                      bg: "grey.200",
                      borderColor: "grey.300",
                    }}
                    shadow={"md"}
                    px="14"
                    py="8"
                    border="1px"
                    borderColor={"grey.200"}
                    rounded={"lg"}>
                    <Flex
                      flexDirection={"column"}
                      alignItems={"center"}>
                      <Image
                        border={"1px"}
                        borderColor={"grey.100"}
                        shadow={"sm"}
                        rounded={"lg"}
                        objectFit={"cover"}
                        src={item.icon.asset.url}
                        alt={item.language + "Flag"}
                        width={74}
                        height={55}
                      />

                      <Text
                        mt="4"
                        fontSize={"sm"}
                        style={myFont.style}>
                        {item.language}
                      </Text>
                      <Text
                        mt="4"
                        size={"xs"}
                        fontWeight={"light"}
                        color={"grey.500"}>
                        {item.totalUserCount + " " + "learners"}
                      </Text>
                    </Flex>
                  </GridItem>
                </Link>
              );
            })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Page;

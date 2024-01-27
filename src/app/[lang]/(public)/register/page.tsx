"use client";
import React, { useEffect } from "react";
import type { LocalParamProps } from "@/types/languageCodeParams.types";
import { useGetAboutPageQuery } from "@/services/api";
import { SkeletonText, Text, Box, Container, Heading } from "@chakra-ui/react";
import { useGetLanguageDataQuery } from "@/services/api";
import { v4 as uuid } from "uuid";
import localFont from "@next/font/local";
import { LanguageSelect } from "@/types/languageSelect.types";

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
      console.log("🚀 ~ useEffect ~ languagePageDatas:", languagePageData);
    }
  }, []);

  return (
    <Box>
      <Container>
        <Box mt="36">
          <Heading
            size={{ base: "sm", sm: "md" }}
            style={myFont.style}
            className={myFont.className}
            textAlign={"center"}
          >
            What do you want to learn
          </Heading>
        </Box>
        <Box>
          {languagePageData &&
            languagePageData.map((item: LanguageSelect) => {
              return (
                <Heading key={uuid()}>{item.totalUserCount.toString()}</Heading>
              );
            })}
        </Box>
      </Container>
    </Box>
  );
};

export default Page;

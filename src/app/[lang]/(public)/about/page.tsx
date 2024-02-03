"use client";
import React, { useEffect } from "react";
import type { LocalParamProps } from "@/types/languageCodeParams.types";
import { useGetAboutPageQuery } from "@/services/api";
import { SkeletonText, Text, Box } from "@chakra-ui/react";
const Page = ({ params: { lang } }: LocalParamProps) => {
  const {
    data: aboutPageData,
    error: aboutPageError,
    isLoading: aboutPageIsLoading,
    isError: aboutPageIsError,
  } = useGetAboutPageQuery({ languageCode: lang });

  useEffect(() => {
    if (aboutPageData) {
      console.log("🚀 ~ useEffect ~ aboutPageData:", aboutPageData);
    }
  }, [aboutPageData]);

  return (
    <Box>
      {aboutPageIsLoading ? (
        <SkeletonText
          mt="4"
          noOfLines={1}
          spacing="8"
          skeletonHeight="6"
        />
      ) : (
        <Text>{aboutPageData?.subtitle}</Text>
      )}
    </Box>
  );
};

export default Page;

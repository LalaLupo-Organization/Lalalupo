import { useEffect, useState } from "react";
import type { ResponsiveValue } from "@chakra-ui/react";
import type { LocalParamProps } from "@/types/languageCodeParams.types";

import {
  Box,
  Container,
  useMediaQuery,
  Flex,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useGetSiteLanguagesQuery } from "@/services/api";
import { AppLogo, AppLogoText } from "./icons/Icons";
import { Dropdown } from "./inputs/Dropdown";
export default function Navbar({
  params: { lang },
}: LocalParamProps) {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const bottom = useBreakpointValue({ base: "8", md: "auto" });
  const width = useBreakpointValue({ base: "full", md: "auto" });
  const {
    data: siteLanguageData,
    error: siteLanguageError,
    isLoading: siteLangugageIsLoading,
    isError: siteLanguageIsError,
  } = useGetSiteLanguagesQuery();

  const [style, setStyle] = useState(false);
  const useScrollPosition = () => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
      const updateScrollPos = () => setScrollPos(window.pageYOffset);
      window.addEventListener("scroll", updateScrollPos);
      updateScrollPos(); // Set the initial scroll position

      return () =>
        window.removeEventListener("scroll", updateScrollPos);
    }, []);

    return scrollPos;
  };

  const scrollPos = useScrollPosition();
  return (
    <Box
      borderBottom={style ? "0.5px solid" : "0"}
      borderBottomColor={style ? "grey.400" : "white"}
      opacity={style ? "0.98" : "1"}
      bg="white"
      position={"sticky"}
      top="0"
      zIndex={100}>
      <Container maxW={{ xl: "8xl", lg: "4xl" }}>
        <Flex top="0" alignItems="center" justifyContent="center">
          <AppLogo boxSize={8} />
          <AppLogoText boxSize={20} ml={2} />
          {isLargerThan600 && (
            <>
              <Spacer />
              {siteLanguageData && (
                <Dropdown
                  languageCode={lang}
                  languages={siteLanguageData}
                />
              )}
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

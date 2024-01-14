import {
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Button,
  Box,
  Flex,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons/Icons";
import { useEffect, useState } from "react";
import { SiteLanguages } from "@/types/site-languages.types";
import { v4 as uuid } from "uuid";
import { Image } from "@chakra-ui/react";
export function Dropdown({
  languageCode = "en",
  languages,
}: {
  languageCode: string;
  languages: SiteLanguages[];
}) {
  console.log("🚀 ~ languages:", languages);
  const [isFilled, setIsFilled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // Set isFilled based on whether the input has a value when it loses focus
    setIsFilled(event.target.value !== "");
  };
  function convertLangugageCodeToSiteLangugage(languageCode: string) {
    const result = languages.filter((item) => {
      return item.languageCode === languageCode && item.languageCode;
    });
    return result[0].language;
  }

  return (
    <Menu
      offset={[-50, 5]}
      variant={
        colorMode === "light"
          ? "simpleDefaultMenuLight"
          : "simpleDefaultMenuDark"
      }
    >
      {({ isOpen }) => (
        <>
          <MenuButton variant={"simpleDropdownButtonLight"} as={Button}>
            SITE LANGUAGE:{" "}
            {convertLangugageCodeToSiteLangugage(languageCode).toUpperCase()}
            {isOpen ? <ArrowUpIcon ml="4" /> : <ArrowDownIcon ml="4" />}
          </MenuButton>

          <MenuList py="6" px="4" bg="white" rounded="12">
            {languages.map((item) => {
              return (
                <MenuItem key={uuid()} p="2" fontSize={"sm"}>
                  <Flex
                    minWidth="max-content"
                    alignItems="center"
                    justifyItems="center"
                    gap="4"
                  >
                    <Box boxSize="6">
                      <Image
                        rounded={"2"}
                        src={`${item.icon.asset.url}`}
                        alt="Dan Abramov"
                      />
                    </Box>
                    {item.language}
                  </Flex>
                </MenuItem>
              );
            })}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
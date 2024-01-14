"use client";
import type { LocalParamProps } from "@/types/languageCodeParams.types";
import { Simple } from "@/components/inputs/Simple";
import {
  Link,
  Container,
  Heading,
  Text,
  Button,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { Email } from "@/components/inputs/Email";
import { Password } from "@/components/inputs/Password";
import { Username } from "@/components/inputs/Username";
import { Dropdown } from "@/components/inputs/Dropdown";

export default function Home({ params: { lang } }: LocalParamProps) {
  // const dict = getDictionary(lang); // en
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container mt="10">
      <Stack justifyContent={"start"}>
        <Button onClick={toggleColorMode} mb="100">
          {colorMode === "light" ? "Dark mode" : "Light mode"}
        </Button>
        <Heading>Inputs</Heading>
        <Simple />
        <Email />
        <Password />
        <Username />
        <Heading>Menus</Heading>

        <Heading>Buttons</Heading>
        <Button variant="buttonPrimary">Primary</Button>
        <Button variant="buttonSecondary">Secondary</Button>
      </Stack>
    </Container>
  );
}

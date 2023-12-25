"use client";
import type { LocalParamProps } from "@/types/user-progress.types";
import { useState } from "react";
import {
  Link,
  Container,
  Heading,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { getDictionary } from "./dictionaries";
export default function Home({ params: { lang } }: LocalParamProps) {
  const [lanaguge, setLanguage] = useState(lang);

  // const dict = getDictionary(lang); // en
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="100%" bg="primary-100">
      <Button my={4} onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark mode" : "Light mode"}
      </Button>
      <Heading>Homepage</Heading>
      <Text>
        Home page requires a request to sanity.io to fetch content for
        specific language depending on lanaguge code in url
      </Text>

      <Link href="/sandbox">Sandbox</Link>
    </Container>
  );
}

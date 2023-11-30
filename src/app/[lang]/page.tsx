"use client";
import type { HomeProps } from "@/types/types";

import {
  Link,
  Container,
  Heading,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { getDictionary } from "./dictionaries";
export default function Home({ params: { lang } }: HomeProps) {
  // const dict = await getDictionary(lang); // en
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

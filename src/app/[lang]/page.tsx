import type { HomeProps } from "@/types/types";

import {
  Box,
  VStack,
  Input,
  Divider,
  Container,
} from "@chakra-ui/react";
import { getDictionary } from "./dictionaries";
export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang); // en

  return (
    <Container maxW="100%" bg="primary-100">
      {/* <button className="bg-green-opacity">
          {dict.products.cart}
        </button> */}
      <VStack
        w="50%"
        h="full"
        p="10"
        spacing="5"
        alignItems="center"
        justifyItems="center">
        <Divider my={5} />
        <Box w="full">
          <Input
            placeholder="Placeholder"
            _placeholder={{ color: "grey-400" }}
            fontSize={"md"}
            letterSpacing={"wider"}
            rounded={"2xl"}
            bg={"grey-50"}
            border={"none"}
            shadow={"sm"}
            size="lg"
            py="30px"
          />
        </Box>
        <Box w="full">
          <Input
            placeholder="Placeholder"
            _placeholder={{ color: "grey-400" }}
            fontSize={"md"}
            letterSpacing={"wider"}
            rounded={"2xl"}
            bg={"gradient-green"}
            border={"none"}
            shadow={"sm"}
            size="lg"
            py="30px"
          />
        </Box>
        <Box w="full">
          <Input
            placeholder="Placeholder"
            _placeholder={{ color: "grey-400" }}
            fontSize={"md"}
            letterSpacing={"wider"}
            rounded={"2xl"}
            bg={"grey-50"}
            border={"none"}
            shadow={"sm"}
            size="lg"
            py="30px"
          />
        </Box>
      </VStack>
    </Container>
  );
}
// pl-5  pr-28 py-5

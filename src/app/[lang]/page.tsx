import Nav from "../components/Nav";
import type { HomeProps } from "../types/types";
import { Box } from "@chakra-ui/react";
import { getDictionary } from "./dictionaries";
import DefaultInput from "../components/inputs/default";
export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang); // en

  return (
    <main className="container mx-auto mt-40">
      <h1>
        {/* <button className="bg-green-opacity">
          {dict.products.cart}
        </button> */}
        <DefaultInput
          placeholder={"Placeholder"}
          htmlFor={"email"}
          label={"Email"}
          inputType={"text"}
          inputName={"name"}
          theme={"dark"}
        />
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </h1>
    </main>
  );
}

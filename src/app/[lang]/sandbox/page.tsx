"use client";
import { UserIcon, MessageIcon } from "@/components/icons/Icons";
import {
  useColorMode,
  Button,
  Box,
  InputLeftAddon,
  InputGroup,
  Input,
  VStack,
} from "@chakra-ui/react";

const Sandbox = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box m={10}>
      <Button my={4} onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark mode" : "Light mode"}
      </Button>
      <VStack spacing={4} w={"100%"}>
        {/* Simple */}
        <InputGroup variant="simple">
          <Input placeholder="Placeholder" variant="simple" />
        </InputGroup>
        {/* withAddOn - user */}
        <InputGroup variant="withAddon">
          <InputLeftAddon>
            <UserIcon />
          </InputLeftAddon>
          <Input placeholder="Username" variant="withAddon" />
        </InputGroup>
        {/* withAddOn - email */}
        <InputGroup variant="withAddon">
          <InputLeftAddon>
            <MessageIcon />
          </InputLeftAddon>
          <Input placeholder="Email" variant="withAddon" />
        </InputGroup>
        {/* password - email */}
        {/* dropdown -  */}
        {/* telephone -  */}
        {/* pincode -  */}
      </VStack>
    </Box>
  );
};
export default Sandbox;

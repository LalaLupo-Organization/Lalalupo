"use client";
import {
  UserIcon,
  MessageIcon,
  LockIcon,
  HideIcon,
  ShowIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@/components/icons/Icons";
import { AmericaFlagIcon } from "@/components/icons/CountryIcons";
import {
  useColorMode,
  Button,
  Flex,
  Center,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputLeftAddon,
  InputGroup,
  GridItem,
  Input,
  VStack,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

const Sandbox = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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
        {/* password - */}
        <InputGroup variant="withAddon">
          <InputLeftAddon>
            <LockIcon />
          </InputLeftAddon>

          <Input
            placeholder="Enter password"
            variant="withAddon"
            type={show ? "text" : "password"}
          />
          <InputRightElement>
            {show ? (
              <HideIcon onClick={handleClick} />
            ) : (
              <ShowIcon onClick={handleClick} />
            )}
          </InputRightElement>
        </InputGroup>
        {/* dropdown -  */}

        <InputGroup variant="withAddon">
          <InputLeftAddon>
            <UserIcon />
          </InputLeftAddon>

          <Input placeholder="Placeholder" variant="withAddon" />
          <InputRightElement>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton>
                    {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Copy</MenuItem>
                    <MenuItem>Link</MenuItem>
                    <MenuItem>Link</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </InputRightElement>
        </InputGroup>

        {/* telephone -  */}
        <InputGroup variant="telephone">
          <InputLeftAddon>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton>
                    {isOpen ? (
                      <>
                        <AmericaFlagIcon mr="0.4rem" />
                        <ArrowUpIcon mb="0.2rem" />
                      </>
                    ) : (
                      <>
                        <AmericaFlagIcon mr="0.4rem" />
                        <ArrowDownIcon mb="0.2rem" />
                      </>
                    )}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Copy</MenuItem>
                    <MenuItem>Link</MenuItem>
                    <MenuItem>Link</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </InputLeftAddon>

          <Input placeholder="+1 000 000 000" variant="telephone" />
        </InputGroup>

        {/* pincode -  */}
      </VStack>
    </Box>
  );
};
export default Sandbox;

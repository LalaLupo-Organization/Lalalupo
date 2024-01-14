import {
  InputGroup,
  Input,
  InputRightElement,
  InputLeftAddon,
  useColorMode,
} from "@chakra-ui/react";
import { LockIcon, HideIcon, ShowIcon } from "@/components/icons/Icons";
import { MessageIcon } from "@/components/icons/Icons";
import { useState } from "react";
export function Password({
  placeholder = "Password",
}: {
  placeholder?: string;
}) {
  //isFilled transalates to input field with value and not focused or active
  const [isFilled, setIsFilled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // Set isFilled based on whether the input has a value when it loses focus
    setIsFilled(event.target.value !== "");
  };
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup
      onBlur={handleBlur}
      variant={
        isFilled && colorMode === "light"
          ? "iconFilledInputLight"
          : isFilled && colorMode === "dark"
            ? "iconFilledInputDark"
            : colorMode === "light"
              ? "iconDefaultInputLight"
              : "iconDefaultInputDark"
      }
      _focus={{
        _placeholder: { opacity: 0 },
      }}
    >
      <InputLeftAddon>
        <LockIcon />
      </InputLeftAddon>
      <Input
        type={show ? "text" : "password"}
        onBlur={handleBlur}
        placeholder={placeholder}
        variant={
          isFilled && colorMode === "light"
            ? "iconFilledInputLight"
            : isFilled && colorMode === "dark"
              ? "iconFilledInputDark"
              : colorMode === "light"
                ? "iconDefaultInputLight"
                : "iconDefaultInputDark"
        }
        _focus={{
          _placeholder: { opacity: 0 },
        }}
      />
      <InputRightElement>
        {show ? (
          <HideIcon onClick={handleClick} />
        ) : (
          <ShowIcon onClick={handleClick} />
        )}
      </InputRightElement>
    </InputGroup>
  );
}

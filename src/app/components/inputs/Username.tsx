import {
  InputGroup,
  Input,
  InputLeftAddon,
  useColorMode,
} from "@chakra-ui/react";
import { UserIcon } from "@/components/icons/Icons";
import { useState } from "react";
export function Username({
  placeholder = "Username",
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
        <UserIcon />
      </InputLeftAddon>
      <Input
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
    </InputGroup>
  );
}

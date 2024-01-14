import { InputGroup, Input, useColorMode, Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
export function Simple({
  placeholder = "Placeholder",
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
    <InputGroup>
      <Input
        onBlur={handleBlur}
        variant={
          isFilled && colorMode === "light"
            ? "simpleFilledInputLight"
            : isFilled && colorMode === "dark"
              ? "simpleFilledInputDark"
              : colorMode === "light"
                ? "simpleDefaultInputLight"
                : "simpleDefaultInputDark"
        }
        _focus={{
          _placeholder: { opacity: 0 },
        }}
        placeholder={placeholder}
      />
    </InputGroup>
  );
}

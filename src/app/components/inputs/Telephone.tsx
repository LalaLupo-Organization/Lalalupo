import {
  InputGroup,
  Input,
  InputRightElement,
  InputLeftAddon,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  VStack,
  FormControl,
  FormHelperText,
  Flex,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons/Icons";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useState, useCallback, useEffect } from "react";
import {
  usePhoneInput,
  parseCountry,
  FlagImage,
  defaultCountries,
} from "react-international-phone";
import "react-international-phone/style.css";

export function Telephone() {
  const [value, setValue] = useState("");
  const [expectedNumberLength, setExpectedNumberLength] = useState(0);
  const [isNumberLengthValid, setIsNumberLengthValid] = useState(false);
  const phoneUtil = PhoneNumberUtil.getInstance();
  const [countryNumberCodeLength, setCountryNumberCodeLength] = useState(0);
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "au",
      value,
      countries: defaultCountries,
      onChange: (data) => {
        handleChange(data);
      },
    });
  useEffect(() => {
    if (
      expectedNumberLength > 0 &&
      inputValue.replace(/\s/g, "").length >=
        expectedNumberLength + countryNumberCodeLength
    ) {
      isPhoneValid(inputValue);
    } else {
      setIsNumberLengthValid(false);
    }
    // eslint-disable-next-line
  }, [inputValue]);
  const isPhoneValid = (phone: string) => {
    try {
      const parsedPhoneNumber = phoneUtil.parseAndKeepRawInput(phone);
      setIsNumberLengthValid(true);
      return phoneUtil.isValidNumber(parsedPhoneNumber);
    } catch (error) {
      setIsNumberLengthValid(false);

      console.error("Error parsing phone number:", error);

      return false;
    }
  };
  const handleChange = useCallback(
    (data: any) => {
      setCountryNumberCodeLength(data.country.dialCode.length + 1);
      if (expectedNumberLength === 0 || data !== countryNumberCodeLength) {
        getExpectedNumberLength();
      }

      console.log(inputValue.replace(/\s/g, "").length);
      console.log(inputValue.replace(/\s/g, ""));
    },
    //eslint-disable-next-line
    [inputValue],
  );

  const handleCountryChange = (selectedCountry: any) => {
    setCountry(selectedCountry);
  };

  const getExpectedNumberLength = () => {
    let expectedTelephoneNumberLength = new String(
      phoneUtil.getExampleNumber(country.iso2).getNationalNumber(),
    ).length;
    setExpectedNumberLength(expectedTelephoneNumberLength);
  };
  return (
    <FormControl>
      <VStack spacing={4} w={"100%"}>
        <InputGroup variant="telephone">
          <InputLeftAddon>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton>
                    {isOpen ? (
                      <Flex alignItems="center">
                        <FlagImage iso2={country.iso2} size="30px" />
                        <ArrowUpIcon ml="6px" />
                      </Flex>
                    ) : (
                      <Flex alignItems="center">
                        <FlagImage iso2={country.iso2} size="30px" />
                        <ArrowDownIcon ml="6px" />
                      </Flex>
                    )}
                  </MenuButton>
                  <MenuList zIndex={10000}>
                    {defaultCountries.map((c: any) => {
                      const country = parseCountry(c);
                      return (
                        <MenuItem
                          onClick={() => handleCountryChange(country.iso2)}
                          key={country.iso2}
                          value={country.iso2}
                        >
                          <FlagImage
                            iso2={country.iso2}
                            style={{ marginRight: "8px" }}
                          />
                          <Text mr="8px">{country.name}</Text>
                          <Text color="gray">+{country.dialCode}</Text>
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </>
              )}
            </Menu>
          </InputLeftAddon>

          <Input
            ref={inputRef}
            variant="telephone"
            value={inputValue}
            onChange={handlePhoneValueChange}
          />
          <InputRightElement>
            <CircularProgress
              value={
                (100 / expectedNumberLength) *
                (inputValue.replace(/\s/g, "").length - countryNumberCodeLength)
              }
              size="15px"
              color="green"
              thickness="7px"
              mr="5px"
              trackColor="grey.700"
            />
          </InputRightElement>
        </InputGroup>
      </VStack>
      <Flex ml="1rem" alignItems="center">
        <FormHelperText
          fontSize="xs"
          color={isNumberLengthValid ? "green" : "grey.700"}
        >
          {isNumberLengthValid ? "Looks Good!" : "Enter telephone number"}
        </FormHelperText>
      </Flex>
    </FormControl>
  );
}

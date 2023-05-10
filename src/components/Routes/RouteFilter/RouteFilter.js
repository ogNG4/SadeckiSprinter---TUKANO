import { Search2Icon } from "@chakra-ui/icons";
import { VscSettings } from "react-icons/vsc";
import {
  Box,
  Card,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Switch,
  Button,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";
export default function RouteFilter() {
  const inputBgColor = useColorModeValue("gray.100", "gray.600");
  return (
    <>
      <Card
        m={"2rem auto"}
        w={{ base: "90%", md: "80%", xl: "60%" }}
        maxW={'1000px'}
        p={"1rem"}
        h={"4.5rem"}
      >
        <HStack w={"100%"} h={"100%"} gap={"10px"}>
          <FormControl>
            <Flex gap={"10px"} >
              <InputGroup flex={"2"}>
                <InputLeftElement pointerEvents={"none"}>
                  <BiSearch fontSize={"1.5rem"} />
                </InputLeftElement>
                <Input type="text" bg={inputBgColor} />
              </InputGroup>

              <Select  bg={inputBgColor} flex={"1"}>
                <option>Czas malejąco</option>
                <option>Czas rosnąco</option>
              </Select>
            </Flex>
          </FormControl>
          <Box >
            <Button
              bg={"green.400"}
              _hover={{ bg: "green.500" }}
              float={"right"}
              w={"100%"}
              color={"white"}
              fontSize={"1.1rem"}
            >
              <VscSettings fontSize={"1.4rem"} />
              <Text ml={"5px"} display={{base:'none', md: 'block'}}>Filtruj</Text>
            </Button>
          </Box>
        </HStack>
      </Card>
    </>
  );
}

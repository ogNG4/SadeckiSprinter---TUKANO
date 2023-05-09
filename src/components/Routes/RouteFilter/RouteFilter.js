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
  Button
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
export default function RouteFilter() {
  return (
    <>
      <Card m={"2rem auto"} w={{base: '80%'}} h={""} p={"1rem"}>
        <Flex w={"100%"} alignItems={"center"} h={"100%"} gap={'10px'}>
          <FormControl>
            <Flex justifyContent={'flex-start'}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents={"none"}
                  // children={<BiSearch fontSize={"1.5rem"} />}
                />
                <Input type="text" bg={"gray.100"} w={"500px"} />
              </InputGroup>
              <Select placeholder="Sortuj" w={'200px'} bg={"gray.100"}>
                <option>Czas malejąco</option>
                <option>Czas rosnąco</option>
              </Select>
            </Flex>
          </FormControl>
          <Button>
            Filtruj
          </Button>
        </Flex>
      </Card>
    </>
  );
}

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
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  Lorem,
  ModalFooter,
  Center,
  Divider,
  FormLabel,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  NumberInput,
  VStack,
  Checkbox,
} from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";
import { useState } from "react";
export default function RouteFilter({ onClick }) {
  const inputBgColor = useColorModeValue("gray.100", "gray.600");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [distanceSliderValue, setDistanceSliderValue] = useState([0, 150]);
  return (
    <>
      <Card
        m={"2rem auto"}
        w={{ base: "90%", md: "80%", xl: "60%" }}
        maxW={"1000px"}
        p={"1rem"}
        h={"4.5rem"}
      >
        <HStack w={"100%"} h={"100%"} gap={"10px"}>
          <FormControl>
            <Flex gap={"10px"}>
              <InputGroup flex={"2"}>
                <InputLeftElement pointerEvents={"none"}>
                  <BiSearch fontSize={"1.5rem"} />
                </InputLeftElement>
                <Input type="text" bg={inputBgColor} />
              </InputGroup>

              <Select bg={inputBgColor} flex={"1"}>
                <option>Czas malejąco</option>
                <option>Czas rosnąco</option>
              </Select>
            </Flex>
          </FormControl>
          <Box>
            <Button
              bg={"green.400"}
              _hover={{ bg: "green.500" }}
              float={"right"}
              w={"100%"}
              color={"white"}
              fontSize={"1.1rem"}
              onClick={onOpen}
            >
              <VscSettings fontSize={"1.4rem"} />
              <Text ml={"5px"} display={{ base: "none", md: "block" }}>
                Filtruj
              </Text>
            </Button>
          </Box>
        </HStack>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filtruj </ModalHeader>
          
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <HStack>
                <Input placeholder="Lokalizacja" w={"70%"} />
                <Select w={"30%"}>
                  <option>+5km</option>
                  <option>+10km</option>
                  <option>+15km</option>
                  <option>+20km</option>
                  <option>+50km</option>
                </Select>
              </HStack>
              <Divider my={"1rem"} />
              <HStack>
                <VStack>
                  <FormLabel>Dystans</FormLabel>
                  <HStack >
                    <Input type="number" placeholder="Od(KM)"fontSize={'sm'} />
                    <Input type="number" placeholder="Do(KM) "  fontSize={'sm'}/>
                  </HStack>
               
                </VStack>
                <Divider orientation='vertical'  />
                <VStack>
                  <FormLabel>Czas</FormLabel>
                  <HStack>
                    <Input type="number" placeholder="Od" fontSize={'sm'}/>
                    <Input type="number" placeholder="Do " fontSize={'sm'}/>
                  </HStack>
                  {/* <RangeSlider defaultValue={[10, 30]} w={'100%'}  aria-label={['min', 'max']} min={0} max={200}  w={'50%'} step={0.1}>
                
                <RangeSliderTrack>
                  <RangeSliderFilledTrack bg={'green.400'}  onChangeEnd={(val) => setDistanceSliderValue(val)}/>
                </RangeSliderTrack>
                <RangeSliderThumb  index={0}/>
                <RangeSliderThumb  index={1}/>
              </RangeSlider> */}
                </VStack>
              </HStack>
              <Divider my={"1rem"} />
              <FormLabel>Poziom trudności</FormLabel>
              <HStack >
              <Flex direction={'column'} gap={'10px'}  fontWeight={'500'}  w={'50%'}>
                <Checkbox colorScheme="green" >
                  Łatwy
                </Checkbox>
                <Checkbox colorScheme="yellow" >
                  Średni
                </Checkbox>
                <Checkbox colorScheme="red" >
                  Trudny
                </Checkbox>
              </Flex>
              <Divider orientation="vertical"/>
              <VStack w={'50%'} >
                  <FormLabel>Cena</FormLabel>
                  <HStack>
                    <Input type="number" placeholder="Od(ZŁ)" fontSize={'sm'}/>
                    <Input type="number" placeholder="Do(ZŁ) " fontSize={'sm'}/>
                  </HStack>
                </VStack>
              </HStack>
             
            </FormControl>
          </ModalBody>

          <Center>
            <ModalFooter>
              <Button bg={"green.400"} color={"white"}>
                Filtruj
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

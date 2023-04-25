import { MoonIcon, PhoneIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Switch,
  useColorMode,
  useColorModeValue,
  Text,
  Spacer,
  Center,
  VStack,
  HStack
} from "@chakra-ui/react";
import { MdDirectionsBike } from "react-icons/md";
import {FaRunning, FaHiking} from "react-icons/fa"

import Link from "next/link";

const NAV_LINKS = [
  {
    name: "Trasy Rowerowe",
    href: "/",
    icon: MdDirectionsBike,
    
  },
  {
    name: "Trasy Biegowe",
    href: "/",
    icon: FaRunning,
   
  },
  {
    name: "Szlaki Piesze",
    href: "/",
    icon: FaHiking,
   
  },

 
]


export default function DesktopNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const inputColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  

  return (
    <Box
      
      w={"xs"}
      h={"100vh"}
      borderRight={"1px solid gray.500"}
      boxShadow={"lg"}
      position={"fixed"}
    >
      <Flex direction={"column"} >
        <Box>
          <Center w={"100%"} h={"10vh"}>
            <Image src="logo.svg" />
          </Center>
          <Center>
            <InputGroup w={"80%"}>
              <InputLeftElement
                pointerEvents={"none"}
                children={<Search2Icon />}
              />
              <Input bg={inputColor} outline={"none"} />
            </InputGroup>
          </Center>
        </Box>
        <Flex as="nav" direction={'column'} m={'4rem auto'} alignItems={'left'} w={'80%'} b gap={'15px'}>
         

          {NAV_LINKS.map((link)=>(
            
                <HStack fontSize={'xl'} fontWeight={'500'} color={textColor} _hover={{bg: 'green.400', color: "white", boxShadow:'lg'}}  w={'auto'} p={'.3rem 1rem'} borderRadius={'10px'} >
                <Link href={link.href}>
                  <Flex alignItems={'center'} gap={'5px'}>
                  <link.icon fontSize={'1.5rem'}/>
                  <Text>
                    {link.name}
                  </Text>
                  </Flex>
                </Link>
              </HStack>
              
          ))}
        </Flex>
      </Flex>

      <Stack position={"absolute"} bottom={"1rem"} right={"2rem"}>
        <Switch
          size={"lg"}
          colorScheme="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </Stack>
    </Box>
  );
}

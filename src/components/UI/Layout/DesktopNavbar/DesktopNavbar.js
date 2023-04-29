import { useState } from "react";

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
  HStack,
  Button,
  position,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

import Link from "next/link";
import LoginButton from "../../LoginButton/LoginButton";
import NAV_LINKS from "@/navigation/nav-links";
import { useRouter } from "next/router";

export default function DesktopNavbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const inputColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const fontValues = { fontSize: { base: "s", lg: "xl" }, fontWeight: "400" };

  const router = useRouter();

  return (
    <Box
      w={"xs"}
      h={"100vh"}
      borderRight={"1px solid gray.500"}
      boxShadow={"lg"}
      position={"sticky"}
      top={0}
      left={0}
      display={{ base: "none", md: "block" }}
      overflowY={"auto"}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#68D391",
          borderRadius: "24px",
        },
      }}
    >
      <Flex direction={"column"} justifyContent={'space-between'}  h={'100%'}>
        <Flex direction={"column"} mt={"1rem"} gap={"1rem"}>
          <Center w={"100%"}>
            <Image src="logo.svg" />
          </Center>

          <Center>
            <InputGroup w={"80%"}>
              <InputLeftElement
                pointerEvents={"none"}
                // children={<Search2Icon />}
              />
              <Input bg={inputColor} outline={"none"} />
            </InputGroup>
          </Center>
        
        <Flex
          as="nav"
          direction={"column"}
          m={{ base: "1rem auto", lg: "2rem auto" }}
          alignItems={"left"}
          w={"80%"}
          gap={{ base: "10px", lg: "20px" }}
        >
          {NAV_LINKS.map((link) => (
            <HStack
            _hover={{ bg: "green.400", color: "white", boxShadow: "lg" }}
              key={link.name}
              {...fontValues}
              color={textColor}
              w={"auto"}
              p={".3rem 1rem"}
              borderRadius={"10px"}
              _last={{
                mt: "1.5rem",
                bg: "blue.400",
                color: "white",
                _hover: { bg: "blue.500" },
              }}
            >
              <Link href={link.href} >
                <Flex alignItems={"center"} gap={"5px"}  >
                  <link.icon fontSize={"1.5rem"} />
                  <Text>{link.name}</Text>
                </Flex>
                
              </Link>
            </HStack>
          ))}
        </Flex>
        </Flex>
      

      <Flex
        position={"sticky"}
        bottom={0}
        p={"2rem"}
        w={"100%"}
        bg={isDark ? "gray.800" : "white"}
        alignSelf={"end"}
        gap={"20px"}
        direction={"column"}
      >
      
        <Flex w={"100%"} m={"0 auto"} alignItems={"center"} >
        <LoginButton />
          <Spacer />
          <Button onClick={toggleColorMode}>
            {isDark ? (
              <IoSunnyOutline fontSize={"1.5rem"} />
            ) : (
              <IoMoonOutline fontSize={"1.5rem"} />
            )}
          </Button>
        </Flex>
      </Flex>
      </Flex>
    </Box>
  );
}
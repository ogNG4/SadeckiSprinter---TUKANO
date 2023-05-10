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
  useDisclosure,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

import Link from "next/link";
import LoginButton from "../../LoginButton/LoginButton";
import NAV_LINKS from "@/navigation/nav-links";
import { useRouter } from "next/router";

export default function MobileNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const inputColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const fontValues = { fontSize: { base: "s", lg: "xl" }, fontWeight: "400" };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <Box
      h={"100vh"}
      w={"15%"}
      borderRight={"1px solid gray.500"}
      boxShadow={"lg"}
      position={"sticky"}
      top={0}
      left={0}
    >
      <Flex direction={"column"} h={"100%"} justifyContent={'space-between'} p={'1rem 0'}>
        <VStack direction={"column"}  gap={"20px"}>
          <Center w={"100%"}>
            <Image src="logo-head.svg" alt="logo" w={"80%"} />
          </Center>
          <Search2Icon color={textColor} fontSize={'2rem'} />
        </VStack>
        <Flex as="nav" direction={"column"} alignItems={"center"} color={textColor}  gap={'20px'} h={'60%'}>
          {NAV_LINKS.map((link) => (
            <Box key={link.name}>
              <Link href={link.href}>
                  <link.icon fontSize={"2rem"} />
              </Link>
            </Box>
          ))}
        </Flex>
        <VStack>
        <Menu zIndex={'20'}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  
                >
                  <Avatar />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <LoginButton />
                  </MenuItem>
                </MenuList>
              </Menu>
        <Button onClick={toggleColorMode} bg={'transparent'}>
                {isDark ? (
                  <IoSunnyOutline fontSize={"1.4em"} />
                ) : (
                  <IoMoonOutline fontSize={"1.4em"} />
                )}
              </Button>
        </VStack>
      </Flex>
    </Box>
  );
}

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
  Tooltip,
  Divider,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

import Link from "next/link";
import LoginButton from "@/UI/LoginButton/LoginButton";
import NAV_LINKS from "@/navigation/nav-links";
import { useRouter } from "next/router";
import { useSession, useUser } from "@supabase/auth-helpers-react";
import NavLink from "./NavLink/DesktopNavLink";
import DesktopNavLink from "./NavLink/DesktopNavLink";

export default function DesktopNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const inputColor = useColorModeValue("gray.200", "gray.700");
  const tooltipLabel = isDark ? "Tryb jasny" : "Tryb ciemny";
  const user = useUser();
  const session = useSession();

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
      <Flex direction={"column"} justifyContent={"space-between"} h={"100%"}>
        <Flex direction={"column"} mt={"1rem"} gap={"1rem"}>
          <Center w={"100%"}>
            <Image src="logo.svg" alt="logo" />
          </Center>

          <Center>
            <InputGroup w={"80%"}>
              <InputLeftElement pointerEvents={"none"}>
                <Search2Icon />
              </InputLeftElement>
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
              <DesktopNavLink
                key={link.name}
                name={link.name}
                href={link.href}
                icon={link.icon}
              />
            ))}

            {session ? (
              <>
                <Divider />
                <NavLink name={"Dodaj"} href={"/bb"} icon={FiPlusSquare} />
                <NavLink name={"Ulubione"} href={"/bb"} icon={AiOutlineHeart} />
              </>
            ) : null}
          </Flex>
        </Flex>

        <Flex
          position={"sticky"}
          bottom={0}
          p={"2rem"}
          w={"100%"}
          bg={isDark ? "gray.800" : "white"}
          // alignSelf={"end"}
          gap={"20px"}
          direction={"column"}
        >
          <Divider w={"100%"} m={"0 auto"} />
          {!session ? (
            <Flex w={"100%"} m={"0 auto"} alignItems={"center"} gap={"20px"}>
              <Tooltip hasArrow label="Zaloguj się" bg="red.600">
                <LoginButton />
              </Tooltip>
              <Spacer />
              <Tooltip hasArrow label={tooltipLabel}>
                <Button onClick={toggleColorMode}>
                  {isDark ? (
                    <IoSunnyOutline fontSize={"1.5em"} />
                  ) : (
                    <IoMoonOutline fontSize={"1.5em"} />
                  )}
                </Button>
              </Tooltip>
            </Flex>
          ) : (
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
            >
              <Menu>
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
              <Text fontWeight={"500"}>Witaj Marcin!</Text>
              <Button onClick={toggleColorMode}>
                {isDark ? (
                  <IoSunnyOutline fontSize={"1.5em"} />
                ) : (
                  <IoMoonOutline fontSize={"1.5em"} />
                )}
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

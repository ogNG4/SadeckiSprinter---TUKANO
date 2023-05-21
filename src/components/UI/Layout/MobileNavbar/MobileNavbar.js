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
  Divider,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { HiOutlineUser, HiPlus } from "react-icons/hi";
import { FiPlusSquare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import LoginButton from "../../LoginButton/LoginButton";
import NAV_LINKS from "@/navigation/nav-links";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import MobileNavLink from "./NavLink/MobileNavLink";

export default function MobileNavbar() {
  const session = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const inputColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const fontValues = { fontSize: { base: "s", lg: "xl" }, fontWeight: "400" };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  


  return (
    <Box
      h={"100vh"}
      w={{ base: "15%", md: "8%" }}
      borderRight={"1px solid gray.500"}
      boxShadow={"lg"}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={'1000'}
      // overflowY={"auto"}
      // css={{
      //   "&::-webkit-scrollbar": {
      //     width: "2px",
      //   },
      //   "&::-webkit-scrollbar-track": {
      //     width: "2px",
      //   },
      //   "&::-webkit-scrollbar-thumb": {
      //     background: "#68D391",
      //     borderRadius: "1px",
      //   },
      // }}
    >
      <Flex
        direction={"column"}
        h={"100%"}
        justifyContent={"space-between"}
        p={"1rem 0"}
      >
        <VStack direction={"column"} gap={"5px"}>
          <Center w={"100%"}>
            <Image src="logo-head.svg" alt="logo" w={"80%"} />
          </Center>
          <Divider w={"85%"} m={"0 auto"} />
          {NAV_LINKS.map((link) => (
            <MobileNavLink key={link.name} href={link.href} icon={link.icon} />
            
          ))}

          {session ? (
            <>
              <Divider />
              <Box color={textColor} >
                <Menu size={'sm'} >
                  <MenuButton>
                    <FiPlusSquare  fontSize={"1.7rem"}/>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Trasa</MenuItem>
                    <MenuDivider />
                    <MenuItem>Obiekt sportowy</MenuItem>
                    <MenuDivider />
                    
                    <MenuItem>Atrakcja turstyczna</MenuItem>
                    <MenuDivider />
                    
                    <MenuItem>Wydarzenie</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box color={textColor} fontSize={"1.7rem"}>
                <Link href={"/"}>
                  <AiOutlineHeart />
                </Link>
              </Box>
            </>
          ) : null}
        </VStack>

        <VStack>
          {session ? (
            <Menu zIndex={"20"}>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar />
                {/* <HiOutlineUser fontSize={'2rem'} color={textColor}/> */}
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
          ) : (
            <LoginButton />
          )}

          <Button onClick={toggleColorMode} w={"90%"}>
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

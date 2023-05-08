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

  const {isOpen, onOpen, onClose} = useDisclosure();

  const router = useRouter();

  return (
    <Box>
        
    </Box>
  );
}

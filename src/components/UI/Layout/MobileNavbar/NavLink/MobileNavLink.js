import { Box, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileNavLink({ name, href, icon: Icon }) {
  const textColor = useColorModeValue("gray.600", "gray.200");

  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Box
      color={textColor}
      bg={isActive ? "green.400" : "transparent"}
      color={isActive ? "white" : textColor}
      p={'5px'}
      borderRadius={'5px'}
      
    >
      <Link href={href}>
        <Icon fontSize={"1.7rem"}  />
      </Link>
    </Box>
  );
}

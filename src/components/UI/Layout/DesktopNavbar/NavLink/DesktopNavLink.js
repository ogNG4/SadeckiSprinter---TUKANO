import { HStack, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DesktopNavLink({ name, href, icon: Icon }) {
  const fontValues = { fontSize: { base: "s", lg: "l" }, fontWeight: "400" };
  const textColor = useColorModeValue("gray.700", "gray.200");
  const router = useRouter();
  const isActive = router.asPath === href; // Sprawdzenie, czy link jest aktywny

  return (
    <HStack
      _hover={{ bg: "green.400", color: "white", boxShadow: "lg" }}
      bg={isActive ? "green.400" : "transparent"} // Dodanie podświetlenia dla aktywnego linku
      color={isActive ? "white" : textColor} // Zmiana koloru tekstu dla aktywnego linku
      {...fontValues}
      w={"auto"}
      p={".3rem 1rem"}
      borderRadius={"10px"}
    >
      <Link href={href}>
        <Flex alignItems={"center"} gap={"5px"}>
          <Icon fontSize={"1.5rem"} />
          <Text fontWeight={"500"}>{name}</Text>
        </Flex>
      </Link>
    </HStack>
  );
}

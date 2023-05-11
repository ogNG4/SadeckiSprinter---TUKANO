import { HStack, Flex, Text, useColorModeValue  } from "@chakra-ui/react";
import Link from "next/link";

export default function NavLink({name,href,icon: Icon}){
    const fontValues = { fontSize: { base: "s", lg: "l" }, fontWeight: "400" };
    const textColor = useColorModeValue("gray.700", "gray.200");
    return(
        <HStack
        _hover={{ bg: "green.400", color: "white", boxShadow: "lg" }}
        
        {...fontValues}
        color={textColor}
        w={"auto"}
        p={".3rem 1rem"}
        borderRadius={"10px"}
      >
        <Link href={href}>
          <Flex alignItems={"center"} gap={"5px"}>
            <Icon fontSize={"1.5rem"} />
            <Text fontWeight={'500'}>{name}</Text>
          </Flex>
        </Link>
      </HStack>
    )
}
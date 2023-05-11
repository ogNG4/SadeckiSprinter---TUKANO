import { Center, Box, AbsoluteCenter, VStack, Text, Flex, Image, useColorModeValue } from "@chakra-ui/react";

export default function ErrorPage(){
    const textColor = useColorModeValue("gray.600", "gray.200");
    return(
        <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'}>
            <VStack w={'100%'}>
                <Image src="/logo.svg" w={'20%'}/>
                <Text fontSize={'7xl'} fontWeight={'700'} color={textColor}>404</Text>
                <Text fontSize={'7xl'} fontWeight={'700'} color={textColor}>Nie znaleziono strony</Text>
            </VStack>
        </Flex>
    );
}
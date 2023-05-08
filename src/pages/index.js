import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";


export default function Home() {
  // 
  return (
    <>
    <Head>
      <title>Sądecki Sprinter</title>
    </Head>
    <Center mt={'2rem'}>
      <Heading >
          <Text fontSize={{ base: "5xl", sm: "6xl", md: "7xl" }} fontWeight={'800'}>
                HomePage
          </Text>
      </Heading>
    </Center>
    <Flex bg={'red'} w={'max-content'} margin={'0 auto'}>
      
      

    </Flex>
    </>
  );
}

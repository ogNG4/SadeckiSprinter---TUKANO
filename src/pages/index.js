import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Sądecki Sprinter</title>
    </Head>
    <Box bg={'red'} w={'max-content'} margin={'0 auto'}>
      <h1>Home</h1>
    </Box>
    </>
  );
}

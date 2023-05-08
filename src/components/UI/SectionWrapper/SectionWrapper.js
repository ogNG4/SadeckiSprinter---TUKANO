import { Box, SimpleGrid } from "@chakra-ui/react";

export default function SectionWrapper({ children }) {
  return (
    <SimpleGrid p={"2rem"} columns={{ base: 1,  md: 2, xl: 3, '2xl': 4}} spacing={10} >
      {children}
    </SimpleGrid>
  );
}

import { Box, SimpleGrid } from "@chakra-ui/react";

export default function SectionWrapper({ children }) {
  return (
    <SimpleGrid p={"2rem"} columns={{ base: 1, xl: 2}} gap={10}  >
      {children}
    </SimpleGrid>
  );
}

import { Heading, Center, Text, useColorModeValue } from "@chakra-ui/react";

export default function SectionHeader({ title }) {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Heading as='h1'
      w={"max-content"}
      m={"3rem auto"}
      boxShadow={"green-lg"}
      fontWeight={600}
    >
      <Text
        fontSize={{base: '3xl', md:'6xl'}}
        color={textColor}
        as={"span"}
        position={"relative"}
        _after={{
          content: "''",
          width: "full",
          height: { base: "30%", md: "30%" },
          position: "absolute",
          bottom: 1,
          left: {base:5, md: 10},
          bg: "green.400",
          zIndex: -1,
          boxShadow: "lg",
        }}
      >
        {title}
      </Text>
    </Heading>
  );
}

import { Text, VStack, useColorModeValue, Card } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function RouteCardStats({ content, unit, icon: Icon, color }) {
  const fontColor = useColorModeValue("gray.600", "white");
  const headerBgColor = useColorModeValue("gray.200", "gray.700");
  const iconFontSize = { base: "5rem", lg: "10rem" };
  const textProps = {
    fontSize: { base: ".8rem", lg: "xl", xl: " 2xl" },
    fontWeight: "500",
  };
  const bgColor = useColorModeValue("gray.100", "gray.600");
  return (
    <Card w={"15%"} p={"10px 1rem"} bg={bgColor} color={fontColor}>
      <VStack>
        <Icon fontSize={"1.7rem"} />
        <Text {...textProps}>
          {content} {unit}
        </Text>
      </VStack>
    </Card>
  );
}

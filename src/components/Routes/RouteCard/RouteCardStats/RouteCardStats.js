import { Text, VStack, useColorModeValue, Card } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function RouteCardStats({ content, unit, icon: Icon, color }) {
  const fontColor = useColorModeValue("gray.600", "white");
  const headerBgColor = useColorModeValue("gray.200", "gray.700");
  const iconFontSize = { base: "5rem", lg: "10rem" };
  const textProps = {
    fontSize: { base: ".6rem", md: "md",},
    fontWeight: "500",
  };
  const bgColor = useColorModeValue("gray.100", "gray.600");
  return (
    <Card w={"15%"} p={{base: '6px 3px',md:"10px .2rem"}} bg={bgColor} color={fontColor}>
      <VStack>
        <Icon fontSize={"1.5rem"} />
        <Text {...textProps}>
          {content} {unit}
        </Text>
      </VStack>
    </Card>
  );
}

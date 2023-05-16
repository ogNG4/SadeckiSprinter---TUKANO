import {
  Card,
  Box,
  Flex,
  Text,
  CircularProgress,
  CircularProgressLabel,
  VStack,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  HStack,
  Center,
  useMediaQuery,
  SimpleGrid,
} from "@chakra-ui/react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { MdDirectionsBike } from "react-icons/md";
import { FaMapMarkerAlt, FaClock, FaStar, FaRunning, FaHiking } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import { motion } from "framer-motion";

import Link from "next/link";
import { StarIcon } from "@chakra-ui/icons";
import RouteCardStats from "./RouteCardStats/RouteCardStats";

export default function RouteCard({ route }) {
  const fontColor = useColorModeValue("gray.600", "white");
  const textProps = { fontSize: { base: "xl", lg: "2xl" }, fontWeight: "500" };
  const [mobileWidth] = useMediaQuery("(max-width: 768px)");
  const difficultyBgColor =
    route.difficulty == "easy"
      ? "green.300"
      : route.difficulty == "medium"
      ? "yellow.300"
      : "red.300";
      const bgColor = useColorModeValue("gray.100", "gray.600");

  const routeIcon = route.type === 'bike' ? <MdDirectionsBike fontSize={"1.7rem"} />: route.type==='running'? <FaRunning fontSize={"1.7rem"}/> : <FaHiking fontSize={"1.7rem"}/> ;
  return (
    <>
      <LinkBox>
        <Card
          direction={"column"}
          // w={{base:'100%', lg: '70%' }}
          h={"sm"}
          overflow={"hidden"}
          m={"0 auto"}
          color={fontColor}
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          maxW={'900px'}
        >
          <Box h={"45%"} position={"relative"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Flex direction={"column"} h={"55%"}>
            <Center
              fontSize={{ base: "xl", xl: "3xl" }}
              fontWeight={"500"}
              p={".3rem"}
              w={"100%"}
            >
              {route.title}
            </Center>
            {mobileWidth ? (
              <Flex>
                <SimpleGrid columns={2} w={"70%"} bg={"red"}>
                  <RouteCardStats content={"4.5"} icon={FaStar} />
                  <RouteCardStats content={"3:40"} icon={FaClock} />
                  <RouteCardStats content={"21 km"} icon={FaMapMarkerAlt} />
                </SimpleGrid>
              </Flex>
            ) : (
              <Flex 
                h={"100%"}
                alignItems={"center"}
                p={"0 1.5rem"}
                gap={"15px"}
                
              >
                <RouteCardStats content={"4.5"} icon={FaStar} color={'yellow.400'} />
                <RouteCardStats content={route.time} unit={'h'} icon={FaClock} />
                <RouteCardStats
                  content={route.distance}
                  unit={'km'}
                  icon={FaMapMarkerAlt}
                />
                <Card
                  w={"15%"}
                  p={"10px 1rem"}
                  bg={difficultyBgColor}
                  color={"white"}
                >
                  <VStack>
                    {routeIcon}
                    <Text {...textProps}>{route.difficulty}</Text>
                  </VStack>
                </Card>
                <Card flex={1} p={"10px 1rem"} bg={bgColor}>
                  <VStack>
                    <Text>Dodana przez: </Text>
                    <Text {...textProps}>marcio468</Text>
                  </VStack>
                </Card>
              </Flex>
            )}
          </Flex>
        </Card>
      </LinkBox>
    </>
  );
}

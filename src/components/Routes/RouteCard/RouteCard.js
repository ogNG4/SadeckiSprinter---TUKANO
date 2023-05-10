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
  Center
} from "@chakra-ui/react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { MdDirectionsBike } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

import { motion } from "framer-motion";

import Link from "next/link";

export default function RouteCard() {
  const fontColor = useColorModeValue("gray.600", "white");
  return (
    <>
      <LinkBox>
        <Card
          direction={"column"}
          h={"xs"}
          overflow={"hidden"}
          color={fontColor}
          as={motion.div}
          whileHover={{scale: 1.05}}
        >
          <Box h={"45%"} position={'relative'}>
            <Box position={'absolute'}  bg={'yellow.300'} top={'.5rem'} right={'.5rem'} p={'3px 15px'} borderRadius={'10px'} >
              <MdDirectionsBike fontSize={'1.5rem'} />
            </Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
         <Flex direction={'column'} h={'55%'} >
            <Center fontSize={'xl'} fontWeight={'500'} p={'.3rem'} bg={'red'} w={'100%'}>Fajna trasa</Center>
         </Flex>
        </Card>
      </LinkBox>
    </>
  );
}

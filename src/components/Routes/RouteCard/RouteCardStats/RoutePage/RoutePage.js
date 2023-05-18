import { useRouter } from "next/router";
import ROUTES from "data-test/routes";
import Head from "next/head";
import SectionHeader from "@/UI/SectionHeader/SectionHeader";
import {
  Box,
  Flex,
  HStack,
  Card,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
  Image,
  Heading,
  Divider,
  Center,
  Spacer,
  Tooltip,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { MdDirectionsBike, MdStar } from "react-icons/md";
import { FaClock, FaMapMarkedAlt, FaStar } from "react-icons/fa";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { GiPathDistance } from "react-icons/gi";

export default function RoutePage({ route }) {

  const fontColor = useColorModeValue("gray.600", "gray.200");

  if (!route) {
    return <div>Route not found</div>;
  }
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        gap={"1rem"}
        w={{ base: "90%", md: "70%", lg: "60%" }}
        m={"0 auto"}
      >
        <Box w={"100%"} h={200} borderRadius={"10px"} overflow={"hidden"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Card w={"100%"} fontWeight={"500"} color={fontColor} mb={"1rem"}>
          <Flex
            p={"1rem"}
            h={"100%"}
            gap={"10px"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <Tooltip label="Poziom trudnośći">
              <Box bg={"green.400"} borderRadius={"10px"} p={"5px 10px"}>
                <MdDirectionsBike fontSize={"1.7rem"} color="white" />
              </Box>
            </Tooltip>
            <Tooltip label="Dystans">
              <HStack>
                <GiPathDistance fontSize={"1.7rem"} />
                <Text>{route.distance} KM</Text>
              </HStack>
            </Tooltip>
            <Tooltip label="Czas">
              <HStack>
                <FaClock fontSize={"1.7rem"} />
                <Text>{route.time} h</Text>
              </HStack>
            </Tooltip>
            <Tooltip label="Lokalizacja">
              <HStack>
                <FaMapMarkedAlt fontSize={"1.7rem"} />
                <Text>Krynica</Text>
              </HStack>
            </Tooltip>
            <Tooltip label="Ocena">
              <HStack>
                <StarIcon fontSize={"1.7rem"} color={"yellow.400"} />
                <Text>4.5</Text>
              </HStack>
            </Tooltip>
            <HStack>
              <AiOutlineUser fontSize={"1.7rem"} color={"yellow.400"} />
              <Text>marcio468</Text>
            </HStack>
          </Flex>
        </Card>
        <Divider w={"100%"} />
        <VStack mb={"1rem"}  >
            <Heading fontSize={'2.5rem'}>Opis</Heading>
            <Divider />
          </VStack>
        <Box w={"100%"} color={fontColor}>
          
          Malownicza ścieżka rowerowa z Krynicy do Muszyny wiedzie przez
          urokliwe tereny, oferując niezapomniane wrażenia i piękne widoki na
          malowniczą okolicę. Trasa o długości około 20 kilometrów przyciąga
          zarówno amatorów jazdy na rowerze, jak i bardziej doświadczonych
          cyklistów. Rozpoczynając w Krynicy, ścieżka prowadzi przez bujne lasy,
          gdzie otacza nas świeże powietrze i piękno natury.
          <Spacer h={5} />
          Pierwsze kilometry są delikatne i łagodne, co sprawia, że jazda jest
          przyjemna i relaksująca. Po chwili dociera się do malowniczych łąk,
          gdzie można podziwiać soczyście zielone pola, które rozciągają się na
          horyzoncie. Kolejne etapy trasy prowadzą wzdłuż krystalicznie czystych
          potoków, których szepty towarzyszą rowerzystom.
          <Spacer h={5} />
          W miarę jak przemieszczamy się dalej, droga wznosi się i opada,
          oferując piękne widoki na wzgórza i doliny. W niektórych miejscach
          można zatrzymać się na chwilę, by oddychać świeżym powietrzem i
          podziwiać panoramę wokół. W pewnym momencie ścieżka prowadzi przez
          urocze wsie, gdzie można zobaczyć tradycyjne drewniane chałupy i
          przystanki, które zachowują autentyczny charakter regionu. Wioski te
          są często ozdobione kwiatami i kolorowymi ogródkami, co dodaje uroku
          temu malowniczemu krajobrazowi.
          <Spacer h={5} />
          Docierając do Muszyny, ścieżka prowadzi wzdłuż rzeki Poprad, co dodaje
          kolejnej warstwy piękna krajobrazowi. Zieleń brzegów rzeki i góry w
          tle tworzą niesamowitą scenerię, idealną do zatrzymania się na
          odpoczynek i zrelaksowanie się. Ta malownicza ścieżka rowerowa z
          Krynicy do Muszyny jest nie tylko świetnym sposobem na aktywne
          spędzenie czasu, ale także doskonałą okazją do odkrycia uroku Beskidu
          Sądeckiego. Bez względu na porę roku, ta trasa oferuje niezapomniane
          wrażenia i pozwala na cieszenie się pięknem przyrody wokół nas.
        </Box>
        <Divider w={"100%"} />
        <Grid
          h={300}
          w={"100%"}
          bg={"gray.200"}
          templateRows={{base:"repeat(3,1fr)", md:"repeat(2,1fr)"}}
          templateColumns={{base:"repeat(1,1fr)", md:"repeat(4,1fr)"}}
          gap={"3px"}
          borderRadius={"10px"}
          overflow={"hidden"}
        >
          <GridItem rowSpan={{base: 1, md:2}} colSpan={{base:1,md:3}}>
            <Image
              src="https://ocdn.eu/pulscms-transforms/1/y-Wk9kpTURBXy81M2Q5MzRjOTA2MDk5MGM5YmQ5ZGMwZTI4ZWY3MzI4Mi5qcGeTlQMAAM0QAM0JAJMFzQSwzQKkkwmmOWZhYjFkBt4AAaEwAQ/beskid-sadecki.jpeg"
            h={{base:'100%', md:'max'}}
              objectFit={"cover"}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://images.unsplash.com/photo-1596987851982-3b90e09ab4ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              h={"100%"}
              objectFit={"cover"}
              
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://images.unsplash.com/photo-1516117505817-8f26dd5d1b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80"
              h={"100%"}
              objectFit={"cover"}
            />
          </GridItem>
        </Grid>

        <Divider w={"100%"} />
        
        <VStack mb={"1rem"}  >
            <Heading fontSize={'2.5rem'}>Ciekawe miejsca w pobliżu</Heading>
            <Divider />
          </VStack>
      </Flex>
    </>
  );
}

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
} from "@chakra-ui/react";
import { MdDirectionsBike, MdStar } from "react-icons/md";
import { FaClock, FaMapMarkedAlt, FaStar } from "react-icons/fa";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import {GiPathDistance} from 'react-icons/gi'
import RoutePage from "components/Routes/RoutePage/RoutePage";

export default function BikeRoutes() {
  const router = useRouter();
  const { id } = router.query;

  const route = ROUTES.find((route) => route.id === id);

  //    const difficultyBgColor =
  //    (route &&
  //     route.difficulty == "easy"
  //       ? "green.300"
  //       : route.difficulty == "medium"
  //       ? "yellow.300"
  //       : "red.300");
  const fontColor = useColorModeValue("gray.600", "gray.200");

  if (!route) {
    return <div>Route not found</div>;
  }
  return (
    <>
      <Head>
        <title>{route.title}</title>
        <meta name="opis" content={route.description} />
      </Head>
      <IconButton icon={<StarIcon/>} position={'fixed'} bottom={10} right={10} colorScheme='green'/>
      <SectionHeader title={route.title} />
      <RoutePage route={route}/>
    </>
  );
}

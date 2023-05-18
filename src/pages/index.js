import LandingPageCard from "@/UI/LandingPage/LandingPageCard";
import SectionHeader from "@/UI/SectionHeader/SectionHeader";
import { ArrowDownIcon, ArrowForwardIcon, PlusSquareIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSession } from "@supabase/auth-helpers-react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaComment, FaRegCommentDots, FaStar } from "react-icons/fa";
import { IoTrailSignOutline } from "react-icons/io5";
import {
  MdDirectionsBike,
  MdOutlineAccountBalance,
  MdOutlineEventNote,
  MdSportsTennis,
} from "react-icons/md";

export default function Home() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const isDark = colorMode === "dark";
  const logoSrc = isDark ? "/full-logo-dark.svg" : "/full-logo.svg";
  const textColor = useColorModeValue("gray.600", "white");
  const session = useSession();
  // const about = document.getElementById("about");

  // useEffect(() => {
  //   if (session) {
  //     router.push("/bike-routes");
  //   }
  // }, [session]);

  // const handleScroll = () => {
  //   about.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <Head>
        <title>Sądecki Sprinter</title>
      </Head>
      
      
      <Flex
        h={"100vh"}
        direction={"column"}
        justifyContent={"space-between"}
        p={"2rem 0"}
        position={"relative"}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 60,
          }}
        >
          <Center mt={"3rem"}>
            <Image src={logoSrc} w={{ base: "75%", md: "25%" }} />
          </Center>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 280,
            damping: 80,
          }}
        >
          <Stack
            w={{ base: "90%", lg: "65%" }}
            textAlign={"center"}
            m={"0 auto"}
          >
            <Heading
              color={textColor}
              fontWeight={"800"}
              fontSize={{ base: "4xl", md: "6xl", xl: '7xl' }}
            >
              Odkryj Nowy Sącz na{" "}
              <Text as={"span"} color={"green.300"}>
                własnych zasadach
              </Text>
            </Heading>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 280,
            damping: 80,
          }}
        >
          <Center>
            <Button
              w={"max-content"}
              m={{ base: "2rem auto", lg: "5rem auto" }}
              p={"2rem 3rem"}
              fontSize={{ base: "3xl", md: "4xl" }}
              bg={"green.300"}
              _hover={{ bg: "green.400" }}
              color={"white"}
              onClick={() => {
                router.push("/bike-routes");
              }}
            >
              Odkrywaj
            </Button>
          </Center>
          <Center>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatDelay: 1,
              }}
            >
              <Button
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                // onClick={handleScroll}
              >
                <ArrowDownIcon fontSize={{ base: "2.5rem", md: "3rem" }} />
              </Button>
            </motion.div>
          </Center>
        </motion.div>
      </Flex>

      <Flex direction={"column"} gap={"3rem"} mt={'4rem'}>
        <SectionHeader title={"Odkryj"} />

        <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={"10"} p={"0 2rem"}>
          <LandingPageCard
            icon={IoTrailSignOutline}
            title={"Trasy i szlaki"}
            desc={
              "Odkryj piękne trasy i szlaki, które możesz eksplorować. Ciesz się przygodą na świeżym powietrzu i odkrywaj nowe miejsca."
            }
          />
          <LandingPageCard
            icon={MdSportsTennis}
            title={"Obiekty sportowe"}
            desc={
              "Znajdź i poznaj różnorodne obiekty sportowe w swojej okolicy. Ciesz się aktywnością fizyczną w profesjonalnych miejscach do uprawiania twojego ulubionego sportu"
            }
          />
          <LandingPageCard
            icon={MdOutlineAccountBalance}
            title={"Atrakcje turstyczne"}
            desc={
              "Odkryj ciekawe zabytki i atrakcje turystyczne. Poznaj historię i kulturę regionu i zanurz się w fascynujących miejscach. "
            }
          />
          <LandingPageCard
            icon={MdOutlineEventNote}
            title={"Wydarzenia sportowe"}
            desc={
              "Nie przegapisz żadnego interesującego wydarzenia sportowego w twojej okolicy."
            }
          />
        </SimpleGrid>
        <SectionHeader title={"Społeczność"} />
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={"10"} p={"0 2rem"} mb={'5rem'}>
        <LandingPageCard
            icon={PlusSquareIcon}
            title={"Dziel się "}
            desc={
              "Nie przegapisz żadnego interesującego wydarzenia sportowego w twojej okolicy."
            }
          />
        <LandingPageCard
            icon={AiOutlineStar}
            title={"Oceniaj "}
            desc={
              "Nie przegapisz żadnego interesującego wydarzenia sportowego w twojej okolicy."
            }
          />
        <LandingPageCard
            icon={FaRegCommentDots}
            title={"Komentuj"}
            desc={
              "Nie przegapisz żadnego interesującego wydarzenia sportowego w twojej okolicy."
            }
          />
        </SimpleGrid>
      </Flex>
    </>
  );
}

import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

export default function Layout({ children }) {
  const [mobileWidth] = useMediaQuery("(max-width: 992px)");
  const router = useRouter();
  const isHomePage = router.pathname === "/"; // Sprawdzenie, czy bieżąca strona to strona główna

  return (
    <Flex>
      {!isHomePage && (mobileWidth ? <MobileNavbar /> : <DesktopNavbar />)}
      <Box as="main" flex={"1"}>
        {children}
      </Box>
    </Flex>
  );
}

import { Flex, Box, useMediaQuery } from "@chakra-ui/react"
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar"
import MobileNavbar from "./MobileNavbar/MobileNavbar"
export default function Layout({ children }) {
  const [mobileWidth] = useMediaQuery("(max-width: 992px)")

  return (
    <Flex>
      {mobileWidth ? <MobileNavbar /> : <DesktopNavbar />}
      <Box as="main" flex={"1"}>
        {children}
      </Box>
    </Flex>
  )
}
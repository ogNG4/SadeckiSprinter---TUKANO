import { Flex, Box } from "@chakra-ui/react"
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar"
export default function Layout({children}){

    return(
        <>
        <Flex>
         <DesktopNavbar/>
         <Box as='main' flex={'1'}>{children}</Box>
         </Flex>
        </>
       
    )
}
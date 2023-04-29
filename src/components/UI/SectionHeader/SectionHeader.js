import { Center, Text, useColorModeValue } from "@chakra-ui/react";

export default function SectionHeader({title}) {

        
        return(
            <Center fontSize={'2.6rem'} bg={'green.400'} p={'0 1rem'} w={'max-content'} m={'3rem auto'} boxShadow={'green-lg'} textTransform={'uppercase'} letterSpacing={'3px'} borderRadius={'10px'} fontWeight={'500'}>
                {title}
            </Center>
        )
}
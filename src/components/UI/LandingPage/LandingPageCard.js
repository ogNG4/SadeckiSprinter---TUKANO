import { Card, Flex, Text } from "@chakra-ui/react";



export default function LandingPageCard({icon: Icon, title, desc}) {
    return(
        <Card p={'1rem'} >
            <Flex direction={'column'} alignItems={'center'} gap={'20px'}  >
                <Card bg={'gray.600'} p={'10px'} boxShadow={'lg'} border={'1px solid gray'}>
                <Icon fontSize={'6rem'}/>
                </Card>
                <Text fontSize={'2xl'} fontWeight={'500'}>{title}</Text>
                <Text color={'gray.300'}>{desc}</Text>
            </Flex>
        </Card>
    )
}
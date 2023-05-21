import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Card, Flex, Text, Box, HStack } from "@chakra-ui/react";
export default function RouteComment({user,time,rating, comment}) {
  return (
    <Card  minH={"10vh"} p={".5rem"} >
      <Flex gap={'20px'}>
        <Box  >
          <Avatar />
        </Box>
        <Flex direction={'column'} flex={'1'} >
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <HStack>
                <Text fontWeight={'500'}>{user}</Text>
                <Text fontSize={'.8rem'}>{time}</Text>
                </HStack>
                <HStack>
                    <StarIcon color={'yellow.400'} />
                    <Text fontWeight={'500'}>{rating}</Text>
                </HStack>
            </Flex>
            <Text fontSize={'.9rem'}>{comment}</Text>
        </Flex>
      </Flex>
    </Card>
  );
}

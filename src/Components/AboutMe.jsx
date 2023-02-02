import Typical from 'react-typical'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
} from '@chakra-ui/react';

import heroImage from "../assets/heroImage.png"
import { ImYoutube2} from 'react-icons/im';
// import { FaFistRaised } from 'react-icons/fa';
// import { FaFistRaised } from 'react-icons/fa';


export default function Hero() {
  return (
    <Container maxW={'7xl'} >
    <Heading
    fontWeight={600}
    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
    lineHeight={'20%'}
    textAlign="center"
    >
    About{' '}
    <Text as={'span'} color={'blue.400'}>
      me
    </Text>
  </Heading>
      <Stack
      
        align={'center'}
        spacing={{ base: 8, md: 10,lg:12 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column-reverse', md: 'column-reverse',lg:"row"}}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        
        <Text fontSize={{ base: 'lg',md:"x-large", lg: "x-large" }} >
        Self-motivated, hard-working, and ambitious Full Stack Web Developer from Masai School with proficiency in javascript and React. Experienced at creating apps in collaborative as well as individual capacities with MERN stack and various web technologies including HTML, CSS, Javascript, React, and Redux. Looking for job opportunities in a technology-driven organization that helps to enhance career as well as knowledge.

      </Text>
      <Stack fontWeight={"bold"} align={"flex-start"}>
      <Text fontSize={"2xl"}>Some of my other interests</Text>
      <Text >
      <ul>
      <li >YouTube Vlogging</li>
      <li>Traveling</li>
      </ul>
      </Text>
      </Stack>
      
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            
            <Button
              rounded={'full'}
              size={'lg'}
              zIndex={-1}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'red.500' }}>
              Resume
            </Button>
           
          </Stack>
        </Stack>
        <Flex
          flex={0.6}
          justify={'center'}
          align={'center'}
          position={'relative'}
          
          >
          
        
          <Box
            position={'relative'}
            height={'full'}
            rounded={'2xl'}
            boxShadow={'3xl'}
            zIndex={-1}
            width={'full'}
            padding={"1rem"}
            marginLeft={"8rem"}
            overflow={'hidden'}>
           
            <Image
              alt={'Braj Image'}
              fit={'cover'}
              align={'center'}
              border={"2px solid silver"}
              boxShadow="rgba(33, 150, 243) 0px 5px 15px"
              w={'100%'}
              h={'100%'}
              marginBottom={"120px"}
              borderRadius={"60px 10px 60px 10px"}
              src={
             heroImage
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}


export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
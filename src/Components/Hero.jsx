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
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  HStack
} from '@chakra-ui/react';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsGithub, BsDiscord, BsPerson, BsYoutube, BsLinkedin } from "react-icons/bs";

import { FaFistRaised } from 'react-icons/fa';
export default function Hero() {
  return (
    <section id="home">
    <Container   maxW={'90%'} minH={"xl"} justifyContent={"space-between"} className="headerContainer"
   
    >
      <Stack
      
        align={'center'}
        spacing={{ base: 8, md: 10,lg:12 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column-reverse', md: 'column-reverse',lg:"row"}}
        alignItems={"center"}
       
          >
        <Stack flex={1} margin="auto" py={{ base: 40, md: 55, lg:150 }}   >
          <Heading
           
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}  zIndex={-1}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '35%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex:-1
              }}>
              Hi, i am
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'}>
              Brajmohan verma
            </Text>
          </Heading>
          <Flex fontSize={{base:"2xl",md:"3xl",lg:"4xl"}}><Text as={'span'} color={'blue.400'} fontWeight={"bolder"}>I am</Text>{" "}
          <Text  as={'span'}
          position={'relative'}
          zIndex={-1}
          _after={{
            content: "''",
            width: 'full',
            height: '40%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            zIndex: -1,
          }} marginLeft={"10px"}>
          <Typical
        steps={[ 'Full Stack Developer', 2000,'Mern Stack Developer', 2000,'Problem-Solver', 1000,'YouTuber', 1000]}
        loop={Infinity}
        wrapper="b"
       
      />
        </Text>
       
          </Flex>
        
          <HStack
          mt={{ lg: 10, md: 10 }}
          spacing={1}
          color={"gray.500"}
         
          alignItems="flex-start"
        >
        <a href="https://www.linkedin.com/in/brajmohan-verma-6248b1191/">
        <IconButton
            aria-label="facebook"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "blue.400" }}
            icon={<FaInstagramSquare size="25px" />}
          />
          </a>
          <a href="https://www.youtube.com/@Brajverma">
            <IconButton
            aria-label="youtube"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "blue.400" }}
            icon={<BsYoutube size="25px" />}
          /></a>
          <a href="https://www.linkedin.com/in/brajmohan-verma-6248b1191/">
          <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "blue.400" }}
          icon={<BsLinkedin size="23px" />}
        /></a>
        <a href="https://github.com/vermabraj">
          <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "blue.400" }}
          icon={<BsGithub size="25px" />}
        /></a>
        </HStack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'100%'}
          top={{base:"5rem", md:"1rem"}}
          >
          <Blob
            w={'100%'}
            h={'120%'}
            position={'absolute'}
            top={'-10%'}
            right={0}
            zIndex={-1}
            color="blue.400"
            
          />
          <Box
            position={'relative'}
            height={'full'}
            rounded={'2xl'}
            boxShadow={'5xl'}
            width={'50%'}
            overflow={'hidden'}
            zIndex={-1}
            
            >
           
            <Image
              alt={'Braj Image'}
              fit={'cover'}
              align={'center'}
               
              w={'100%'}
              h={'100%'}
              src={
               "https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
    </section>
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
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from "react-icons/md";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsGithub, BsDiscord, BsPerson, BsYoutube, BsLinkedin } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {

   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_pv0dq4b",
         "template_63wy10l",
         form.current,
         "_bZs8A9aMRu0g-vu5"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
   };

  return (
    <section id="contact">
      <Container
        marginTop={""}
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <div className="text-center mt-20">
          <h3 className="text-4xl font-semibold">
            About <span className="text-blue-400">me</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">Know about me?</p>
        </div>

        <Flex >
          <Box
            bg="blue.400"
            textColor={"black"}
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>
                      Contact <span>me</span>
                    </Heading>
                    <Text
                      mt={{ sm: 3, md: 3, lg: 5 }}
                      color="gray.600"
                      fontWeight={"medium"}
                    >
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="lg"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdPhone color="black" size="20px" />}
                        >
                          +91 9888888888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="black" size="20px" />}
                        >
                          vermabraj4@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdLocationOn color="black" size="20px" />}
                        >
                          Sehore, Madhya Pradesh
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <div className="animate-bounce">
                        {" "}
                        <a href="https://www.linkedin.com/in/brajmohan-verma-6248b1191/">
                          <IconButton
                            aria-label="facebook"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsLinkedin size="28px" />}
                          />
                        </a>
                      </div>
                      <div className="animate-bounce">
                        <a href="https://github.com/vermabraj">
                          <IconButton
                            aria-label="github"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsGithub size="28px" />}
                          />
                        </a>
                      </div>
                      <div className="animate-bounce">
                        <a href="https://www.youtube.com/@Brajverma">
                          <IconButton
                            aria-label="discord"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsYoutube size="28px" />}
                          />
                        </a>
                      </div>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl
                          ref={form}
                          onSubmit={sendEmail}
                          id="name"
                          method="POST"
                        >
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              name="user_name"
                              autoComplete="off"
                              required
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="email"
                              size="md"
                              name="user_email"
                              autoComplete="off"
                              required
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            name="message"
                            cols={"30"}
                            rows={"6"}
                            autoComplete="off"
                            required
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{ bg: "gray.200" }}
                            type="submit"
                            value="Send"
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </section>
  );
}

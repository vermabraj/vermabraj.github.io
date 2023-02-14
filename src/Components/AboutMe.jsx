import Typical from 'react-typical'
import {
  Container,
  Stack,
 
  Text,
  Button,
  Image,
  
} from '@chakra-ui/react';
import Resume from "../assets/Brajmohan_Verma_Resume.pdf";
import heroImage from "../assets/heroImage.png"



export default function AboutMe() {
  return (
    <section id="aboutme">
      <Container maxW={"90%"} >
        <div className="text-center mb-10">
          <h3 className="text-4xl font-semibold">
            ABOUT <span className="text-blue-400">ME</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">Know about me?</p>
        </div>
        <Stack
          align={"center"}
          spacing={{ base: 2, md: 2, lg: 2 }}
          direction={{
            base: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
        >
          <Stack flex={2} spacing={{ base: 2, md: 5 }}>
            <Text className="text-justify  mx-auto fomt-xl text-lg ">
              Self-motivated, hard-working, and ambitious Full Stack Web
              Developer from Masai School with proficiency in javascript and
              React. Experienced at creating apps in collaborative as well as
              individual capacities with MERN stack and various web technologies
              including HTML, CSS, Javascript, React, and Redux. Looking for job
              opportunities in a technology-driven organization that helps to
              enhance career as well as knowledge.
            </Text>
            <Stack fontWeight={"medium"} align={"flex-start"}>
              <Text fontSize={"xl"}>Some of my other interests</Text>
              <Text>
                <p>YouTube Vlogging</p>
                <p>Gym</p>
                <p>Traveling</p>
              </Text>
            </Stack>

            <Stack
              spacing={{ base: 4, md: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <a href="../assets/Brajmohan_Verma_Resume.pdf" download>
                <Button
                  variant="solid"
                  bg="#0D74FF"
                  color="white"
                  _hover={{ bg: "blue.300" }}
                  type="submit"
                  width={{ base: "full",  }}
                >
                  <a
                    href={Resume}
                    target="_blank"
                    rel="noreferrer"
                    download="Brajmohan_Verma_Resume.pdf"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1iRX3957aRE2asiMleyLksndLZOFJUkM0/view?usp=sharing"
                      )
                    }
                  >
                    RESUME
                  </a>
                </Button>
              </a>
            </Stack>
          </Stack>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 p-8  relative sm:w-10/12 w-11/12 max-w-sm  flex space-x-4 ">
              <Image
                alt={"Braj Image"}
                fit={"cover"}
                align={"center"}
                border={"2px solid silver"}
                boxShadow="rgba(33, 150, 243) 0px 5px 15px"
                marginBottom={"120px"}
                borderRadius={"60px 10px 60px 10px"}
                src={heroImage}
              />
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
}


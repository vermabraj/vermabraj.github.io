import {
  Image,
  Box,
  Button,
  chakra,
  Text,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Deccan_chronicle from "../assets/Deccan_chronicle.png";
import chrono_meter from "../assets/chrono_meter.png";
import Quicksell from "../assets/Quicksell.png";
import Reliance_digital from "../assets/Reliance_digital.png";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

import {
  SiRedux,
  SiChakraui,
  SiReact,
  SiFirebase,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";



  const projects = [
    {
      img: Quicksell,
      name: "Quicksell(Olx-Clone)",
      github_link: "https://github.com/vermabraj/Olx-clone",
      live_link: "https://olx-clone-quicksell.netlify.app/",
      disc: `Quicksell website is for buy and sell goods and products & clone os OLX, which makes it so easy to connect people to buy, sell or exchange used goods and services. It's completely free, and it can be used from a laptop or mobile phone.`,
      techStack: [
        <AiOutlineHtml5 size={"30px"} />,
        <IoLogoCss3 size={"30px"} />,
        <IoLogoJavascript size={"35px"} />,
        <SiReact size={"30px"} />,
        <SiRedux size={"30px"} />,
        <SiFirebase size={"30px"} />,
        <SiChakraui size={"30px"} />,
      ],
      techStacknames: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Redux",
        "Firebase",
        "Chakra-ui",
      ],
    },
    {
      img: Reliance_digital,
      name: "Digital Express (Reliance Digital)",
      github_link: "https://github.com/imukeshkaushal/relianceDigital_clone",
      live_link: "https://reliance-digital-beryl.vercel.app/",
      disc: `Digital Xpress is ECommerce Website & is a clone of Reliance Digital. It is used for buying the electrical products, Home Appliances & other kind of products. Digital Express Digital Stores are bigger in size than the other Digital Xpress Mini Stores.`,
      techStack: [
        <AiOutlineHtml5 size={"30px"} />,
        <IoLogoCss3 size={"30px"} />,
        <IoLogoJavascript size={"35px"} />,
        <SiReact size={"30px"} />,
        <SiRedux size={"30px"} />,
        <SiChakraui size={"30px"} />,
      ],
      techStacknames: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Redux",
        "Chakra-ui",
      ],
    },
    {
      img: Deccan_chronicle,
      name: "My Diary",
      github_link: "https://github.com/vermabraj/my-diary",
      live_link: "https://my-diary-vermabraj.vercel.app/",
      disc: `An personal diary, where you can write your own thought on a daily basis and save it as a memory with your photo and also can add your photo to the gallery, anyone can use it. It's full stack app`,
      techStack: [
        <AiOutlineHtml5 size={"30px"} />,
        <IoLogoCss3 size={"30px"} />,
        <IoLogoJavascript size={"30px"} />,
      ],
      techStacknames: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Redux",
        "Chakra-UI",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      img: chrono_meter,
      name: "Chrono-fit (Chrono-meter)",
      github_link: "https://github.com/vermabraj/chrono-meter",
      live_link: "https://radiant-muffin-05b02a.netlify.app/",
      disc: `An fitness website which helps you in your fitness, here you can track your diet, how much diet you have to eat and also excercise, how many calory you need to burn. All the data related to your fitness and health you can track here.`,
      techStack: [
        <AiOutlineHtml5 size={"30px"} />,
        <IoLogoCss3 size={"30px"} />,
        <IoLogoJavascript size={"30px"} />,
      ],
      techStacknames: ["HTML", "CSS", "Javascript"],
    },
  ];


const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

interface ProjectsCardProps {
  name: string;
  img: string;
  github_link: string;
  live_link: string;
  disc:String;
  techStack:String;
  techStacknames:String;
  index: number;
}

function ProjectsCard(props: ProjectsCardProps) {
  const { name, img , github_link , live_link , disc, techStack,techStacknames, index } = props;
  return (
    <Flex
      boxShadow={"lg"}
      padding={"8px"}
      border={"4px solid #42A5F5"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
      }}
    >
      <div className="h-fit  rounded-xl ">
        <Image
          src={img}
          alt=""
          className="rounded-lg "
          borderRadius={"15px"}
          height={"250px"}
          width={"100%"}
          border="3px solid black"
        />
        <h3 className="text-2xl my-2  text-center">{name}</h3>
        <p className=" text-left">{disc}</p>
        <Flex className="mt-2">
          <span className="  font-bold text-sm p-2 ">Tech Stack:</span>

          <Flex flexWrap={"wrap"}>
            {techStacknames.map((el) => (
              <span className="ml-1 text-sm font-semibold ">{el}, </span>
            ))}
          </Flex>
        </Flex>

        <div className="flex gap-10 justify-center mb-5 mt-3">
          <Flex direction="row" className=" gap-10 justify-between">
          <Tooltip
                label="Click to get live demo link!"
                aria-label="A tooltip"
                bg="red.400"
                placement="top-start"
                hasArrow
                arrowSize={15}
              >
            <Button
              onClick={() => window.open(live_link)}
              leftIcon={<CgWebsite />}
              variant="outline"
              colorScheme="blue"
              _hover={{ bg: "#42A5F5",color:"white" }}
              minWidth={"140px"}
            >
              Live Demo
            </Button>
</Tooltip>
<Tooltip
                label="Click to visit Repository of website !"
                aria-label="A tooltip"
                bg="red.400"
                placement="top-start"
                hasArrow
                arrowSize={15}
              >
            <Button
              onClick={() => window.open(github_link)}
              leftIcon={<AiFillGithub size={"22px"} />}
              variant="outline"
              colorScheme="blue"
              _hover={{ bg: "#42A5F5",color:"white" }}
              minWidth={"140px"}
            >
              Visit Github
            </Button>
            </Tooltip>
          </Flex>
        </div>
      </div>
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <section id="projects" className="py-10  border-red">
      <Flex
        pt={1}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
        overflow={"hidden"}
      >
        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
          <div className="text-center mt-20">
            <h3 className="text-4xl font-semibold">
              My <span className="text-blue-400">Projects</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
          </div>
          <br />
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mb={16}
          mx={"auto"}
          w="80%"
          
        >
          {projects.map((cardInfo, index) => (
            <ProjectsCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      
      </Flex>
    </section>
  );
}

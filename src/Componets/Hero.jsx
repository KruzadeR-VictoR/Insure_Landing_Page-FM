import { Button, Flex, Heading, Hide, Image, Text } from "@chakra-ui/react";
import img from "../assets/image-intro-desktop.jpg";
import imgMbl from "../assets/image-intro-mobile.jpg";
import introRightPattern from "../assets/bg-pattern-intro-right-desktop.svg";
import introBottomPattern from "../assets/bg-pattern-intro-right-mobile.svg";
import introLeftPattern from "../assets/bg-pattern-intro-left-desktop.svg";
import introTopPattern from "../assets/bg-pattern-intro-left-mobile.svg";

function Hero() {
  return (
    <Flex
      direction={["column-reverse", "row"]}
      bg={"DarkViolet"}
      minH={"40rem"}
    >
      {/* left */}
      <Flex basis={"50%"} justify={"center"} align={"center"} pos={"relative"}>
        <Flex
          direction={"column"}
          align={["center", "start"]}
          flex={[1, "none"]}
          gap={5}
          textAlign={["center", "start"]}
          w={"70%"}
          //   bg={"red"}
          py={[24, 12]}
          pos={"relative"}
          _before={{
            content: `""`,
            display: ["none", "block"],
            w: "9rem",
            h: "2px",
            pos: "absolute",
            top: "0",
            left: "0",
            bg: "DarkGrayishViolet",
          }}
        >
          <Heading
            color={"white"}
            fontFamily={"DmSerif"}
            fontSize={["3.1rem", "4rem"]}
            fontWeight={"normal"}
            lineHeight={"1"}
          >
            Humanizing your insurance.
          </Heading>
          <Text color={"whiteAlpha.800"}>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </Text>
          <Button
            variant={"outline"}
            color={"white"}
            rounded={"none"}
            letterSpacing={1}
            fontWeight={"normal"}
            px={5}
            mt={4}
            _hover={{
              bg: "VeryLightGray",
              color: "VeryDarkViolet",
            }}
          >
            VIEW PLANS
          </Button>
        </Flex>
        {/* for Desktop  */}
        <Hide below="md">
          <Image
            src={introLeftPattern}
            alt="pattern left"
            w={"fit-content"}
            h={"fit-content"}
            pos={"absolute"}
            left={0}
            bottom={"-50%"}
          />
        </Hide>
        {/* for Mobile  */}
        <Hide above="md">
          <Image
            src={introTopPattern}
            alt="patterns"
            w={"fit-content"}
            h={"fit-content"}
            pos={"absolute"}
            left={0}
            top={0}
          />
        </Hide>
        <Hide above="md">
          <Image
            src={introBottomPattern}
            alt="patterns"
            w={"fit-content"}
            h={"fit-content"}
            pos={"absolute"}
            right={0}
            bottom={"-11rem"}
          />
        </Hide>
      </Flex>
      {/* right */}
      {/*for Desktop */}
      <Flex basis={"50%"} position={"relative"} DmSerif>
        <Hide below="md">
          <Image
            src={img}
            alt="Hero image"
            w={"fit-content"}
            h={"fit-content"}
            pos={"absolute"}
            top={"20%"}
          />
        </Hide>
        {/*for Mobile */}
        <Hide above="md">
          <Image
            src={imgMbl}
            alt="Hero image"
            w={"fit-content"}
            h={"fit-content"}
            top={"20%"}
          />
        </Hide>
        {/* for Desktop  */}
        <Hide below="md">
          <Image
            src={introRightPattern}
            alt="patterns"
            w={"fit-content"}
            h={"fit-content"}
            pos={"absolute"}
            right={0}
          />
        </Hide>
      </Flex>
    </Flex>
  );
}

export default Hero;

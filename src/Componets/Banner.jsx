import { Button, Flex, Heading } from "@chakra-ui/react";
import img_bgPattern from "../assets/bg-pattern-how-we-work-desktop.svg";
import img_bgPatternMbl from "../assets/bg-pattern-how-we-work-mobile.svg";

function Banner() {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      bg={"white"}
      h={["35rem", "20rem"]}
    >
      <Flex
        w={["85%", "80%"]}
        minH={["21rem", "12rem"]}
        direction={["column", "row"]}
        justify={["center", "space-between"]}
        align={"center"}
        gap={[8, 0]}
        px={["2rem", "4rem"]}
        textAlign={["center", "start"]}
        bg={"DarkViolet"}
        bgImg={[img_bgPatternMbl, img_bgPattern]}
        bgRepeat={"no-repeat"}
        bgPos={"right top"}
      >
        <Heading
          fontFamily={"DmSerif"}
          fontSize={["2.4rem", "2rem"]}
          lineHeight={[1.1, "auto"]}
          fontWeight={"normal"}
          color={"white"}
        >
          Find out more <br /> about how we work
        </Heading>
        <Button
          variant={"outline"}
          rounded={"none"}
          color={"white"}
          px={[7]}
          _hover={{
            bg: "VeryLightGray",
            color: "VeryDarkViolet",
          }}
        >
          HOW WE WORK
        </Button>
      </Flex>
    </Flex>
  );
}

export default Banner;

import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import img_snappy from "../assets/icon-snappy-process.svg";
import img_prices from "../assets/icon-affordable-prices.svg";
import img_people from "../assets/icon-people-first.svg";

function Features() {
  const features = [
    {
      id: 1,
      heading: "Snappy Process",
      desc: `Our application process can be completed in minutes, not hours. Don’t get 
            stuck filling in tedious forms.`,
      img: img_snappy,
    },
    {
      id: 2,
      heading: "Affordable Prices",
      desc: `We don’t want you worrying about high monthly costs. Our prices may be low, 
            but we still offer the best coverage possible.`,
      img: img_prices,
    },
    {
      id: 3,
      heading: "People First",
      desc: `Our plans aren’t full of conditions and clauses to prevent payouts. We make 
            sure you’re covered when you need it.`,
      img: img_people,
    },
  ];
  return (
    <Flex minH={"90vh"} justify={"center"} align={"center"}>
      <Flex
        direction={"column"}
        gap={5}
        w={["85%", "80%"]}
        pos={"relative"}
        // bg={"red"}
        py={["3rem", 10]}
        mt={["8rem", "15rem"]}
        // mb={["5rem", 0]}
        _before={{
          content: `""`,
          w: ["10rem", "7rem"],
          h: "1px",
          pos: "absolute",
          top: "0",
          left: ["50%", "0"],
          transform: ["translate(-50%)", "translate(0%)"],
          bg: "DarkGrayishViolet",
        }}
      >
        <Heading
          fontFamily={"DmSerif"}
          fontSize={["2.8rem", "3rem"]}
          fontWeight={"normal"}
          textAlign={["center", "start"]}
        >
          We’re different
        </Heading>
        <Flex direction={["column", "row"]} gap={[12, 8]} mt={"3rem"}>
          {features &&
            features.map((feature) => (
              <Flex
                key={feature.id}
                direction={"column"}
                align={["center", "start"]}
                gap={4}
                textAlign={["center", "start"]}
              >
                <Image src={feature.img} alt="" w={"5rem"} h={"5rem"} />
                <Heading
                  fontFamily={"kalra"}
                  fontSize={["1.7rem", "1.8rem"]}
                  letterSpacing={-1}
                  mt={3}
                >
                  {feature.heading}
                </Heading>
                <Text
                  fontSize={"1rem"}
                  fontWeight={"normal"}
                  color={"DarkGrayishViolet"}
                  //   maxW={"19.5rem"}
                  px={1}
                >
                  {feature.desc}
                </Text>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Features;

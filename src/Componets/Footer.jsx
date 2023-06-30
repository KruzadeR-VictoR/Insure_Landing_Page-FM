import {
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import img_logo from "../assets/logo.svg";
import Fb from "./assets/Fb";
import Twitter from "./assets/Twitter";
import Pinterest from "./assets/Pinterest";
import Insta from "./assets/Insta";
import img from "../assets/bg-pattern-footer-desktop.svg";
import imgMbl from "../assets/bg-pattern-footer-mobile.svg";

function Footer() {
  const Links = [
    {
      id: 1,
      heading: "Our company",
      links: [
        {
          id: 1,
          name: "HOW WE WORK",
        },
        {
          id: 2,
          name: "Why Insure?",
        },
        {
          id: 3,
          name: "View plans",
        },
        {
          id: 4,
          name: "Reviews",
        },
      ],
    },
    {
      id: 2,
      heading: "Help me",
      links: [
        {
          id: 1,
          name: "FAQ",
        },
        {
          id: 2,
          name: "Terms of use",
        },
        {
          id: 3,
          name: "Privacy policy",
        },
        {
          id: 4,
          name: "Cookies",
        },
      ],
    },
    {
      id: 3,
      heading: "Contact",
      links: [
        {
          id: 1,
          name: "Sales",
        },
        {
          id: 2,
          name: "Support",
        },
        {
          id: 3,
          name: "Live chat",
        },
      ],
    },
    {
      id: 4,
      heading: "Others",
      links: [
        {
          id: 1,
          name: "Careers",
        },
        {
          id: 2,
          name: "Press",
        },
        {
          id: 3,
          name: "Licenses",
        },
      ],
    },
  ];
  return (
    <Flex
      as={"footer"}
      justify={"center"}
      // bg={"teal"}
      bg={"VeryLightGray"}
      bgImg={[imgMbl, img]}
      bgRepeat={"no-repeat"}
      bgPos={"left top"}
      //   bgSize={'30%'}
      py={[14, 5]}
    >
      <Flex direction={"column"} w={"80%"}>
        {/* Top  */}
        <Flex
          w={"full"}
          h={"full"}
          direction={["column", "row"]}
          justify={"space-between"}
          align={"center"}
          gap={[10, 0]}
          // bg={"red"}
          py={10}
        >
          <Image
            src={img_logo}
            alt="logo"
            w={"fit-content"}
            h={"fit-content"}
          />
          <Flex align={"center"} gap={[0, 5]}>
            <IconButton
              aria-label="Facebook"
              icon={<Fb />}
              bg={"transparent"}
              h={"0"}
              _hover={{ path: { fill: "VeryDarkViolet" } }}
            />
            <IconButton
              aria-label="Facebook"
              icon={<Twitter />}
              bg={"transparent"}
              h={"0"}
              _hover={{ path: { fill: "VeryDarkViolet" } }}
            />
            <IconButton
              aria-label="Facebook"
              icon={<Pinterest />}
              bg={"transparent"}
              h={"0"}
              _hover={{ path: { fill: "VeryDarkViolet" } }}
            />
            <IconButton
              aria-label="Facebook"
              icon={<Insta />}
              bg={"transparent"}
              h={"0"}
              _hover={{ path: { fill: "VeryDarkViolet" } }}
            />
          </Flex>
        </Flex>
        <Divider role="none" borderColor={"gray"} />
        {/* Bottom  */}
        <Flex
          direction={["column", "row"]}
          align={["center", "start"]}
          gap={[10, 40]}
          my={10}
          pb={5}
          textAlign={["center", "start"]}
        >
          {Links &&
            Links.map((link) => (
              <Flex key={link.id} direction={"column"} gap={8}>
                <Heading
                  fontSize={"1rem"}
                  fontWeight={"semibold"}
                  color={"DarkGrayishViolet"}
                  textTransform={"uppercase"}
                  letterSpacing={1}
                >
                  {link.heading}
                </Heading>
                <UnorderedList
                  listStyleType={"none"}
                  m={0}
                  sx={{ display: "flex", flexDir: "column", gap: "2" }}
                >
                  {link.links &&
                    link.links.map((el) => (
                      <ListItem key={el.id}>
                        <Link
                          href="#"
                          fontWeight={"semibold"}
                          textTransform={"uppercase"}
                        >
                          {el.name}
                        </Link>
                      </ListItem>
                    ))}
                </UnorderedList>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;

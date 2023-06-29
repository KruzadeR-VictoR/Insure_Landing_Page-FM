import {
  Button,
  Flex,
  Hide,
  IconButton,
  Image,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import Hamburger from "./assets/Hamburger";
import Close from "./assets/Close";
import imgPattern from "../assets/bg-pattern-mobile-nav.svg";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const beforeStyle = {
    display: "block",
    content: `attr(title)`,
    fontWeight: "bold",
    height: 0,
    overflow: "hidden",
    visibility: "hidden",
  };
  return (
    <>
      <Flex
        as={"header"}
        bg={"VeryLightGray"}
        justify={"space-between"}
        align={"center"}
        p={[8, 4]}
        px={[6, 10]}
      >
        <Image
          src={logo}
          alt="Insure Logo"
          w={"fit-content"}
          h={"full"}
          cursor={"pointer"}
        />
        <Hide below="md">
          <Flex align={"center"} gap={10}>
            <UnorderedList
              listStyleType={"none"}
              sx={{ display: "flex", gap: "10" }}
            >
              <ListItem>
                <Link
                  href="#"
                  fontFamily={"Karla"}
                  fontSize={".9rem"}
                  letterSpacing={1}
                  color={"DarkGrayishViolet"}
                  _before={beforeStyle}
                  title="HOW WE WORK"
                  _hover={{
                    fontWeight: "bold",
                    color: "DarkViolet",
                  }}
                  _active={{
                    color: "DarkViolet",
                  }}
                >
                  HOW WE WORK
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  fontFamily={"Karla"}
                  fontSize={".9rem"}
                  letterSpacing={1}
                  color={"DarkGrayishViolet"}
                  _before={beforeStyle}
                  title="BLOG"
                  _hover={{
                    fontWeight: "bold",
                    color: "DarkViolet",
                  }}
                  _active={{
                    color: "DarkViolet",
                  }}
                >
                  BLOG
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  fontFamily={"Karla"}
                  fontSize={".9rem"}
                  letterSpacing={1}
                  color={"DarkGrayishViolet"}
                  _before={beforeStyle}
                  title="ACCOUNT"
                  _hover={{
                    fontWeight: "bold",
                    color: "DarkViolet",
                  }}
                  _active={{
                    color: "DarkViolet",
                  }}
                >
                  ACCOUNT
                </Link>
              </ListItem>
            </UnorderedList>
            <Button
              variant={"outline"}
              border={"2px solid black"}
              rounded={"none"}
              _hover={{
                bg: "VeryDarkViolet",
                color: "VeryLightGray",
              }}
            >
              VIEW PLANS
            </Button>
          </Flex>
        </Hide>
        <Hide above="md">
          <IconButton
            aria-label="Hamburger Menu"
            icon={isOpen ? <Close /> : <Hamburger />}
            onClick={onOpen}
            bg={"transparent"}
            h={"0"}
          />
        </Hide>
      </Flex>
      {/* Mobile Menu  */}
      <Hide above="md">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalBody
              bg={"VeryDarkViolet"}
              minH={"90vh"}
              py={"3rem"}
              mt={5}
              pos={"relative"}
            >
              <Flex direction={"column"} align={"center"} gap={5}>
                <UnorderedList
                  listStyleType={"none"}
                  sx={{
                    display: "flex",
                    flexDir: "column",
                    alignItems: "center",
                    gap: "10",
                  }}
                >
                  <ListItem>
                    <Link
                      href="#"
                      textDecor={"none"}
                      color={"VeryLightGray"}
                      fontSize={"1.2rem"}
                      fontWeight={"semibold"}
                      letterSpacing={1}
                    >
                      HOW WE WORK
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="#"
                      textDecor={"none"}
                      color={"VeryLightGray"}
                      fontSize={"1.2rem"}
                      fontWeight={"semibold"}
                      letterSpacing={1}
                    >
                      BLOG
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="#"
                      textDecor={"none"}
                      color={"VeryLightGray"}
                      fontSize={"1.2rem"}
                      fontWeight={"semibold"}
                      letterSpacing={1}
                    >
                      ACCOUNT
                    </Link>
                  </ListItem>
                </UnorderedList>
                <Button
                  variant={"outline"}
                  alignSelf={"stretch"}
                  color={"white"}
                  rounded={"none"}
                  letterSpacing={1}
                  fontSize={"1.2rem"}
                  fontWeight={"semibold"}
                  py={7}
                  mt={4}
                  _hover={{
                    bg: "VeryLightGray",
                    color: "VeryDarkViolet",
                  }}
                >
                  VIEW PLANS
                </Button>
                <Image
                  src={imgPattern}
                  alt="pattern img"
                  pos={"absolute"}
                  bottom={0}
                />
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Hide>
    </>
  );
}

export default Header;

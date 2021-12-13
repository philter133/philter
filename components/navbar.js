// Navigation Bar Component

import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button.js";
import Login from "./Login";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        fontFamily={"Righteous"}
        p={2}
        bg={active ? useColorModeValue("#7C8AC5", "#EFF1F3") : undefined}
        borderRadius={"10px"}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#EFF1F3", "#202023")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        justify="space-between"
        width={"100vw"}
      >
        <Flex align="center" mr={5}>
          <Link
            href="/"
            fontFamily={"Righteous"}
            bgColor={useColorModeValue("#7C8AC5", "#EFF1F3")}
            borderStyle={"solid"}
            borderColor={useColorModeValue("#7C8AC5", "EFF1F3")}
            borderWidth={"5px"}
            borderRadius={"10px"}
            fontSize={"40px"}
            color={useColorModeValue("#EFF1F3", "#202023")}
            paddingRight={"30px"}
            paddingLeft={"30px"}
            marginRight={"10vw"}
            as="h1"
            size="lg"
            letterSpacing={"tighter"}
          >
            Philter
          </Link>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          marginLeft={"4vw"}
        >
          <LinkItem href="/adopter" path={path}>
            Style Adapter
          </LinkItem>

          <LinkItem href="/philter" path={path}>
            Filter
          </LinkItem>

          <LinkItem href="/restoration" path={path}>
            Image Restorator
          </LinkItem>

          <LinkItem href="/gallery" path={path}>
            Gallery
          </LinkItem>

          <LinkItem href="/developer" path={path}>
            Developers
          </LinkItem>

          <Login />
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            {/* isLazy id="navbar-menu" */}
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/developer" passHref>
                  <MenuItem as={Link}>Developer Page</MenuItem>
                </NextLink>
                <NextLink href="/adopter" passHref>
                  <MenuItem as={Link}>Style Adapter Page</MenuItem>
                </NextLink>
                <NextLink href="/philter" passHref>
                  <MenuItem as={Link}>Philter Page</MenuItem>
                </NextLink>
                <NextLink href="/restoration" passHref>
                  <MenuItem as={Link}>Image Restoration Page</MenuItem>
                </NextLink>
                <NextLink href="/gallery" passHref>
                  <MenuItem as={Link}>Gallery Page</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;

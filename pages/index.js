import Head from "next/head";
import {
  Heading,
  Link,
  Box,
  Container,
  Image,
  useColorModeValue,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";

export default function Home() {
  return (
    <>
      <Head>
        <title>Philter | Home</title>
        <meta name="keywords" content="Home" />
      </Head>
      <Layout>
        <Container maxW="container.xl">
          <Box
            borderRadius="lg"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            p={3}
            mb={6}
            maxW={800}
            align="center"
          >
            <Heading as="h2" variant="page-tile">
              Philter
            </Heading>
          </Box>
          <Section delay={0.1}>
            <SimpleGrid
              borderRadius={30}
              backgroundColor="white"
              maxW="1000"
              minH="700"
            >
              <div align="center">
                <Image
                  boxSize="250px"
                  objectFit="cover"
                  padding="4"
                  src="/images/SriDev1.jpg"
                  alt="Sri"
                  backgroundSize="500px"
                  backgroundColor="white"
                  paddingLeft={5}
                  borderRadius={45}
                  marginTop={2}
                  marginLeft={1}
                />
              </div>
              <Container
                backgroundColor=""
                textColor="black"
                padding="5"
                h="266px"
                fontSize={12}
              ></Container>
            </SimpleGrid>

            <Box align="center" my={4}>
              <NextLink href="/philter">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  Create your own
                </Button>
              </NextLink>
            </Box>
          </Section>
          <Section delay={0.1}>
            <SimpleGrid
              borderRadius={30}
              backgroundColor="white"
              maxW="1000"
              minH="700"
            >
              <Container
                backgroundColor=""
                textColor="black"
                padding="5"
                h="266px"
                fontSize={12}
              ></Container>
            </SimpleGrid>

            <Box align="center" my={4}>
              <NextLink href="/adopter">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  Create your own
                </Button>
              </NextLink>
            </Box>
          </Section>
          <Section delay={0.1}>
            <SimpleGrid
              borderRadius={30}
              backgroundColor="white"
              maxW="1000"
              minH="700"
            >
              <Container
                backgroundColor=""
                textColor="black"
                padding="5"
                h="266px"
                fontSize={12}
              ></Container>
            </SimpleGrid>

            <Box align="center" my={4}>
              <NextLink href="/restoration">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  Create your own
                </Button>
              </NextLink>
            </Box>
          </Section>
        </Container>
      </Layout>
    </>
  );
}

import Head from "next/head";
import React, { useState } from "react";
import {
  Heading,
  Link,
  Box,
  Container,
  Image,
  useColorModeValue,
  Button,
  SimpleGrid,
  flex,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import image from "next/image";

export default function Home() {
  function ImagesContainer() {
    const images = [
      "https://picsum.photos/200?random=1", //IMAGE URL FROM SRI ON FRIDAY
      "https://picsum.photos/200?random=2",
      "https://picsum.photos/200?random=3",
      "https://picsum.photos/200?random=4",
      "https://picsum.photos/200?random=5",
      "https://picsum.photos/200?random=6",
    ];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    return (
      <div>
        <SelectedImage url={selectedImage} />
        {images.map((url) => (
          <ImageGridItem
            url={url}
            selected={url === selectedImage}
            onClick={() => setSelectedImage(url)}
          />
        ))}
      </div>
    );
  }
  function SelectedImage({ url }) {
    return <img src={url} style={{ width: 250 }} />;
  }

  function ImageGridItem({ url, selected, onClick }) {
    return (
      <img
        src={url}
        style={{
          borderStyle: selected ? "solid" : "none",
          margin: "10px",
          display: "inline-flex",
          borderColor: "blue",
        }}
        onClick={onClick}
      />
    );
  }

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
                <ImagesContainer />
              </div>
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

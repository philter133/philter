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
import { ArrowBackIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import image from "next/image";

export default function Home() {
  function ImagesContainer() {
    const images = [
      "https://i.ibb.co/fQxF60K/STARRY-NIGHT.jpg", //IMAGE URL FROM SRI ON FRIDAY
      "https://i.ibb.co/VSLPHj2/CUDI.jpg", //
      "https://i.ibb.co/sPN1YZ6/MOSAIC.jpg",
    ];

    const filteredImages = [
      "https://i.ibb.co/6HqCk7r/31bee301-8065-424c-8e5a-675ad171dabb.jpg", //IMAGE URL FROM SRI ON FRIDAY
      "https://i.ibb.co/YL6ndZX/6c2f5713-f69d-4e08-a13a-0f2b9dfb6218.jpg", //
      "https://i.ibb.co/XtmYvfw/a5bc4e41-56fa-4f64-812c-45458852be53.jpg",
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
      <div>
        <SelectedImage url={filteredImages[selectedImageIndex]} />
        {images.map((url, i) => (
          <ImageGridItem
            url={url}
            selected={url === images[selectedImageIndex]}
            onClick={() => setSelectedImageIndex(i)}
          />
        ))}
      </div>
    );
  }

  function SelectedImage({ url }) {
    return <img src={url} style={{ width: 250 }} />; // instead of selected image, load another radom image for now
  }

  function ImageGridItem({ url, selected, onClick }) {
    return (
      <div align="center">
        <Image
          src={url}
          style={{
            margin: "10px",
            borderColor: "blue",
            width: "150px",
            height: "150px",
            display: "inline-flex",
          }}
          onClick={onClick}
        />
      </div>
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
              <Container textAlign="center" textColor="RED" p={2}>
                <div align="center">
                  <Image
                    src="https://picsum.photos/200?random=13"
                    boxSize="300px"
                  />
                </div>
                <div flexDirection="row">
                  <Image
                    margin="50px"
                    display="inline-flex"
                    src="https://picsum.photos/200?random=13"
                    boxSize="150px"
                  />
                  <Image
                    margin="50px"
                    display="inline-flex"
                    src="https://picsum.photos/200?random=15"
                    boxSize="150px"
                  />
                </div>
              </Container>
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
              <Container textAlign="center" textColor="RED" p={2}>
                <div flexDirection="row">
                  <Image
                    src="https://picsum.photos/200?random=15"
                    width={200}
                    height={500}
                    display="inline-flex"
                    margin="25px"
                  />

                  <Image
                    margin="25px"
                    display="inline-flex"
                    src="https://picsum.photos/200?random=15"
                    width={200}
                    height={500}
                  />
                </div>
              </Container>
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

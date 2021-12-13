// Home Page
// The first page of the Philter application
// Contains the sample of our 3 features ( Philter, Style Adopter, Image Restoration)
// Navigates to Gallery Page (where user can access their saved Data and compare them side-by-side
// Navigates to Developer Page which contains the information about the developers of the project.

import Head from "next/head";
import React, { useState } from "react"; // import React and React Hook
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
} from "@chakra-ui/react"; // import Chakra UI components
import NextLink from "next/link";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ArrowBackIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import image from "next/image";

export default function Home() {
  // Implementing 2 arrays that associates with one another
  // loading the sample filtered image when user click the sample style image
  function ImagesContainer() {
    const images = [
      // Array of sample style Image
      "https://i.ibb.co/fQxF60K/STARRY-NIGHT.jpg",
      "https://i.ibb.co/VSLPHj2/CUDI.jpg",
      "https://i.ibb.co/sPN1YZ6/MOSAIC.jpg",
    ];

    const filteredImages = [
      // Array of sample filtered Image
      "https://i.ibb.co/6HqCk7r/31bee301-8065-424c-8e5a-675ad171dabb.jpg",
      "https://i.ibb.co/YL6ndZX/6c2f5713-f69d-4e08-a13a-0f2b9dfb6218.jpg",
      "https://i.ibb.co/XtmYvfw/a5bc4e41-56fa-4f64-812c-45458852be53.jpg",
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // React Hooks

    return (
      <div>
        <SelectedImage url={filteredImages[selectedImageIndex]} />
        {images.map(
          (
            url,
            i //using Image Map to connect two arrays the way we want
          ) => (
            <ImageGridItem
              url={url}
              selected={url === images[selectedImageIndex]}
              onClick={() => setSelectedImageIndex(i)}
            />
          )
        )}
      </div>
    );
  }

  function SelectedImage({ url }) {
    // Image user selected
    return (
      <img
        src={url}
        style={{
          width: 300,
          borderRadius: "10px",
          overflow: "none",
          marginTop: "20px",
        }}
      />
    );
  }

  function ImageGridItem({ url, selected, onClick }) {
    // Images loads in grid format
    return (
      <div align="center">
        <Image
          src={url}
          borderRadius={10}
          overflow={"none"}
          style={{
            display: "list-item",
            margin: "10px",
            borderColor: "blue",
            width: "150px",
            height: "150px",
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
          <div
            style={{
              marginTop: "50px",
            }}
          ></div>
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
                <Button rightIcon={<ChevronRightIcon />}>
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
              minH="600"
            >
              <Container textAlign="center" textColor="RED" p={2}>
                <div align="center">
                  <Image
                    borderRadius={10}
                    overflow={"none"}
                    marginTop={10}
                    src="https://i.ibb.co/0Xk0T7y/d5f3e503-a466-4c4e-a9b3-821fbe67a87b.jpg"
                    boxSize="300px"
                  />
                </div>
                <div flexDirection="row">
                  <Image
                    borderRadius={10}
                    overflow={"none"}
                    display="inline-flex"
                    marginTop="20px"
                    marginRight="80px"
                    src="https://i.ibb.co/x1cx8vq/df67f869-1767-4835-a3ab-3321d45c4047.jpg"
                    boxSize="150px"
                  />
                  <Image
                    borderRadius={10}
                    overflow={"none"}
                    display="inline-flex"
                    src="https://i.ibb.co/JkwfLcq/239e4b1c-1bec-4526-8d24-b8c60911a934.jpg"
                    boxSize="150px"
                  />
                </div>
              </Container>
            </SimpleGrid>

            <Box align="center" my={4}>
              <NextLink href="/adopter">
                <Button rightIcon={<ChevronRightIcon />}>
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
                    borderRadius={10}
                    overflow={"none"}
                    src="https://i.ibb.co/PWQBPWq/b1fbfbc7-664f-4096-a29a-1d82e76dcc07.jpg"
                    display="inline-flex"
                    margin="25px"
                  />

                  <Image
                    margin="25px"
                    display="inline-flex"
                    borderRadius={10}
                    overflow={"none"}
                    src="https://i.ibb.co/YT9R27h/b7d5f250-0c2f-46db-8799-6441d5996613.jpg"
                    width={390}
                    height={280}
                  />
                </div>
              </Container>
            </SimpleGrid>

            <Box align="center" my={4}>
              <NextLink href="/restoration">
                <Button rightIcon={<ChevronRightIcon />}>
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

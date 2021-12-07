import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
  Image,
  IconButton,
  RadioGroup,
  Radio,
  Input,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import {
  CheckIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const Gallery = () => {
  const [imgNum, setImageNum] = useState("0");
  const [searchNum, setRad] = useState("1");
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [iconSet, setIcon] = useState("1");
  const [iconTagSet, setTagIcon] = useState("0");
  const [showModal, setShowModal] = useState(false);

  const handleTypeTag = (nam) => {
    setTag(nam.target.value);
  };

  const handleTypeName = (nam) => {
    setName(nam.target.value);
  };

  const toggleMode = () => {
    {
      iconSet == 0 ? setIcon("1") : setIcon("0");
    }
  };

  const toggleTagMode = () => {
    {
      iconTagSet == 0 ? setTagIcon("1") : setTagIcon("0");
    }
  };

  const useModeValue = (variable) => {
    return variable == 0 ? "red" : "green";
  };

  return (
    <Layout title="gallery">
      <Head>
        <title>Philter | Gallery</title>
        <meta name="keywords" content="gallery" />
      </Head>
      <style jsx>
        {`
    .container {
      position: relative;
      width: 71%;
    }
    
    .image {
      display: block;
      width: 100%;
      height: auto;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 24px;
      right: 0;
      height: 100%;
      width: calc(100% - 48px);
      opacity: 0;
      transition: 0.3s ease;
      background-image: linear-gradient(rgb(158, 158, 158), black);
      border-radius: 30px;
    }
    
    .container:hover .overlay {
      opacity: 0.7;
    }
    
    .text {
      color: white;
      font-size: 20px;
      font-size-adjust: 0.58;
      position: absolute;
      top: 85%;
      left: 38%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .popup {
      position: fixed;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100vh;
      background-color: black;
      border-radius: 30;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .popup-inner {
      position: relative;
      padding: 32px;
      width: 100%;
      max-width: 640px:
      background-color: white;
    }

    .popup-inner .close-btn {
      position: absolute;
      top: 16px;
      right: 16px:
    }
    `}
      </style>
      {/* Container begins here */}
      <Container maxW="container.sm">
        <Heading as="h3" fontSize={20} mb={4}>
          Gallery
        </Heading>
        {/* Stack of vertical inputs for Tag and Name */}
        <Stack direction="column" backgroundColor="" spacing="3">
          <Input
            placeholder="Search for Name"
            textColor="white"
            borderRadius={30}
            marginBottom={-1}
            value={name}
            onChange={handleTypeName}
          />
          <Input
            placeholder="Search for Tags"
            textColor="white"
            borderRadius={30}
            marginBottom={-1}
            value={tag}
            onChange={handleTypeTag}
            opacity={iconTagSet == 0 ? "0" : "100"}
          />
          {/* Stack of horizontal radios for choosing Tag or name */}
          <Stack direction="row" marginLeft={4}>
            <Button
              aria-label="Name Button Selector"
              height={50}
              borderRadius={25}
              opacity={1}
              rightIcon={iconSet == 0 ? <CloseIcon /> : <CheckIcon />}
              colorScheme={useModeValue(iconSet)}
              onClick={toggleMode}
            >
              Search by Name? :
            </Button>
            <Button
              aria-label="Name Button Selector"
              height={50}
              borderRadius={25}
              opacity={1}
              rightIcon={iconTagSet == 0 ? <CloseIcon /> : <CheckIcon />}
              colorScheme={useModeValue(iconTagSet)}
              onClick={() => {
                toggleTagMode();
                setTag("");
              }}
            >
              Search by Tag(s)? :
            </Button>
          </Stack>
        </Stack>
        {/* End Stack for both inputs and radios */}
        <SimpleGrid
          columns="3"
          gridTemplateColumns="100px 408px 100px"
          bgColor="white"
          height={790}
          borderRadius={25}
          marginTop={1}
        >
          {/* Left Slider Button */}
          <IconButton
            aria-label="SLider-left"
            colorScheme={"blue"}
            height={75}
            borderRadius={90}
            opacity={0.75}
            icon={<ChevronLeftIcon />}
            marginTop={350}
          ></IconButton>
          <Container marginTop={4} marginLeft={59}>
            {/* Image Placeholder for Gallery */}
            <div className="container">
              <Container className="image" boxSize="250" borderRadius={30}>
                <Image
                  src="images/ChauDev.jpg"
                  objectFit="cover"
                  boxSize="250"
                  borderRadius={30}
                />
                <div className="overlay">
                  <div className="text">Example name</div>
                </div>
              </Container>
            </div>
            <br></br>
            {/* Image Placeholder #2 for Gallery */}
            <div className="container">
              <Container className="image" boxSize="250">
                <Image
                  src="images/SriDev1.jpg"
                  objectFit="cover"
                  boxSize="250"
                  borderRadius={30}
                />
                <div className="overlay">
                  <div className="text">Example name</div>
                </div>
              </Container>
            </div>
          </Container>
          {/* Right slider button */}
          <IconButton
            aria-label="SLider-right"
            colorScheme={"blue"}
            height={75}
            borderRadius={90}
            opacity={0.75}
            icon={<ChevronRightIcon />}
            marginTop={350}
          ></IconButton>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Gallery;

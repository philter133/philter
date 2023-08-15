# Philter Application

## Introduction

Welcome to **Philter**, a web application that empowers users to enhance their images with a range of captivating filters and styles. Our app comprises three primary features: **Philter**, **Style Adopter**, and **Image Restoration**. In this README, we will provide an overview of each feature along with their operational mechanics.

## Philter Feature

The **Philter** feature seamlessly transforms your images into mesmerizing paintings. Here's a technical breakdown of its operation:

1. Utilizing the React library, users select an image and trigger the "Generate" button.
2. Axios facilitates the upload of the chosen image to our backend server.
3. Our backend employs a machine learning model to create a fresh filtered image.
4. The generated image is sent back to the frontend for immediate user display.
5. Should the user wish to retain the image, they can save it by clicking the "Save" button. Axios is once again employed to transmit the image to our backend, where it is securely stored.

## Style Adopter Feature

The **Style Adopter** feature offers a personalized touch to your images by allowing you to apply styles of your preference. Here's how it operates:

1. Users select an image and customize the style level using a dedicated Slider component.
2. Upon clicking the "Generate" button, Axios uploads both the chosen image and style level to our backend.
3. Our backend uses a machine learning model to generate a uniquely styled image based on the uploaded data.
4. The newly styled image is returned to the frontend for immediate user viewing.
5. Users can save the generated image by clicking the "Save" button, which triggers Axios to transmit the image to our backend for secure storage.

## Image Restoration Feature

The **Image Restoration** feature breathes life back into black and white images by restoring colors. Here's a glimpse of its operation:

1. Users select a black and white image and initiate the "Generate" command.
2. Axios uploads the chosen image to our backend.
3. A machine learning model on our backend restores the colors of the image.
4. The restored, color-enriched image is sent to the frontend for immediate user enjoyment.
5. To save the restored image, users can click the "Save" button. Axios facilitates the transmission of the image to our backend, where it is securely stored.

## Gallery Feature

The **Gallery** feature serves as a personalized collection of your transformed images. Here's an outline of its operation:

1. React is utilized to create an intuitive user interface that presents saved images in an attractive grid layout.
2. A NavigationBar component empowers users to navigate through paginated images.
3. Upon navigation to a new page, Axios fetches the corresponding images from our backend.
4. The retrieved images are displayed in the grid layout, granting users an immersive view of their saved creations.

## Join the Philter Community

Embrace the boundless potential of Philter's innovative image transformation capabilities. Embark on a voyage where technology converges with artistic expression, allowing you to encapsulate the essence of every moment through a unique lens. Unleash your creativity and become an integral part of the Philter community today!

For comprehensive access to the source code and further information, explore our [GitHub repository](https://github.com/philter133).

> **Note:** This documentation furnishes a high-level overview of Philter's features and setup. For an in-depth dive into technical details and code examples, refer to the repository and accompanying documentation.

---

# Installation Guide

## Welcome to Philter

Welcome to Philter, where your images undergo a captivating transformation, turning ordinary snapshots into breathtaking works of art. Harness the power of AI-driven filters, adapt styles to your liking, and restore lost colors with ease. Our platform merges cutting-edge technology with elegant design to deliver an unparalleled image editing experience. Join us on this creative journey and unleash your visual imagination.

## Installation Steps

Follow these steps to set up Philter and explore its potential:

1. Install MkDocs by running the following command in your terminal:

    ```bash
    pip install mkdocs
    ```

2. Create a new project and navigate to the repository:

    ```bash
    mkdocs new my-project
    cd my-project
    ```

3. Launch the local development server:

    ```bash
    mkdocs serve
    ```

    Access the documentation by navigating to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

4. Ensure you have Node.js and npm installed on your system.

5. After downloading the repository, run the following commands to install required modules:

    ```bash
    npm install
    npm install next
    npm install react-google-login
    ```

## Running the Front-End Application

Embark on a visual journey through Philter's front-end application:

1. Launch the application with the following command:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to experience Philter's immersive interface.

## Project Structure

Discover the architecture of Philter's codebase:

.
├── README.md
├── components
│ ├── Footer.js
│ ├── SliderA.js
│ ├── fonts.js
│ ├── grid-item.js
│ ├── layouts
│ │ ├── article.js
│ │ └── main.js
│ ├── logo.js
│ ├── navbar.js
│ ├── paragraph.js
│ ├── section.js
│ └── theme-toggle-button.js
├── lib
│ └── theme.js
├── my-project
│ ├── docs
│ │ ├── adapter.md
│ │ ├── developers.md
│ │ ├── gallery.md
│ │ ├── index.md
│ │ ├── login.md
│ │ ├── philter.md
│ │ └── restorator.md
│ └── mkdocs.yml
├── package-lock.json
├── package.json
├── pages
│ ├── 404.js
│ ├── _app.js
│ ├── _document.js
│ ├── adopter.js
│ ├── developer.js
│ ├── gallery.js
│ ├── index.js
│ ├── philter.js
│ └── restoration.js
└── public
├── favicon.ico
└── images
├── AhmedDev3.jpg
├── ChauDev.jpg
├── LukeDev2.jpg
├── SriDev1.jpg
├── arrow.png
├── arrow2.png
├── arrow3.png
├── philterlogo-dark.png
├── philterlogo.png
└── sample1.png



```

Our Home nextJS Page
```Javascript
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

```

# Philter Page

### Turn your pictures into paintings!

This is our import React library

```Javascript
//Philter Page
//Uses Axios to Upload Images to the server
//Back-end server takes the image and generate a new filtered image
//Chakra UI elements are used to beautify the website

import { useState } from "react";
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react";

import Head from "next/head";
import axios from "axios";
```
We generate a new philtered image and display it to user when user clicks "Generate" button, and we save the generated image when user clicks "Save".

philter.js
```Javascript
const Philter = ({}) => {
  const idCluster = []; // React Hooks for 3 Image ID
  const [selectedFile, setSelectedFile] = useState(null); // React Hooks for image file
  const [loadState, setLoadState] = useState("idle"); // React Hooks for loader
  const [styleFile, setStyleFile] = useState(null); // React Hooks for style image ID
  const [inputTitleFilter, setInputTitleFilter] = useState(""); // React Hooks for title
  const [inputDescFilter, setInputDescFilter] = useState(""); // React Hooks for description
  const [inputTagFilter, setInputTagFilter] = useState(""); // React Hooks for Tag
  const [imagePath, setImagePath] = useState(""); // React Hooks for the image path
  const [contentId, setContentId] = useState(""); // React Hooks for content image ID
  const [genId, setGenId] = useState(""); // React Hooks for generated image ID

  var resolution = "large"; // variable for resolution option

  const onResolutionChange = (newResol) => {
    resolution = newResol; //hooks
  };

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]); //hooks
  }

  const handleStyleSelect = (styleName) => {
    setStyleFile(styleName); //hooks
  };

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log("Generate"); // testing if the API call works well
    const form = new FormData(); // Form data transfer betweem the app and the server
    form.append("file", selectedFile); // file
    form.append("title", inputTitleFilter); // title
    form.append("description", inputDescFilter); // description
    form.append("name", styleFile); // Name of the input image
    form.append("size", resolution); // Size of the input resolution
    setLoadState("loading");

    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/apply-filter", //App.py (REST API)
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const payload = await response.data;
      const contentId = payload.contentId;
      const genId = payload.genId;
      setContentId(contentId);
      setGenId(genId);
      setImagePath(payload.displayUrl);
      console.log(inputTitleFilter, inputDescFilter);

      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error"); //sets error when the data doesn't go through
    }
  }

  async function onSubmit() {
    //Total of five style model ready -> cudi, edtaonisl, mosaic, scream, starrynight.
    if (styleFile === "mosaic") {
      idCluster.push("188d17de-2acf-4585-bfb0-697cf1fcafb5"); // style ID for mosaic
    } else if (styleFile === "cudi") {
      idCluster.push("ebe40eb3-69d2-4327-937a-4590da174b83"); // style ID for cudi
    } else if (styleFile === "edtaonisl") {
      idCluster.push("38f15b9b-cb01-4346-a59d-571666497cfe"); // style ID for edtaonisl
    } else if (styleFile === "scream") {
      idCluster.push("2abe1505-86d6-4a19-a03a-ae513e1c5668"); // style ID for scream
    } else {
      idCluster.push("886173ee-71c0-4f84-beea-cd9f68dee696"); // style ID for starry night
    }
    idCluster.push(genId);
    idCluster.push(contentId);
    const form = new FormData();
    form.append("userId", "philter2021@gmail.com"); // user logins with this given data for now
    form.append("tag", inputTagFilter); // input image tag
    form.append("algorithm", "FILTER"); // algorithms
    form.append("imageList", JSON.stringify(idCluster)); // list of images

    console.log(idCluster); // checking if we are getting the right value of 3 image IDs
    console.log(JSON.stringify(idCluster)); // turns types of the imageID the way we want it

    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000//save-cluster",
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error"); //sets error when the data doesn't go through
    }
  }

  return (
    <div
      style={{
        marginTop: "50px",
        background: "#EFF1F2",
        padding: "40px",
        borderRadius: "7px",
      }}
    >
      <Head>
        <title>Philter | Philter</title>
        <meta name="keywords" content="philter" />
      </Head>
      <Container
        style={{
          fontFamily: "Righteous, cursive",
          color: "#7C8AC5",
        }}
      >
        <div>
          <h1>Upload an image and add a philter to it!</h1>
        </div>
        <div>
          <h1>Only PNG or JPEG is accepted</h1>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Select File: </label>
              <input
                type="file"
                multiple
                name="file"
                onChange={handleFileSelect}
              />
              <img
                src="https://i.ibb.co/fQxF60K/STARRY-NIGHT.jpg"
                style={{
                  borderRadius: 50 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "inline-flex",
                }}
                onClick={() => handleStyleSelect("starrynight")}
              />
              <img
                src="https://i.ibb.co/VSLPHj2/CUDI.jpg"
                style={{
                  borderRadius: 50 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "inline-flex",
                }}
                onClick={() => handleStyleSelect("cudi")}
              />
              <img
                src="https://i.ibb.co/sPN1YZ6/MOSAIC.jpg"
                style={{
                  borderRadius: 50 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "inline-flex",
                }}
                onClick={() => handleStyleSelect("mosaic")}
              />
              <img
                src="https://i.ibb.co/371Ng24/EDTAONISL.png"
                style={{
                  borderRadius: 80 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "inline-flex",
                }}
                onClick={() => handleStyleSelect("edtaonisl")}
              />
              <img
                src="https://i.ibb.co/3MLrBYF/SCREAM.jpg"
                style={{
                  borderRadius: 50 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "flex",
                  alignSelf: "center",
                }}
                onClick={() => handleStyleSelect("scream")}
              />

              <div
                style={{
                  fontSize: "25px",
                  fontFamily: "Righteous, cursive",
                  color: "#7C8AC5",
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "30px",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <h3>Resolution:</h3>
                <div>
                  <Button
                    marginRight={"10px"}
                    onClick={() => onResolutionChange("small")}
                  >
                    Low
                  </Button>
                  <Button
                    marginRight={"10px"}
                    onClick={() => onResolutionChange("medium")}
                  >
                    Medium
                  </Button>
                  <Button onClick={() => onResolutionChange("mega")}>
                    High
                  </Button>
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "20px",
                    fontFamily: "Righteous, cursive",
                    color: "#7C8AC5",
                    display: "inline-flex",
                    justifyContent: "space-around",
                    marginTop: "10px",
                    marginBottom: "10px",
                    alignItems: "center",
                  }}
                >
                  <h3>Image title:</h3>
                  <input
                    style={{
                      WebkitBorderTopLeftRadius: "5px",
                      WebkitBorderTopRightRadius: "5px",
                      backgroundColor: "#D2D2D2",
                      marginLeft: "88px",
                    }}
                    onChange={(event) =>
                      setInputTitleFilter(event.target.value)
                    }
                  />
                </div>

                <div
                  style={{
                    fontSize: "20px",
                    fontFamily: "Righteous, cursive",
                    color: "#7C8AC5",
                    display: "inline-flex",
                    justifyContent: "space-around",
                    marginTop: "10px",
                    marginBottom: "10px",
                    alignItems: "center",
                  }}
                >
                  <h3>Image Description:</h3>
                  <input
                    style={{
                      marginLeft: "20px",
                      WebkitBorderTopLeftRadius: "5px",
                      WebkitBorderTopRightRadius: "5px",
                      backgroundColor: "#D2D2D2",
                    }}
                    onChange={(event) => setInputDescFilter(event.target.value)}
                  />
                </div>
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontFamily: "Righteous, cursive",
                  color: "#7C8AC5",
                  display: "inline-flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <h3>Image Tag:</h3>
                <input
                  style={{
                    marginLeft: "90px",
                    WebkitBorderTopLeftRadius: "5px",
                    WebkitBorderTopRightRadius: "5px",
                    backgroundColor: "#D2D2D2",
                  }}
                  onChange={(event) => setInputTagFilter(event.target.value)}
                />
              </div>

              <div
                style={{
                  fontSize: "40px",
                  fontFamily: "Righteous, cursive",
                  color: "#7C8AC5",
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <Button type="submit" fontSize={"30px"}>
                  Generate
                </Button>

                <Button onClick={() => onSubmit()} fontSize={"30px"}>
                  Save
                </Button>
              </div>
            </div>
          </form>
          {loadState === "loading" && (
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Righteous, cursive",
                color: "#7C8AC5",
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "30px",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              LOADING
            </h3>
          )}
          {imagePath && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "25px",
              }}
            >
              <img src={imagePath} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Philter;

```

# Style Adapter Page

### Add a style to your image the way you like!

This is our import React library

```Javascript
// Style Adopter Page
// Uses customized Slider to control the level of style
// Uses Axios to Upload Images to the server
// Back-end server takes the image and generate a new customized style image.

import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Slider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react"; // import Chakra UI components

import Layout from "../components/layouts/article";

import Head from "next/head";
import React, { useState } from "react"; // import React and React Hook
import SliderA from "../components/SliderA";
import axios from "axios";
```
We adopt a style of the user's input style image into the second image user input. User can choose the level of styling using slider.

adopter.js
```Javascript

export default function Adopter({}) {
  <Layout title="Developer" />;

  const idCluster = []; // Image Id clusters for (Style Image ID, original image ID, Generated image ID)
  const [loadState, setLoadState] = useState("idle"); // React Hooks
  const [inputTitleAdapter, setInputTitleAdapter] = useState(" "); // React Hooks for title
  const [inputTagAdapter, setInputTagAdapter] = useState(" "); // React Hooks for tag
  const [inputDescAdapter, setInputDescAdapter] = useState(" "); // React Hooks for description
  const [inputEpoch, setInputEpoch] = useState(1); // React Hooks - set the initial value to true
  const [selectedStyle, setSelectedStyle] = useState(null); // React Hooks for style image
  const [selectedContent, setSelectedConent] = useState(null); // React Hooks for original image
  const [contentId, setContentId] = useState(""); // React Hooks for content image
  const [genId, setGenId] = useState(""); // React Hooks for gen image ID
  const [styleId, setStyleId] = useState(""); // React Hooks for style image ID
  const [imageUrl, setImageUrl] = useState(""); // React Hooks

  var value = 50;
  var resolution = "Med";

  function handleStyleSelect(event) {
    setSelectedStyle(event.target.files[0]); // React Hooks
  }

  function handleContentSelect(event) {
    setSelectedConent(event.target.files[0]); // React Hooks
  }

  async function onSaveImage() {
    // when user click "Save"
    idCluster.push(genId); // store Generated image ID
    idCluster.push(contentId); // store content image ID
    idCluster.push(styleId); // store style image ID

    const form = new FormData(); // form data transfer between application and the server
    form.append("userId", "philter2021@gmail.com");
    form.append("tag", inputTagAdapter);
    form.append("algorithm", "STYLE");
    form.append("imageList", JSON.stringify(idCluster));

    console.log(idCluster); // test if we are getting the right the value for 3 image ID
    console.log(JSON.stringify(idCluster));

    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000//save-cluster", // App.py (REST API)
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error"); //sets error when the data doesn't go through
    }
  }

  async function onFormSubmit(event) {
    //When user clicks "Generate"
    var size;
    var layer;

    if (value < 20) {
      // for style level
      layer = "a";
    } else if (value < 40) {
      layer = "b";
    } else if (value < 60) {
      layer = "c";
    } else if (value < 80) {
      layer = "d";
    } else {
      layer = "e";
    }

    if (resolution === "Med") {
      // for resolution option
      size = "500";
    } else if (resolution === "High") {
      size = "750";
    } else if (resolution === "Low") {
      size = "250";
    }

    //event.preventDefault();
    const form = new FormData();
    form.append("contentImage", selectedContent);
    form.append("styleImage", selectedStyle);
    form.append("imageSize", size);
    form.append("layerSet", layer); //letters
    form.append("styleWeight", "1e5");
    form.append("contentWeight", "1e-2");
    form.append("epochs", inputEpoch);
    form.append("title", inputTitleAdapter);
    form.append("description", inputDescAdapter);

    setLoadState("loading");
    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/style-image",
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const payload = await response.data;
      setContentId(payload.contentId);
      setGenId(payload.genId);
      setStyleId(payload.styleId);
      setImageUrl(payload.displayUrl);

      console.log(genId, styleId, contentId, imageUrl);

      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error");
    }
  }

  const onSliderChange = (newVal) => {
    value = newVal;
  };

  const onResolutionChange = (newResol) => {
    resolution = newResol;
  };

  const generateImage = () => {
    console.log("attempting to generate image");
    onFormSubmit();
  };

  const saveImage = () => {
    console.log("attempting to save image");
    onSaveImage();
  };

  return (
    <div
      style={{
        marginTop: "50px",
        background: "#EFF1F2",
        padding: "40px",
        borderRadius: "7px",
      }}
    >
      <header
        style={{
          marginBottom: "20px",
          fontSize: "45px",
          textAlign: "center",
          color: "#7C8AC5",
          fontFamily: "Righteous, cursive",
        }}
      >
        Style Adapter
      </header>

      <div
        style={{
          textAlign: "center",
          padding: "40px",
          display: "flex",
          justifyContent: "space-evenly",
          fontFamily: "Righteous, cursive",
          color: "#7C8AC5",
        }}
      >
        <div style={{ display: "inline-flex" }}>
          <div>
            <div>
              <h1> Upload style image: </h1>
            </div>

            <div>
              <div>
                <input
                  type="file"
                  multiple
                  name="file"
                  onChange={handleStyleSelect}
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1> Upload content image: </h1>
            </div>

            <div>
              <input
                type="file"
                multiple
                name="file"
                onChange={handleContentSelect}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          alignItems: "Center",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <SliderA onSliderChange={onSliderChange} />
      </div>

      <div
        style={{
          alignItems: "Center",
          display: "flex",
          justifyContent: "space-around",
          fontSize: "20px",
          fontFamily: "Righteous, cursive",
          color: "#7C8AC5",
        }}
      >
        <h3>Lightly Stylized</h3>
        <h3>Heavily Stylized</h3>
      </div>

      <div
        style={{
          fontSize: "25px",
          fontFamily: "Righteous, cursive",
          color: "#7C8AC5",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
          marginBottom: "10px",
          alignItems: "center",
        }}
      >
        <h3>Resolution:</h3>
        <div>
          <Button onClick={() => onResolutionChange("Low")}>Low</Button>

          <Button
            marginRight={"10px"}
            onClick={() => onResolutionChange("Med")}
          >
            Medium
          </Button>

          <Button
            marginRight={"10px"}
            onClick={() => onResolutionChange("High")}
          >
            High
          </Button>
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: "20px",
            fontFamily: "Righteous, cursive",
            color: "#7C8AC5",
            display: "inline-flex",
            justifyContent: "space-around",
            marginTop: "10px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <h3>Epoch (iterations):</h3>
          <input
            style={{
              marginLeft: "20px",
              WebkitBorderTopLeftRadius: "5px",
              WebkitBorderTopRightRadius: "5px",
              backgroundColor: "#D2D2D2",
            }}
            placeholder={" "}
            onChange={(event) => setInputEpoch(event.target.value)}
          />
        </div>

        <div
          style={{
            fontSize: "20px",
            fontFamily: "Righteous, cursive",
            color: "#7C8AC5",
            display: "inline-flex",
            justifyContent: "space-around",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>Image title:</h3>
          <input
            style={{
              WebkitBorderTopLeftRadius: "5px",
              WebkitBorderTopRightRadius: "5px",
              backgroundColor: "#D2D2D2",
              marginLeft: "88px",
            }}
            placeholder={" "}
            onChange={(event) => setInputTitleAdapter(event.target.value)}
          />
        </div>

        <div
          style={{
            fontSize: "20px",
            fontFamily: "Righteous, cursive",
            color: "#7C8AC5",
            display: "inline-flex",
            justifyContent: "space-around",
            marginTop: "10px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <h3>Image description:</h3>
          <input
            style={{
              marginLeft: "20px",
              WebkitBorderTopLeftRadius: "5px",
              WebkitBorderTopRightRadius: "5px",
              backgroundColor: "#D2D2D2",
            }}
            onChange={(event) => setInputDescAdapter(event.target.value)}
          />
        </div>

        <div
          style={{
            fontSize: "20px",
            fontFamily: "Righteous, cursive",
            color: "#7C8AC5",
            display: "inline-flex",
            justifyContent: "space-around",
            marginTop: "10px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <h3>Image tag:</h3>
          <input
            style={{
              marginLeft: "90px",
              WebkitBorderTopLeftRadius: "5px",
              WebkitBorderTopRightRadius: "5px",
              backgroundColor: "#D2D2D2",
            }}
            defaultValue={""}
            onChange={(event) => setInputTagAdapter(event.target.value)}
          />
        </div>
      </div>

      <div
        style={{
          fontSize: "40px",
          fontFamily: "Righteous, cursive",
          color: "#7C8AC5",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
          marginBottom: "10px",
          alignItems: "center",
        }}
      >
        <Button fontSize={"30px"} onClick={() => generateImage()}>
          Generate
        </Button>
        <Button type="save" fontSize={"30px"} onClick={() => saveImage()}>
          Save
        </Button>
      </div>

      {loadState === "loading" && (
        <h3
          style={{
            fontSize: "25px",
            fontFamily: "Righteous, cursive",
            color: "#7C8AC5",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "30px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          LOADING
        </h3>
      )}
      {imageUrl && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "25px",
          }}
        >
          <img src={imageUrl} />
        </div>
      )}
    </div>
  );
}

```

# Image Restoration Page

### Bring a color back to black and white image!

This is our import React library

```Javascript
//Image Restorator Page
//Uses Axios to Upload Images to the server
//Back-end server takes the image and restores the color
//Chakra UI elements are used to beautify the website

import { useState } from "react"; //React Hook
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react"; //Chakra Components

import Head from "next/head";
import axios from "axios";
```
When user clicks "Generate", our AI restores the color of the image and display it on the screen, also, user can save the restored image when clicking "save". 

restoration.js
```Javascript

const Restoration = ({}) => {
  const [inputTitle, setInputTitle] = useState(""); // State hook for input title
  const [inputDesc, setInputDesc] = useState(""); // State hook for input description
  const [inputTag, setInputTag] = useState(""); // State hook for input Tag
  const [selectedFile, setSelectedFile] = useState(null); // State hook for input file
  const [loadState, setLoadState] = useState("idle"); // State hook for loader
  const [imageUrl, setImageUrl] = useState(null); // State hook for images
  const [genId, setGenId] = useState(""); // state hook Generated ImageID
  const [contentId, setContentId] = useState(""); // state hook for Content ImageID

  const idCluster = []; //Array for Generated Image ID, Style ID, and original Image ID

  async function handleSave() {
    // This method literally handles saving of image data
    idCluster.push(genId); // store Generated Image Data
    idCluster.push(contentId); // sotre Content Image Data
    console.log(idCluster); // Test to see if we are getting right value for 3 image IDs
    console.log("string:" + JSON.stringify(idCluster));
    const form = new FormData(); // form data transfer between the app and the server
    form.append("userId", "philter2021@gmail.com"); // user ID
    form.append("tag", inputTag); // Tag
    form.append("algorithm", "BW"); // Algorithms
    form.append("imageList", JSON.stringify(idCluster)); // List of images

    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000//save-cluster", //method is from App.py
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error"); //sets error when the data doesn't go through
    }
  }
  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function onFormSubmit(event) {
    // When User clicks Generate Button
    event.preventDefault();
    const form = new FormData();
    form.append("file", selectedFile); // File (PNG,JPEG,HEIC....)
    form.append("title", inputTitle); // Title
    form.append("description", inputDesc); // Description(less than 100 words preferred)

    setLoadState("loading");
    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/bw-color", // App.py(REST API)
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const payload = await response.data;
      setContentId(payload.contentId);
      setGenId(payload.genId);
      setImageUrl(payload.displayUrl);

      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error");
    }
  }

  return (
    <div
      style={{
        marginTop: "50px",
        background: "#EFF1F2",
        padding: "40px",
        borderRadius: "7px",
      }}
    >
      <Head>
        <title>Philter | Image Restorator</title>
        <meta name="keywords" content="restoration" />
      </Head>
      <Container>
        <div
          style={{
            fontFamily: "Righteous, cursive",
            color: "#7C8AC5",
          }}
        >
          <div>
            <h1>Upload an image to give it color!</h1>
          </div>
          <div>
            <h1>Only PNG or JPEG is accepted</h1>
          </div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Select File: </label>
              <input
                type="file"
                multiple
                name="file"
                onChange={handleFileSelect}
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "20px",
                  fontFamily: "Righteous, cursive",
                  color: "#7C8AC5",
                  display: "inline-flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <h3>Image title:</h3>
                <input
                  style={{
                    WebkitBorderTopLeftRadius: "5px",
                    WebkitBorderTopRightRadius: "5px",
                    backgroundColor: "#D2D2D2",
                    marginLeft: "88px",
                  }}
                  onChange={(event) => setInputTitle(event.target.value)}
                />
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontFamily: "Righteous, cursive",
                  color: "#7C8AC5",
                  display: "inline-flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <h3>Image Description:</h3>
                <input
                  style={{
                    marginLeft: "20px",
                    WebkitBorderTopLeftRadius: "5px",
                    WebkitBorderTopRightRadius: "5px",
                    backgroundColor: "#D2D2D2",
                  }}
                  onChange={(event) => setInputDesc(event.target.value)}
                />
              </div>
            </div>

            <div
              style={{
                fontSize: "20px",
                fontFamily: "Righteous, cursive",
                color: "#7C8AC5",
                display: "inline-flex",
                justifyContent: "space-around",
                marginTop: "10px",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <h3>Image Tag:</h3>
              <input
                style={{
                  marginLeft: "90px",
                  WebkitBorderTopLeftRadius: "5px",
                  WebkitBorderTopRightRadius: "5px",
                  backgroundColor: "#D2D2D2",
                }}
                onChange={(event) => setInputTag(event.target.value)}
              />
            </div>
            <div
              style={{
                fontSize: "40px",
                fontFamily: "Righteous, cursive",
                color: "#7C8AC5",
                display: "flex",
                justifyContent: "space-around",
                marginTop: "10px",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <Button type="submit" fontSize={"30px"}>
                Generate
              </Button>

              <Button
                type="save"
                fontSize={"30px"}
                onClick={() => handleSave()}
              >
                Save
              </Button>
            </div>
          </form>
          {loadState === "loading" && (
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Righteous, cursive",
                color: "#7C8AC5",
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "30px",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              LOADING
            </h3>
          )}
          {imageUrl && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "25px",
              }}
            >
              <img src={imageUrl} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Restoration;

```

# Gallery Page

### Gallery will save all your new images!

This is our import React library

```Javascript
/**
 * The gallery page of the Philter application. 
 * The general layout of the page is created and rendered here with the use of Chakra-UI, NextJS, and React.
 * Uses the GalleryImage component to have the images be interactable
 * Utlizes axios for the API calls
 * 
 */
import { Container, 
  Heading, 
  SimpleGrid,
  Button, 
  IconButton,
  Input,
  Stack,
  Box, 
  RadioGroup,
  Radio } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Head from 'next/head'
import { CheckIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import GalleryImage from '../components/GalleryImage'
import axios from 'axios'
```
When user clicks "save" in other pages, all the saved images will be stored and available to view for the user in the gallery page. User can navigate through saved images using image slider.

restoration.js
```Javascript

//The Gallery 
const Gallery = () => {

  /**
   * The React State Hook to preserve database data after an
   * API call.
   * 
   * @param responseData The data from database by API call
   * @function setResponseData Sets the data for responseData
   */
  const [responseData, setResponseData] = useState(null)

  /**
   * The React State Hook that is used for searching through images by image type(i.e. filter or style adaptation)
   * 
   * @param name (String) The specific image type to filter for
   * @function setName Set the string used for the filter
   */
  const [name, setName] = useState('none');

  /**
   * The React State Hook to search for images by their specific "tag".
   * 
   * @param tag (String) The specific tag for image(s)
   * @function setTag Sets the string for tag
   */
  const [tag, setTag] = useState('none');

  /**
   * The React State Hook to help reset the application state
   * 
   * @param filterSearchEnable (Binary Number) The state with 1 being on and 0 being off
   * @function setFilterSearch Sets the state of filter search
   */
  const [filterSearchEnable, setFilterSearch] = useState("1");

  /**
   * The React State Hook to turn off or on the "tag" search bar and function.
   * 
   * @param tagSearchEnable (Binary Number) The state with 1 being on and 0 being off
   * @function setTagIcon Sets the state of tagSearchEnable
   */
  const [tagSearchEnable, setTagIcon] = useState("0");

  /**
   * The React State Hook to keep track of the image page within the database.
   * Also used to traverse database for API calls.
   * 
   * @param slideNum (Number) The page number in the database and used for instant traversal
   * @function setSlideIndex Sets the page number
   */
  const [slideNum, setSlideIndex] = useState(0);

  /**
   * React State Hook to keep track of filter to search for before searching
   * 
   * @param tempName (String) The filter
   * @function setTempName Sets the temporary filter state
   */
  const [tempName, setTempName] = useState('');

  /**
   * React State Hook to keep track of tag to search for before searching
   * 
   * @param tempTag (String) The tag
   * @function setTempTag Sets the temporary tag state
   */
  const [tempTag, setTempTag] = useState('');

  /**
   * React State Hook to allow the website to send API call first before full webpage render
   * 
   * @param isLoading (Boolean) The loading state of the webpage
   * @function setLoading Sets the loading state
   */
  const [isLoading, setLoading] = useState(false)

/**
 * The API call to begin receiving data from the database
 * @param {Number} pgNum The page to traverse to in the database, starts from 0.
 * @param {String} algo The image type to filter for(must be "BW", "FILTER", "STYLE", or "NONE")
 * @param {String} tag The tag from the image to filter for
 * @returns A Promise object that must be processed to fully receive data
 */
async function dbData (pgNum, algo, tag) {
  //Tracking 
  console.log("trying to get data");

  //The form to send data with the specific form data.
  const form = new FormData();
  form.append("userId", "philter2021@gmail.com");
  form.append("limit", 3);
  form.append("ascending", "TRUE");
  form.append("pageNumber", pgNum);
  form.append("algorithm", algo);
  form.append("tag", tag);
  return axios({
      url: "http://127.0.0.1:5000/get-image-cluster",
      data: form,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      mode: "cors",
    });
}

//The React Effect Hook that calls the API on webpage render or on state change for variales(slideNum, tag, and name)
useEffect(() => {dbData(slideNum, name, tag).then((response) => {setResponseData(response.data) }).finally(setLoading(true))},[slideNum, name, tag])

//Used to log and track the necessary information for bugs
console.log("track")
console.log(responseData)
console.log("Page Number " + slideNum)
console.log("Algorithm " + name)
console.log("Tag(s): " + tag)


/**
 * Sets the tempTag state hook. Used in Tag search field.
 * @param {String} tag The string to set the state to
 */
const handleTypeTag = (tag) => {
  setTempTag(tag.target.value)
}

/**
 * Sets the tempName state hook
 * @param {String} nam The string to set the state to
 */
const handleTypeName = (nam) => {
  setTempName(nam.target.value)
}

/**
 * Sets the filterSearchEnable to 1 or 0 based on current value and sets 
 * filter value to none to clear the field.
 */
const toggleMode = () => {
  {(filterSearchEnable == 0) ? setFilterSearch("1") : setFilterSearch("0")}
  setTag('none')
}

/**
 * Sets the tagSearchEnable to 1 or 0 based on current value.
 * Used in Tag filter button.
 */
const toggleTagMode = () => {
  {(tagSearchEnable == 0) ? setTagIcon("1") : setTagIcon("0")}
}

/**
 * Used to go to the previous page of the database or if the value
 * is at zero, it stays at zero.
 * Used in left-slider button
 */
const prevSlide = () => {
  (setSlideIndex((slideNum == 0) ? 0 : slideNum - 1));
}

/**
 * Used to go to the next page of the database or if the value
 * will reach the max page, null, keeps the page number the same.
 * Used in right-slider button
 */
const nextSlide = () => {
  setSlideIndex((responseData['nextPage'] == null) ? slideNum : slideNum + 1)
}

/**
 * Used for the "search" button. 
 */
const formSubmit = () => {
  {
    //If the tempName is nothing, set to 'NONE' or keep current value
    setName((tempName == "") ? 'NONE' : tempName);
    //If the filterSearchEnable is 0, also set to 'NONE'
    if (filterSearchEnable == "0"){
      setName("NONE")
    }
    //If the tempTag is nothing, set to "NONE" or keep current value
    setTag((tempTag == "") ? 'NONE' : tempTag);
    //If the Seach for Tag button is 0(disable), 
    if (tagSearchEnable == "0"){
      setTag("NONE")
    }
    //Resets the gallery to first page
    setSlideIndex(0);
  }
}

//
const useModeValue = (variable) => {
  return ((variable == 0) ? 'red' : 'green' )
}

return (
<Layout title="gallery">
   <Head>
      <title>Philter | Gallery</title>
      <meta name ="keywords" content ="gallery"/>
    </Head>
    {/* Container begins here */}
    <Container maxW = "container.sm"> 
      <Heading as="h3" fontSize={20} mb={4}>
        Gallery
      </Heading>
      {/* Stack of vertical inputs for Tag and Name */}
      <Stack direction='column' backgroundColor="" spacing="3" textColor="white">
      <RadioGroup defaultValue='None' onChange={(r) => {setTempName(r); console.log(r)}}>
        <Radio value ='None' paddingLeft={4}>None</Radio>
        <Radio value ='BW' paddingLeft={4} >Black and White</Radio>
        <Radio value = 'Filter' paddingLeft={4}>Filter</Radio>
        <Radio value = 'Style' paddingLeft={4}>Style</Radio>
      </RadioGroup>
      {(tagSearchEnable=="0") ? "" : <Input placeholder='Search for Tags' textColor='white' borderRadius = {30} marginBottom={-1} value={tempTag} onChange={handleTypeTag} opacity={(tagSearchEnable == 0) ? "0" : "100"}/>}
      {/*Search button to call function for database */}
      <Button aria-label="Search" borderRadius={15} onClick={formSubmit}>
        Search
      </Button>
      {/* Stack of horizontal radios for choosing Tag or name */}
      <Stack direction='row' marginLeft={4}>
      {/*Filter button with words "Search by Tag(s)?: " followed by an icon */}
     <Button
      aria-label="Tag Button Selector"
      height = {50}
      borderRadius = {25}
      opacity={1}
      rightIcon={(tagSearchEnable == 0) ? <CloseIcon/> : <CheckIcon/>}
      colorScheme={useModeValue(tagSearchEnable)}
      onClick={() => {toggleTagMode(); setTag("");}}
      >
        Search by Tag(s)? : 
     </Button>
      </Stack>
      </Stack >{/* End Stack for both inputs and radios */}
      {/*SimpleGrid that divides the gallery into three spaces: left-slider button, gallery images, right-slider button. */}
      <SimpleGrid columns="3" gridTemplateColumns="100px 408px 100px" bgColor="white" height={860} borderRadius = {25} marginTop={1}>
        {/* Left Slider Button */}
    <IconButton
       aria-label="SLider-left"
      colorScheme={'blue'}
      height = {75}
      borderRadius = {90}
      opacity={0.75}
      icon={<ChevronLeftIcon/>} 
      fontSize="30"
      marginTop={370}
      onClick={prevSlide}
      >
     </IconButton>
     {/* Component For Loop for Gallery Slider*/}
    <Container marginTop={4} marginLeft={59} textColor='black'>
      {console.log("somwhere" + responseData)}
    {isLoading && responseData && responseData.genList && (responseData.genList.length >= 1) && 
    <GalleryImage 
    src={responseData.genList[0].url} 
    name={responseData.genList[0].title} 
    description={responseData.genList[0].description} 
    tags={responseData['tagList'][0]} 
    algo={responseData['algoList'][0]} 
    baseSrc={responseData['baseList'][0]}
    id ={responseData['id'][0]}/>}
    {isLoading && responseData && responseData.genList  && (responseData.genList.length == 0) && 'You Have Reached The Last Page'}
    <br/>
    {isLoading && responseData && responseData.genList  && (responseData.genList.length >= 2) && 
    <GalleryImage src={responseData.genList[1].url} 
    name={responseData.genList[1].title} 
    description={responseData.genList[1].description} 
    tags={responseData['tagList'][1]} 
    algo={responseData['algoList'][1]} 
    baseSrc={responseData['baseList'][1]}
    id ={responseData['id'][1]}/>}
    <br/>
    {isLoading && responseData && responseData.genList  && (responseData.genList.length >= 3) && 
    <GalleryImage src={responseData.genList[2].url} 
    name={responseData.genList[2].title} 
    description={responseData.genList[2].description} 
    tags={responseData['tagList'][2]} 
    algo={responseData['algoList'][2]} 
    baseSrc={responseData['baseList'][2]}
    id ={responseData['id'][2]}/>}
    <br/> 
    <Container marginLeft={78} fontWeight={700} textShadow>
    </Container>
    </Container>
    {/* Right slider button */}
    <IconButton
      aria-label="SLider-right"
      colorScheme={'blue'}
      height = {75}
      borderRadius = {90}
      opacity={0.75}
      icon={<ChevronRightIcon/>}
      fontSize="30"
      marginTop={370}
      onClick={nextSlide}
      >
      </IconButton>
  </SimpleGrid>
        </Container>
    </Layout>
  )
}

export default Gallery
```

# Developer Page

### Meet our handsome developers!

This is our import React library

```Javascript
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Image,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
```
Contains the description of the developers for the project.

developer.js
```Javascript
const Developer = () => (
  <Layout title="Developer">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Developers
      </Heading>
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="black"
        gridTemplateColumns="250px 455px"
        borderRadius={30}
      >
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
        <Container
          fontFamily={"Righteous, cursive"}
          backgroundColor=""
          textColor="black"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"Righteous, cursive"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
          >
            Sriram Govindan
          </Heading>
          <h1>
            Software Engineering Student at San Jose State University, graduates
            2023.
          </h1>
          <h1>
            Machine Learning Engineer enthusiastic about Statistical Machine
            Learning and Computer Vision.
          </h1>
          Worked on the backend and ML.
        </Container>
      </SimpleGrid>
      <Container h="50px" />
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="black"
        gridTemplateColumns="455px 250px"
        borderRadius={30}
      >
        <Container
          fontFamily={"Righteous, cursive"}
          backgroundColor=""
          textColor="black"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"Righteous, cursive"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
          >
            Hyeonmin Song
          </Heading>
          <h1>
            Software Engineering Student at San Jose State University, graduates
            2023.
          </h1>
          <h1>
            Have a passion for web development and building applications from
            the ground up! Specialize mainly in web architecture and full-stack
            development.
          </h1>
          Worked on front-end and API call.
        </Container>
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/images/LukeDev2.jpg"
          alt="Luke"
          backgroundSize="200px"
          backgroundColor=""
          paddingRight={4}
          borderRadius={45}
          marginLeft={-4}
          marginTop={2}
        />
      </SimpleGrid>

      <Divider orientation="horizontal" color="black" h="50px" />

      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="black"
        gridTemplateColumns="250px 455px"
        borderRadius={30}
      >
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/images/ChauDev.jpg"
          alt="Chau"
          backgroundSize="500px"
          backgroundColor="white"
          paddingLeft={5}
          borderRadius={45}
          marginTop={2}
          marginLeft={1}
        />
        <Container
          fontFamily={"Righteous, cursive"}
          backgroundColor=""
          textColor="black"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"Righteous, cursive"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
          >
            Patrick Chau
          </Heading>
          <h1>
            Software Engineering Student at San Jose State University, graduates
            2023.
          </h1>
          <h1>
            New to web-development but is willing and interested to learn and
            try out new things.
          </h1>
          <h1>Worked on front-end and API calls.</h1>
        </Container>
      </SimpleGrid>
      <Container h="50px" />
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="black"
        gridTemplateColumns="455px 250px"
        borderRadius={30}
      >
        <Container
          fontFamily={"Righteous, cursive"}
          backgroundColor=""
          textColor="black"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"Righteous, cursive"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
          >
            Ahmed Moaz
          </Heading>
          <h1>
            San Jose State University senior Software Engineering student,
            expected graduation Fall 2022
          </h1>
          <h1>
            Interesed in web-development with concentration on system design and
            interface development
          </h1>
          Worked on front-end, styling and API calls
        </Container>
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/images/AhmedDev3.jpg"
          alt="Ahmed"
          backgroundSize="200px"
          backgroundColor=""
          paddingRight={4}
          borderRadius={45}
          marginLeft={-4}
          marginTop={2}
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Developer;


```



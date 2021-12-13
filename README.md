# Welcome to Philter

For full source code visit [github.com](https://github.com/philter133).
## Installation
In order to view the mkdocs, you need to type these commands in the terminal
```bash
pip install mkdocs
```
Create a new project and direct to the repository
```bash
mkdocs new my-project
cd my-project
```
Run this command
```bash
mkdocs serve
```
You will get a link prompted, then direct to that link
the link will look like this http://127.0.0.1:8000/

Now you are ready to see our projects in mkdocs.

##Other requirements
After downloading our repo, run below command to install all required modules.

```bash
npm install 
```

How to Run our front-end application
```bash
npm run dev
```

## Project layout
```nextJS
.
├── README.md
├── components
│   ├── Footer.js
│   ├── SliderA.js
│   ├── fonts.js
│   ├── grid-item.js
│   ├── layouts
│   │   ├── article.js
│   │   └── main.js
│   ├── logo.js
│   ├── navbar.js
│   ├── paragraph.js
│   ├── section.js
│   └── theme-toggle-button.js
├── lib
│   └── theme.js
├── my-project
│   ├── docs
│   │   ├── adapter.md
│   │   ├── developers.md
│   │   ├── gallery.md
│   │   ├── index.md
│   │   ├── login.md
│   │   ├── philter.md
│   │   └── restorator.md
│   └── mkdocs.yml
├── package-lock.json
├── package.json
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── adopter.js
│   ├── developer.js
│   ├── gallery.js
│   ├── index.js
│   ├── philter.js
│   └── restoration.js
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
```nextJS
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
          <div
          style={{
            marginTop: "20px",
          }}>

          </div>
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

```
# Philter Page

### Turn your pictures into paintings!

This is our import React library

```Javascript
import { useState } from "react";
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import axios from "axios";
```

We generate a new philtered image and display it to user when user clicks "Generate" button, and we save the generated image when user clicks "Save".

philter.js
```Javascript
//Fetching data here
//1.the user’s network connection: avoid re-fetching data that is already available
//2 what to do while waiting for the server response
//3.how to handle when data is not available (server error, or no data)
//4.how to recover if integration breaks (endpoint unavailable, resource changed, etc)



const Philter = ({}) => {
  const idCluster = [];
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadState, setLoadState] = useState("idle");
  const [imageUrl, setImageUrl] = useState(null);
  const [styleFile, setStyleFile] = useState(null);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [contentId, setContentId] = useState("");
  const [genId, setGenId] = useState("");
  const [highButtonState, setHighState] = useState("btn-inactive");
  const [medButtonState, setMedState] = useState("btn-active");
  const [lowButtonState, setLowState] = useState("btn-inactive");

  var resolution = "large";
  var styleTag;
  const onResolutionChange = (newResol) => {
    resolution = newResol;
  };

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  const handleStyleSelect = (styleName) => {
    // styleName(styleName);
    // styleTag = styleName;
    setStyleFile(styleName);
  };

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    const form = new FormData();
    form.append("file", selectedFile);
    form.append("title", inputTitle);
    form.append("description", inputDesc);
    form.append("name", styleFile);
    //cudi, edtaonisl, mosaic, scream, starrynight.
    form.append("size", resolution);
    setLoadState("loading");

    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/apply-filter",
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // const imagePath = await response.data.displayUrl;
      // const imageId = await response.data.genId;
      // const contentId = await response.data.contentId;
      const payload = await response.data;
      const contentId = payload.contentId;
      const genId = payload.genId;
      setContentId(contentId);
      setGenId(genId);
      setImagePath(payload.displayUrl);

      // TODO: Get image url from the response aned set state
      // setImageUrl(response.data.url);
      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error"); //sets error when the data doesn't go through
    }
  }

  async function onSubmit() {
    if (styleFile === "mosaic") {
      //cudi, edtaonisl, mosaic, scream, starrynight.
      idCluster.push("188d17de-2acf-4585-bfb0-697cf1fcafb5");
    } else if (styleFile === "cudi") {
      idCluster.push("ebe40eb3-69d2-4327-937a-4590da174b83");
    } else if (styleFile === "edtaonisl") {
      idCluster.push("38f15b9b-cb01-4346-a59d-571666497cfe");
    } else if (styleFile === "scream") {
      idCluster.push("2abe1505-86d6-4a19-a03a-ae513e1c5668");
    } else {
      idCluster.push("886173ee-71c0-4f84-beea-cd9f68dee696");
    }
    idCluster.push(genId);
    idCluster.push(contentId);
    const form = new FormData();
    form.append("userId", "philter2021@gmail.com");
    form.append("tag", inputTag);
    form.append("algorithm", "FILTER");
    form.append("imageList", JSON.stringify(idCluster));

    console.log(idCluster);
    console.log(JSON.stringify(idCluster));

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
      <Container>
        <div>
          <h1>Upload your image to get philtered image</h1>
        </div>
        <div>
          <h1>Only PNG or JPEG is accepted</h1>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Select File</label>
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
                  display: "inline-flex",
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
                    btnState={highButtonState}
                    onClick={() => onResolutionChange("small")}
                  >
                    Small
                  </Button>
                  <Button
                    marginRight={"10px"}
                    btnState={medButtonState}
                    onClick={() => onResolutionChange("medium")}
                  >
                    Medium
                  </Button>
                  <Button
                    btnState={lowButtonState}
                    onClick={() => onResolutionChange("mega")}
                  >
                    Large
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
                      marginLeft: "20px",
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
                    marginLeft: "20px",
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
                  alignItems: "center",
                }}
              >
                <Button type="submit" fontSize={"30px"} btnState="btn-inactive">
                  Generate
                </Button>

                <Button
                  onClick={() => onSubmit()}
                  fontSize={"30px"}
                  btnState="btn-inactive"
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
          {loadState === "loading" && <h3>LOADING</h3>}
          {imagePath && <img src={imagePath} />}
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
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Slider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import React, { useState } from "react";
import SliderA from "../components/SliderA";
```
We adopt a style of the user's input style image into the second image user input. User can choose the level of styling using slider.
 
adopter.js
```Javascript
export default function Adopter({}) {
  <Layout title="Developer" />;
  const [highButtonState, setHighState] = useState("btn-inactive");
  const [medButtonState, setMedState] = useState("btn-active");
  const [lowButtonState, setLowState] = useState("btn-inactive");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  var value = 50;
  var resolution = "Med";

  const onTextChange = (newVal, field) => {};

  const onSliderChange = (newVal) => {
    value = newVal;
  };

  const onResolutionChange = (newResol) => {
    resolution = newResol;

    setLowState("btn-inactive");
    setMedState("btn-inactive");
    setHighState("btn-inactive");
    let btnState = "btn-inactive";
    if (newResol === "High") {
      setHighState("btn-active");
    } else if (newResol === "Med") {
      setMedState("btn-active");
    } else if (newResol === "Low") {
      setLowState("btn-active");
    }

    console.log("button clicked" + resolution);
    console.log(value);
    console.log("Title: " + inputTitle);
    console.log("desc:" + inputDesc);
  };
  const generateImage = () => {
    //implement image generation here
    //variable resolution contains "High, Med, Low" depending on user choice
    //variable value ranges from (0,100) depending on user choice (slider)
    //image title is stored in "inputTitle"
    //image description is stored in "inputDesc"
  };

  return (
    //     const LogoBox = styled.span`
    //   font-weight: bold;
    //   font-size: 18px;
    //   display: inline-flex;
    //   align-items: center;
    //   height: 30px;
    //   line-height: 20px;
    //   padding: 10px;

    //   img {
    //     transition: 200ms ease;
    //   }

    //   &:hover img {
    //     transform: rotate(20deg);
    //   }
    // `;

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
          backgroundColor: "salmon",
          padding: "40px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ backgroundColor: "cornflowerblue", padding: "10px" }}>
          implement content image upload here
        </div>

        <div style={{ backgroundColor: "cornflowerblue", padding: "10px" }}>
          implement style image upload here
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
          <Button
            marginRight={"10px"}
            btnState={highButtonState}
            onClick={() => onResolutionChange("High")}
          >
            High
          </Button>
          <Button
            marginRight={"10px"}
            btnState={medButtonState}
            onClick={() => onResolutionChange("Med")}
          >
            Med
          </Button>
          <Button
            btnState={lowButtonState}
            onClick={() => onResolutionChange("Low")}
          >
            Low
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
              marginLeft: "20px",
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
        <Button
          fontSize={"30px"}
          btnState="btn-inactive"
          onClick={() => generateImage()}
        >
          Generate
        </Button>
        <Button type="save" fontSize={"30px"} btnState="btn-inactive">
          Save
        </Button>
      </div>
    </div>
  );
}
```
# Image Restoration Page

### Bring a color back to black and white image!

This is our import React library

```Javascript
import { useState } from "react";
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import axios from "axios";
```
When user clicks "Generate", our AI restores the color of the image and display it on the screen, also, user can save the restored image when clicking "save". 

restoration.js
```Javascript
const Restoration = ({}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadState, setLoadState] = useState("idle");
  const [imageUrl, setImageUrl] = useState(null);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    const form = new FormData();
    form.append("file", selectedFile);

    setLoadState("loading");
    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/bw-color", // change the URL to Image Restorator filter later
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      });
      const imgBlob = await response.data;
      setImageUrl(imgBlob);

      // URL.createObjectURL(imageUrl)

      console.log(response);
      // TODO: Get image url from the response aned set state
      // setImageUrl(response.data.url);
      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error");
    }
  }
  return (
    // Description,
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
        <div>
          <div>
            <h1>Upload your image to Restore the color of your image </h1>
          </div>
          <div>
            <h1>Only PNG or JPEG is accepted</h1>
          </div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Select File</label>
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
                    marginLeft: "20px",
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
              <Button type="submit" fontSize={"30px"} btnState="btn-inactive">
                Generate
              </Button>
              <Button type="save" fontSize={"30px"} btnState="btn-inactive">
                Save
              </Button>
            </div>
          </form>
          {loadState === "loading" && <h3>LOADING</h3>}
          {imageUrl && <img src={URL.createObjectURL(imageUrl)} />}
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
import { useState } from "react";
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import axios from "axios";
```
When user clicks "save" in other pages, all the saved images will be stored and available to view for the user in the gallery page. User can navigate through saved images using image slider.

restoration.js
```Javascript
const Restoration = ({}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadState, setLoadState] = useState("idle");
  const [imageUrl, setImageUrl] = useState(null);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    const form = new FormData();
    form.append("file", selectedFile);

    setLoadState("loading");
    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/bw-color", // change the URL to Image Restorator filter later
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      });
      const imgBlob = await response.data;
      setImageUrl(imgBlob);

      // URL.createObjectURL(imageUrl)

      console.log(response);
      // TODO: Get image url from the response aned set state
      // setImageUrl(response.data.url);
      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error");
    }
  }
  return (
    // Description,
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
        <div>
          <div>
            <h1>Upload your image to Restore the color of your image </h1>
          </div>
          <div>
            <h1>Only PNG or JPEG is accepted</h1>
          </div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Select File</label>
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
                    marginLeft: "20px",
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
              <Button type="submit" fontSize={"30px"} btnState="btn-inactive">
                Generate
              </Button>
              <Button type="save" fontSize={"30px"} btnState="btn-inactive">
                Save
              </Button>
            </div>
          </form>
          {loadState === "loading" && <h3>LOADING</h3>}
          {imageUrl && <img src={URL.createObjectURL(imageUrl)} />}
        </div>
      </Container>
    </div>
  );
};

export default Restoration;
```
# Developer Page

### Meet our handsome developers!

This is our import React library

```Javascript
import { Container, Heading, SimpleGrid, Divider, Image } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
```
Contains the description of the developers for the project.

developer.js
```Javascript
const Developer = () => (
<Layout title="Developer"> 
    <Container maxW = "container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Developers
      </Heading>
      <SimpleGrid 
      columns = "2" 
      spacing="20px" 
      backgroundColor = "white" 
      spacingX = "5px" 
      maxW = "1000"
      textColor = "black"
      gridTemplateColumns = "250px 455px"
      borderRadius = {30}
      >
        <Image
          boxSize = "250px"
          objectFit = "cover"
          padding = "4"
          src = "/images/SriDev1.jpg"
          alt = "Sri"
          backgroundSize = "500px"
          backgroundColor = "white"
          paddingLeft = {5}
          borderRadius = {45}
          marginTop = {2}
          marginLeft = {1}
          />
        <Container fontFamily={"Righteous, cursive"} backgroundColor = "" textColor = "black" padding="5" h="266px" fontSize={12}>
          <Heading fontFamily={"Righteous, cursive"}fontSize={22} paddingBottom={4} paddingTop={5}>
          Sriram Govindan
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure   
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        </SimpleGrid>
        <Container h="50px"/>
        <SimpleGrid 
      columns = "2" 
      spacing="20px" 
      backgroundColor = "white" 
      spacingX = "5px" 
      maxW = "1000"
      textColor = "black"
      gridTemplateColumns = "455px 250px"
      borderRadius = {30}
      >
        <Container fontFamily={"Righteous, cursive"} backgroundColor = "" textColor = "black" padding="5" h="266px"  fontSize={12}>
          <Heading fontFamily={"Righteous, cursive"} fontSize={22} paddingBottom={4} paddingTop={5}>
          Hyeonmin Song
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        <Image
          boxSize = "250px"
          objectFit = "cover"
          padding = "4"
          src = "/images/LukeDev2.jpg"
          alt = "Luke"
          backgroundSize = "200px"
          backgroundColor = ""
          paddingRight = {4}
          borderRadius = {45}
          marginLeft = {-4}
          marginTop = {2}
          />
        </SimpleGrid>

        <Divider orientation="horizontal" color = "black" h="50px"/>
        
        <SimpleGrid 
      columns = "2" 
      spacing="20px" 
      backgroundColor = "white" 
      spacingX = "5px" 
      maxW = "1000"
      textColor = "black"
      gridTemplateColumns = "250px 455px"
      borderRadius = {30}
      >
        <Image
          boxSize = "250px"
          objectFit = "cover"
          padding = "4"
          src = "/images/ChauDev.jpg"
          alt = "Chau"
          backgroundSize = "500px"
          backgroundColor = "white"
          paddingLeft = {5}
          borderRadius = {45}
          marginTop = {2}
          marginLeft = {1}
          />
        <Container fontFamily={"Righteous, cursive"} backgroundColor = "" textColor = "black" padding="5" h="266px"  fontSize={12}>
          <Heading ffontFamily={"Righteous, cursive"} ontSize={22} paddingBottom={4} paddingTop={5}>
          Patrick Chau
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        </SimpleGrid>
        <Container h="50px"/>
        <SimpleGrid 
      columns = "2" 
      spacing="20px" 
      backgroundColor = "white" 
      spacingX = "5px" 
      maxW = "1000"
      textColor = "black"
      gridTemplateColumns = "455px 250px"
      borderRadius = {30}
      >
        <Container bfontFamily={"Righteous, cursive"} ackgroundColor = "" textColor = "black" padding="5" h="266px"  fontSize={12}>
          <Heading fontFamily={"Righteous, cursive"} fontSize={22} paddingBottom={4} paddingTop={5}>
          Ahmed Moaz
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        <Image
          boxSize = "250px"
          objectFit = "cover"
          padding = "4"
          src = "/images/AhmedDev3.jpg"
          alt = "Ahmed"
          backgroundSize = "200px"
          backgroundColor = ""
          paddingRight = {4}
          borderRadius = {45}
          marginLeft = {-4}
          marginTop = {2}
          />
        </SimpleGrid>
      </Container>
</Layout>
)

export default Developer

```

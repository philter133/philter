
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

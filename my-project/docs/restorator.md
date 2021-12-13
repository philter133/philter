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

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

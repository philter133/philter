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

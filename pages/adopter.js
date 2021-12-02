import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Slider,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import React, { useState } from "react";

export default function Adopter({}) {
  <Layout title="Developer" />;
  const [highButtonState, setHighState] = useState("btn-inactive");
  const [medButtonState, setMedState] = useState("btn-active");
  const [lowButtonState, setLowState] = useState("btn-inactive");
  var value = 50;
  var resolution = "Med";

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
  };
  const generateImage = () => {
    //implement image generation here
    //variable resolution contains "High, Med, Low" depending on user choice
    //variable value ranges from (0,100) depending on user choice (slider)
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

    <div>
      <div>
        <header>Style Adapter</header>

        <div> implement image upload here</div>

        <div>
          <Slider onSliderChange={onSliderChange} />
          <h3>Lightly Stylized</h3>
          <h3>Heavily Stylized</h3>
        </div>

        <div>
          <h3>Resolution</h3>
        </div>
        <div>
          <div>
            <Button
              btnState={highButtonState}
              onClick={() => onResolutionChange("High")}
            >
              High
            </Button>
            <Button
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

        <div className="seperator">
          <Button btnState="btn-inactive" onClick={() => generateImage()}>
            Generate
          </Button>
        </div>

        <div className="image-upload"> implement preview image here</div>

        <div>
          <div className="btn-seperator">
            <Button btnSize="bigSize" btnState="btn-inactive">
              Save
            </Button>
          </div>
          <div className="btn-seperator">
            <Button btnSize="bigSize" btnState="btn-inactive">
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

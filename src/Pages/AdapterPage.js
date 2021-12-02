import React, { useState } from 'react'
import "../CSS/AdapterStyle.css"
import Slider from "../components/Slider"
import { Button } from '../components/Button'
import { generatePath } from 'react-router';


function AdapterPage(){

  const [highButtonState, setHighState] = useState("btn-inactive");
  const [medButtonState, setMedState] = useState("btn-active");
  const [lowButtonState, setLowState] = useState("btn-inactive");
  
  var value= 50;
  var resolution= "Med";

  

  const onSliderChange = (newVal) => {
    value = newVal;
  }

  const onResolutionChange = (newResol) => {
    resolution = newResol;

    setLowState("btn-inactive");
    setMedState("btn-inactive");
    setHighState("btn-inactive");
    let btnState = "btn-inactive";
    if (newResol === "High")
    {
      setHighState("btn-active");
    }
    else if (newResol === "Med")
    {
      setMedState("btn-active");
    }
    else if (newResol === "Low")
    {
      setLowState("btn-active");
    }

    console.log("button clicked" + resolution);
    console.log(value);

  }


  const generateImage = () =>
  {
    //implement image generation here 
    //variable resolution contains "High, Med, Low" depending on user choice
    //variable value ranges from (0,100) depending on user choice (slider)
  }

  return (
    <div className="App">
      <div className="backgroun-rectangle">
      
      <header className="header">Style Adapter</header>

      <div className="image-upload"> implement image upload here</div>

      <div class>
        <Slider onSliderChange = {onSliderChange}/>
        <h3 className="light-heavy">Lightly Stylized</h3>
        <h3 className="light-heavy">Heavily Stylized</h3>
      </div>

      <div className="resolution">
        <h3>Resolution</h3>
      </div>
      <div className="resolution">
        <div className="resoBorder">
          <Button btnState={highButtonState} onClick={() => onResolutionChange("High")}>High</Button>
          <Button btnState={medButtonState} onClick={() => onResolutionChange("Med") }>Med</Button>
          <Button btnState={lowButtonState} onClick={() => onResolutionChange("Low")}>Low</Button>
        </div>
      </div>

      <div className="seperator">
        <Button btnState="btn-inactive" onClick={()=> generateImage()}>Generate</Button>
      </div>
      

      <div className="image-upload"> implement preview image here</div>
      
      <div>
        <div className="btn-seperator">
        <Button btnSize="bigSize" btnState="btn-inactive">Save</Button>
        </div>
        <div className="btn-seperator">
        <Button btnSize="bigSize" btnState="btn-inactive">Download</Button>
        </div>
      </div>
      
      </div>
    </div>
  );
}


export default AdapterPage;

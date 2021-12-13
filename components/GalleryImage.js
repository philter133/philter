/**
 * The GalleryImage component to be rendered within the Gallery.
 * Pressing on the GalleryImage opens the Modal as the Modal is the child.
 * Utilizes Axios, React, NextJS, and Chakra-UI.
 */
import React, { useState } from 'react'
import { Container,
   Heading, 
   SimpleGrid, 
   Divider, 
   Button, 
   Image,
  RadioGroup,
  Radio,
  Input,
  Stack } from '@chakra-ui/react'
import Popup from './Modal';

//The GalleryImage
const GalleryImage = (props) => {

  /**
   * The React State Hook to show or hide the Modal based on boolean
   * 
   * @param showModal (Boolean) The state of the modal being enabled or disabled, starts as false.
   * @function setResponseData Sets the boolean of showModal
   */
  const [showModal, setShowModal] = useState(false);

  /**
   * The React State Hook to show or hide the GalleryImage, based on the
   * data sent by the Modal child component
   * 
   * @param showGal (Boolean) The state of the GalleryImage being enabled or disabled, starts as true.
   * @function setShowGal Sets the boolean of showGal
   */
  const [showGal, setShowGal] = useState(true);

  const toggleModal = () => {
    setShowModal(true)
  }
  
  /**
   * A function that allows another to do nothing on call
   */
  const doNothing = () => {

  }

  /**
     * Uses a ternary operator with showGal as a boolean to have the GalleryImage be enabled or disabled
     */
  return ((showGal)) ? (
    <div className="container">
      {/**The in-code css for the various parts */}
      <style jsx>{`
    .container {
      position: relative;
      width: 71%;
      z-index: 2:
    }
    
    .image {
      display: block;
      width: 100%;
      height: auto;
      z-index: 2:
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
      z-index: 2:
    }
    
    .container:hover .overlay {
      opacity: 0.7;
      z-index: 2:
    }
    
    .text {
      color: white;
      font-size: 19px;
      font-size-adjust: 0.65;
      position: absolute;
      top: 80%;
      left: 38%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 2:
    }
    `}
    </style>
    {/**The container of the GalleryImage to click to turn on the Modal */}
    <Container className="image" boxSize={250} onClick={(props.opacity == 0) ? doNothing : toggleModal} opacity={props.opacity}>
      {/**The image of the GalleryImage */}
      <Image src={props.src} objectFit="cover" boxSize={250} borderRadius={30}/>
      <div className="overlay">
        <div className="text">
          {props.name}
          {props.children}
          </div>
      </div>
      </Container>
      {/**The popup function for the Modal, is sent data by Modal to close Modal or delete and close GalleryImage, also sends data down to Modal for display purposes*/}
      <Popup trigger={showModal} setTrigger={()=>setShowModal(false)} setSrc={() => setShowGal(false)} src={props.src} boxSize={250} name={props.name} description={props.description} tags={props.tags} algo={props.algo} baseSrc={props.baseSrc} id={props.id}>

      </Popup>
    </div>
    
  ) : 
  '';
}

export default GalleryImage

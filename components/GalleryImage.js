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

const GalleryImage = (props) => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true)
  }
  
  const doNothing = () => {

  }

  return ((props.src != "")) ? (
    <div className="container">
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
    <Container className="image" boxSize={250} onClick={(props.opacity == 0) ? doNothing : toggleModal} opacity={props.opacity}>
      <Image src={props.src} objectFit="cover" boxSize={250} borderRadius={30}/>
      <div className="overlay">
        <div className="text">
          {props.name}
          {props.children}
          </div>
      </div>
      </Container>
      <Popup trigger={showModal} setTrigger={()=>setShowModal(false)} src={props.src} boxSize={250} name={props.name} description={props.description} tags={props.tags} algo={props.algo} baseSrc={props.baseSrc}>

      </Popup>
    </div>
    
  ) : 
  <Container boxSize={250}>
    
  </Container>;
}

export default GalleryImage
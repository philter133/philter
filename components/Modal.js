import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
import { SimpleGrid, Box, Input } from "@chakra-ui/layout";
import { CloseButton } from "@chakra-ui/close-button";
import { Button } from "@chakra-ui/button";
import axios from 'axios'


function Popup(props) {

    return (props.trigger) ? (
        <div className="popup">
        <style jsx>{`
        .popup {
            position: fixed;
      
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            
          }
      
          .popup-inner {
            position: relative;
            padding: 32px;
            width: 100%;
            max-width: 950px;
            height: 100%;
            max-height: 750px;
            background-color: white;
            border-style: groove;
            border-color: gray;
            border-width: 3px;
            z-index: 999;
            border-radius: 30px;
            text-align: right;
          }
      
          .popup-inner .close-btn {
            position: fixed;
            color: red;
            font-size: 25px;
            font-weight: 700;
            top: 13%;
            left: 20%:
            z-index: 999;
          }

          .popup-inner .close-btn:hover{
            font-size: 25.5px;
            color: rgb(156, 2, 2);
            top: 12.75%;
            z-index: 999;
          }
          
        `}
        </style>
        <div className="popup-inner">
        {/* <button className="close-btn" onClick={()=>props.setTrigger(false)}>
            x
            </button> */}
            <SimpleGrid columns="2" bgColor="">
              <Box backgroundColor='' textAlign='left'>
                Old
              {<Image src={props.baseSrc[0].url} boxSize={245} objectFit="cover" borderRadius={30} marginTop={61}/>}
              {(props.algo == 'FILTER') && <Image src={props.baseSrc[1].url} boxSize={245} objectFit="cover" borderRadius={30} marginTop={61}/>}
              </Box>
            <Box textColor="black" textAlign="left" fontSize={19}>
              <CloseButton boxSize="50" onClick={()=>props.setTrigger(false)} color="red" bgColor="#ebedf0" _hover={{ bg: 'rgb(255, 128, 128)' }} marginLeft={385} borderRadius={15}>
                </CloseButton>
                <Box textAlign='left'>
                New
              <Image src={props.src} boxSize={325} objectFit="cover" borderRadius={30} marginTop={31}/>
              </Box>
            </Box>
            </SimpleGrid>
            <Box bgColor="" boxSize="250" minWidth="400" textAlign="left" textColor="black" marginTop={-200} marginLeft={440}>
            Tags: <br/>
              {props.tags} <br/><br/>
              Name: <br/>
              {props.name} <br/>
              Description: <br/>
              {props.description} <br/>
              </Box>
            {props.children}
          </div>
        </div>

    ) : "";
}

export default Popup
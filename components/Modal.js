/**
 * The Modal component to for use within GalleryImage, it is the GalleryImage's child.
 * Generates a popup on clicking the Gallery Image and calls
 * an API to enable deletion of images from the gallery.
 * Utilizes Axios, React, NextJS, and Chakra-UI.
 */
import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
import { SimpleGrid, Box, Input } from "@chakra-ui/layout";
import { CloseButton } from "@chakra-ui/close-button";
import { Button } from "@chakra-ui/button";
import axios from 'axios'
import { color } from "@chakra-ui/react";

//The popup
function Popup(props) {
  /**
   * Used to keep track of the id for deleting images
   */
  const id = props.id

/**
 * The API call to the database to delete an image from the Gallery
 * @param {String} id The string used to delete image and associated images from gallery
 * @returns nothing
 */
  async function dbData (id) {
    console.log("trying to delete data");
    const form = new FormData();
    form.append("clusterId", id);
    return axios({
        url: "http://127.0.0.1:5000/delete-cluster",
        data: form,
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        mode: "cors",
      });
  }


    /**
     * Uses a ternary operator with props.trigger as a boolean to have the popup be enabled or disabled
     */
    return (props.trigger) ? (
        <div className="popup">
          {/**The in-code css for the various parts */}
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
            {/**A Simple Grid structure of 2 columns to split the popup into 2. Places 2 source images into first and 1 new images and data into second */}
            <SimpleGrid columns="2" bgColor="">
              {/**First column containing 2 source images. Posts the first image twice if given algorithm ID is BW*/}
              <Box backgroundColor='' textAlign='left' bgColor='white'>
                Old
                {/**First Image */}
              {<Image src={props.baseSrc[0].url} boxSize={245} objectFit="cover" borderRadius={30} marginTop={61}/>}
              {/**Second image is the first image but repeated if algorithm ID is BW */}
              {(props.algo == 'BW') && <Image src={props.baseSrc[0].url} boxSize={245} objectFit="cover" borderRadius={30} marginTop={61}/>}
              {/**Second source image if algorithm ID is not BW */}
              {(props.algo != 'BW') && <Image src={props.baseSrc[1].url} boxSize={245} objectFit="cover" borderRadius={30} marginTop={61}/>}
              </Box>
              {/**Second Column */}
            <Box textColor="black" textAlign="left" fontSize={19}>
              {/**Close button that disables the model by sending a setTrigger prop of false  to GalleryImage*/}
              <CloseButton boxSize="50" onClick={()=>props.setTrigger(false)} color="red" bgColor="#ebedf0" _hover={{ bg: 'rgb(255, 128, 128)' }} marginLeft={385} borderRadius={15}>
                </CloseButton>
                <Box textAlign='left'>
                New
                {/**Image on the right showing new, stylized image */}
              <Image src={props.src} boxSize={325} objectFit="cover" borderRadius={30} marginTop={31}/>
              </Box>
            </Box>
            </SimpleGrid>
            {/**Still in second column, DIsplaying gathered relevant data of the images in the Modal */}
            <Box bgColor="" boxSize="250" minWidth="400" textAlign="left" textColor="black" marginTop={-200} marginLeft={440}>
            Tags: <br/>
              {props.tags} <br/><br/>
              Name: <br/>
              {props.name} <br/>
              Description: <br/>
              {props.description} <br/>
              {/**Delete button that calls the API to delete in the database and disables the GalleryImage by sending a setSrc prop of false */}
              <Button bgColor='rgb(255, 102, 102)' marginTop={8} marginLeft={345} _hover={{bgColor: 'rgb(230, 0, 0)'}} onClick={() => {(dbData(id).then(response => console.log(response))); props.setSrc(false)}}>
                Delete
              </Button>
              </Box>
            {props.children}
          </div>
        </div>

    ) : "";
}

export default Popup

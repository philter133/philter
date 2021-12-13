//Fetching data here
//1.the user’s network connection: avoid re-fetching data that is already available
//2 what to do while waiting for the server response
//3.how to handle when data is not available (server error, or no data)
//4.how to recover if integration breaks (endpoint unavailable, resource changed, etc)

//form.elements will show all elements in form
//Array.from(form.elements) make it an array of diff element
//const form = event.currentTarget
//Const fileInput = Array.from(form.elements).find(({ name }) => name === 'file') we are accessing the file that are uploading to browser

import { useState } from "react";
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import axios from "axios";


const Restoration = ({}) => {

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadState, setLoadState] = useState("idle");
  const [imageUrl, setImageUrl] = useState(null);
  const [genId, setGenId] = useState("");
  const [contentId, setContentId] = useState("");

 const idCluster = [];


  async function handleSave()
  {
    idCluster.push(genId);
    idCluster.push(contentId);
    console.log(idCluster);
    console.log("string:" + JSON.stringify(idCluster));
    const form = new FormData();
    form.append("userId", "philter2021@gmail.com");
    form.append("tag", inputTag);
    form.append("algorithm", "BW");
    form.append("imageList", JSON.stringify(idCluster));


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
  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    const form = new FormData();
    form.append("file", selectedFile);
    form.append("title", inputTitle);
    form.append("description", inputDesc);

    setLoadState("loading");
    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/bw-color",
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
        <div style={{
          fontFamily: "Righteous, cursive",
          color:"#7C8AC5"
        }}> 
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
              
              <Button type="save" fontSize={"30px"} onClick={() => handleSave()}>
                Save
              </Button>
            </div>
          </form>
          {loadState === "loading" && <h3 style={{
                  fontSize: "25px",
                  fontFamily: "Righteous, cursive",
                  color: "#7C8AC5",
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "30px",
                  marginBottom: "10px",
                  alignItems: "center",
                }}>LOADING</h3>}
          {imageUrl && 
          <div style={{display:"flex", justifyContent: "space-evenly", marginTop: "25px"}}>
            <img  src={imageUrl}/></div>}
        </div>
      </Container>
    </div>
  );
};

export default Restoration;

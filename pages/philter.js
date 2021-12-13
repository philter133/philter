//Fetching data here
//1.the user’s network connection: avoid re-fetching data that is already available
//2 what to do while waiting for the server response
//3.how to handle when data is not available (server error, or no data)
//4.how to recover if integration breaks (endpoint unavailable, resource changed, etc)

import { useState } from "react";
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react";

import Head from "next/head";
import axios from "axios";

const Philter = ({}) => {
  const idCluster = [];
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadState, setLoadState] = useState("idle");
  const [styleFile, setStyleFile] = useState(null);
  const [inputTitleFilter, setInputTitleFilter] = useState("");
  const [inputDescFilter, setInputDescFilter] = useState("");
  const [inputTagFilter, setInputTagFilter] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [contentId, setContentId] = useState("");
  const [genId, setGenId] = useState("");


  var resolution = "large";
  const onResolutionChange = (newResol) => {
    resolution = newResol;
  };

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  const handleStyleSelect = (styleName) => {
    // styleName(styleName);
    // styleTag = styleName;
    setStyleFile(styleName);
  };

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    const form = new FormData();
    form.append("file", selectedFile);
    form.append("title", inputTitleFilter);
    form.append("description", inputDescFilter);
    form.append("name", styleFile);
    //cudi, edtaonisl, mosaic, scream, starrynight.
    form.append("size", resolution);
    setLoadState("loading");

    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/apply-filter",
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // const imagePath = await response.data.displayUrl;
      // const imageId = await response.data.genId;
      // const contentId = await response.data.contentId;
      const payload = await response.data;
      const contentId = payload.contentId;
      const genId = payload.genId;
      setContentId(contentId);
      setGenId(genId);
      setImagePath(payload.displayUrl);
      console.log(inputTitleFilter, inputDescFilter);

      // TODO: Get image url from the response aned set state
      // setImageUrl(response.data.url);
      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error"); //sets error when the data doesn't go through
    }
  }

  async function onSubmit() {
    if (styleFile === "mosaic") {
      //cudi, edtaonisl, mosaic, scream, starrynight.
      idCluster.push("188d17de-2acf-4585-bfb0-697cf1fcafb5");
    } else if (styleFile === "cudi") {
      idCluster.push("ebe40eb3-69d2-4327-937a-4590da174b83");
    } else if (styleFile === "edtaonisl") {
      idCluster.push("38f15b9b-cb01-4346-a59d-571666497cfe");
    } else if (styleFile === "scream") {
      idCluster.push("2abe1505-86d6-4a19-a03a-ae513e1c5668");
    } else {
      idCluster.push("886173ee-71c0-4f84-beea-cd9f68dee696");
    }
    idCluster.push(genId);
    idCluster.push(contentId);
    const form = new FormData();
    form.append("userId", "philter2021@gmail.com");
    form.append("tag", inputTagFilter);
    form.append("algorithm", "FILTER");
    form.append("imageList", JSON.stringify(idCluster));

    console.log(idCluster);
    console.log(JSON.stringify(idCluster));

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
        <title>Philter | Philter</title>
        <meta name="keywords" content="philter" />
      </Head>
      <Container style={{
          fontFamily: "Righteous, cursive",
          color:"#7C8AC5"
        }}>
        <div >
          <h1>Upload an image and add a philter to it!</h1>
        </div>
        <div>
          <h1>Only PNG or JPEG is accepted</h1>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Select File: </label>
              <input
                type="file"
                multiple
                name="file"
                onChange={handleFileSelect}
              />
              <img
                src="https://i.ibb.co/fQxF60K/STARRY-NIGHT.jpg"
                style={{
                  borderRadius: 50 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "inline-flex",
                }}
                onClick={() => handleStyleSelect("starrynight")}
              />
              <img
                src="https://i.ibb.co/VSLPHj2/CUDI.jpg"
                style={{
                  borderRadius: 50 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "inline-flex",
                }}
                onClick={() => handleStyleSelect("cudi")}
              />
              <img
                src="https://i.ibb.co/sPN1YZ6/MOSAIC.jpg"
                style={{
                  borderRadius: 50 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "inline-flex",
                }}
                onClick={() => handleStyleSelect("mosaic")}
              />
              <img
                src="https://i.ibb.co/371Ng24/EDTAONISL.png"
                style={{
                  borderRadius: 80 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "inline-flex",
                }}
                onClick={() => handleStyleSelect("edtaonisl")}
              />
              <img
                src="https://i.ibb.co/3MLrBYF/SCREAM.jpg"
                style={{
                  borderRadius: 50 / 2,
                  margin: "10px",
                  borderColor: "blue",
                  width: "220px",
                  height: "220px",
                  display: "flex",
                  alignSelf: "center"
                }}
                onClick={() => handleStyleSelect("scream")}
              />

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
                    onClick={() => onResolutionChange("small")}
                  >
                    Low
                  </Button>
                  <Button
                    marginRight={"10px"}
                    onClick={() => onResolutionChange("medium")}
                  >
                    Medium
                  </Button>
                  <Button
                    onClick={() => onResolutionChange("mega")}
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
                  <h3>Image title:</h3>
                  <input
                    style={{
                      WebkitBorderTopLeftRadius: "5px",
                      WebkitBorderTopRightRadius: "5px",
                      backgroundColor: "#D2D2D2",
                      marginLeft: "88px",
                    }}
                    onChange={(event) => setInputTitleFilter(event.target.value)}
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
                    onChange={(event) => setInputDescFilter(event.target.value)}
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
                  onChange={(event) => setInputTagFilter(event.target.value)}
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
                  alignItems: "center",
                }}
              >
                <Button type="submit" fontSize={"30px"} >
                  Generate
                </Button>

                <Button
                  onClick={() => onSubmit()}
                  fontSize={"30px"}
                >
                  Save
                </Button>
              </div>
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
          {imagePath && <div style={{display:"flex", justifyContent: "space-evenly", marginTop: "25px"}}>
            <img  src={imagePath}/></div>}
        </div>
      </Container>
    </div>
  );
};

export default Philter;

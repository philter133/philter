# Gallery Page

### Gallery will save all your new images!

This is our import React library

```Javascript
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
```
When user clicks "save" in other pages, all the saved images will be stored and available to view for the user in the gallery page. User can navigate through saved images using image slider.

restoration.js
```Javascript
const Restoration = ({}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadState, setLoadState] = useState("idle");
  const [imageUrl, setImageUrl] = useState(null);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    const form = new FormData();
    form.append("file", selectedFile);

    setLoadState("loading");
    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/bw-color", // change the URL to Image Restorator filter later
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      });
      const imgBlob = await response.data;
      setImageUrl(imgBlob);

      // URL.createObjectURL(imageUrl)

      console.log(response);
      // TODO: Get image url from the response aned set state
      // setImageUrl(response.data.url);
      setLoadState("idle");
    } catch (error) {
      console.log(error);
      setLoadState("error");
    }
  }
  return (
    // Description,
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
        <div>
          <div>
            <h1>Upload your image to Restore the color of your image </h1>
          </div>
          <div>
            <h1>Only PNG or JPEG is accepted</h1>
          </div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Select File</label>
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
              <Button type="submit" fontSize={"30px"} btnState="btn-inactive">
                Generate
              </Button>
              <Button type="save" fontSize={"30px"} btnState="btn-inactive">
                Save
              </Button>
            </div>
          </form>
          {loadState === "loading" && <h3>LOADING</h3>}
          {imageUrl && <img src={URL.createObjectURL(imageUrl)} />}
        </div>
      </Container>
    </div>
  );
};

export default Restoration;
```

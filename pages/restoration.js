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
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadState, setLoadState] = useState("idle");
  const [imageUrl, setImageUrl] = useState(null);
  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    const form = new FormData();
    form.append("file", selectedFile);
    form.append("name", "cudi"); //cudi, edtaonisl, mosaic, scream, starrynight.
    form.append("size", "small");

    setLoadState("loading");
    try {
      const response = await axios({
        mode: "cors",
        method: "post",
        url: "http://127.0.0.1:5000/apply-filter", // change the URL to Image Restorator filter later
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
    <Layout title="restoration">
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
              {/*
              <input
                type="Description"
                placeholder="Please enter Description"
                name="Description"
              ></input>
              <input
                type="tag"
                placeholder="Please enter tag!"
                name="tag"
              ></input>
              <input
                type="submit"
                style="margin-top: 1px; margin-bottom: 15px; margin-right: 10px;"
                value="Send"
                name="message"
              ></input> */}
              <label>Select File</label>
              <input
                type="file"
                multiple
                name="file"
                onChange={handleFileSelect}
              />
            </div>

            <Button type="submit" colorScheme="teal">
              Submit
            </Button>
          </form>
          {loadState === "loading" && <h3>LOADING</h3>}
          {imageUrl && <img src={URL.createObjectURL(imageUrl)} />}
        </div>
      </Container>
    </Layout>
  );
};

export default Restoration;

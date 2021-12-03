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
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import axios from "axios";

const Philter = ({}) => {
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
    form.append("name", "scream"); //cudi, edtaonisl, mosaic, scream, starrynight.
    form.append("size", "small");
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
      setLoadState("error"); //sets error when the data doesn't go through
    }
  }
  return (
    <Layout title="philter">
      <Head>
        <title>Philter | Philter</title>
        <meta name="keywords" content="philter" />
      </Head>
      <Container>
        <div>
          <h1>Upload your image to get philtered image</h1>
        </div>
        <div>
          <h1>Only PNG or JPEG is accepted</h1>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Select File</label>
              <input
                type="file"
                multiple
                name="file"
                onChange={handleFileSelect}
              />
              <Button type="submit" colorScheme="teal">
                Submit
              </Button>
            </div>
          </form>
          {loadState === "loading" && <h3>LOADING</h3>}
          {imageUrl && <img src={URL.createObjectURL(imageUrl)} />}
        </div>
      </Container>
    </Layout>
  );
};

export default Philter;

# Philter Application

## Introduction

Welcome to **Philter**, a web application that empowers users to enhance their images with a range of captivating filters and styles. Our app comprises three primary features: **Philter**, **Style Adopter**, and **Image Restoration**. In this README, we will provide an overview of each feature along with their operational mechanics.

## Philter Feature

The **Philter** feature seamlessly transforms your images into mesmerizing paintings. Here's a technical breakdown of its operation:

1. Utilizing the React library, users select an image and trigger the "Generate" button.
2. Axios facilitates the upload of the chosen image to our backend server.
3. Our backend employs a machine learning model to create a fresh filtered image.
4. The generated image is sent back to the frontend for immediate user display.
5. Should the user wish to retain the image, they can save it by clicking the "Save" button. Axios is once again employed to transmit the image to our backend, where it is securely stored.

## Style Adopter Feature

The **Style Adopter** feature offers a personalized touch to your images by allowing you to apply styles of your preference. Here's how it operates:

1. Users select an image and customize the style level using a dedicated Slider component.
2. Upon clicking the "Generate" button, Axios uploads both the chosen image and style level to our backend.
3. Our backend uses a machine learning model to generate a uniquely styled image based on the uploaded data.
4. The newly styled image is returned to the frontend for immediate user viewing.
5. Users can save the generated image by clicking the "Save" button, which triggers Axios to transmit the image to our backend for secure storage.

## Image Restoration Feature

The **Image Restoration** feature breathes life back into black and white images by restoring colors. Here's a glimpse of its operation:

1. Users select a black and white image and initiate the "Generate" command.
2. Axios uploads the chosen image to our backend.
3. A machine learning model on our backend restores the colors of the image.
4. The restored, color-enriched image is sent to the frontend for immediate user enjoyment.
5. To save the restored image, users can click the "Save" button. Axios facilitates the transmission of the image to our backend, where it is securely stored.

## Gallery Feature

The **Gallery** feature serves as a personalized collection of your transformed images. Here's an outline of its operation:

1. React is utilized to create an intuitive user interface that presents saved images in an attractive grid layout.
2. A NavigationBar component empowers users to navigate through paginated images.
3. Upon navigation to a new page, Axios fetches the corresponding images from our backend.
4. The retrieved images are displayed in the grid layout, granting users an immersive view of their saved creations.

## Join the Philter Community

Embrace the boundless potential of Philter's innovative image transformation capabilities. Embark on a voyage where technology converges with artistic expression, allowing you to encapsulate the essence of every moment through a unique lens. Unleash your creativity and become an integral part of the Philter community today!

For comprehensive access to the source code and further information, explore our [GitHub repository](https://github.com/philter133).

> **Note:** This documentation furnishes a high-level overview of Philter's features and setup. For an in-depth dive into technical details and code examples, refer to the repository and accompanying documentation.

---

# Installation Guide

## Welcome to Philter

Welcome to Philter, where your images undergo a captivating transformation, turning ordinary snapshots into breathtaking works of art. Harness the power of AI-driven filters, adapt styles to your liking, and restore lost colors with ease. Our platform merges cutting-edge technology with elegant design to deliver an unparalleled image editing experience. Join us on this creative journey and unleash your visual imagination.

## Installation Steps

Follow these steps to set up Philter and explore its potential:

1. Install MkDocs by running the following command in your terminal:

    ```bash
    pip install mkdocs
    ```

2. Create a new project and navigate to the repository:

    ```bash
    mkdocs new my-project
    cd my-project
    ```

3. Launch the local development server:

    ```bash
    mkdocs serve
    ```

    Access the documentation by navigating to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

4. Ensure you have Node.js and npm installed on your system.

5. After downloading the repository, run the following commands to install required modules:

    ```bash
    npm install
    npm install next
    npm install react-google-login
    ```

## Running the Front-End Application

Embark on a visual journey through Philter's front-end application:

1. Launch the application with the following command:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to experience Philter's immersive interface.

# Checkout our Gallery 

```jsx
/**
 * The gallery page of the Philter application. 
 * The general layout of the page is created and rendered here with the use of Chakra-UI, NextJS, and React.
 * Uses the GalleryImage component to have the images be interactable
 * Utlizes axios for the API calls
 * 
 */
import { Container, 
  Heading, 
  SimpleGrid,
  Button, 
  IconButton,
  Input,
  Stack,
  Box, 
  RadioGroup,
  Radio } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Head from 'next/head'
import { CheckIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import GalleryImage from '../components/GalleryImage'
import axios from 'axios'

//The Gallery 
const Gallery = () => {

  /**
   * The React State Hook to preserve database data after an
   * API call.
   * 
   * @param responseData The data from database by API call
   * @function setResponseData Sets the data for responseData
   */
  const [responseData, setResponseData] = useState(null)

  /**
   * The React State Hook that is used for searching through images by image type(i.e. filter or style adaptation)
   * 
   * @param name (String) The specific image type to filter for
   * @function setName Set the string used for the filter
   */
  const [name, setName] = useState('none');

  /**
   * The React State Hook to search for images by their specific "tag".
   * 
   * @param tag (String) The specific tag for image(s)
   * @function setTag Sets the string for tag
   */
  const [tag, setTag] = useState('none');

  /**
   * The React State Hook to help reset the application state
   * 
   * @param filterSearchEnable (Binary Number) The state with 1 being on and 0 being off
   * @function setFilterSearch Sets the state of filter search
   */
  const [filterSearchEnable, setFilterSearch] = useState("1");

  /**
   * The React State Hook to turn off or on the "tag" search bar and function.
   * 
   * @param tagSearchEnable (Binary Number) The state with 1 being on and 0 being off
   * @function setTagIcon Sets the state of tagSearchEnable
   */
  const [tagSearchEnable, setTagIcon] = useState("0");

  /**
   * The React State Hook to keep track of the image page within the database.
   * Also used to traverse database for API calls.
   * 
   * @param slideNum (Number) The page number in the database and used for instant traversal
   * @function setSlideIndex Sets the page number
   */
  const [slideNum, setSlideIndex] = useState(0);

  /**
   * React State Hook to keep track of filter to search for before searching
   * 
   * @param tempName (String) The filter
   * @function setTempName Sets the temporary filter state
   */
  const [tempName, setTempName] = useState('');

  /**
   * React State Hook to keep track of tag to search for before searching
   * 
   * @param tempTag (String) The tag
   * @function setTempTag Sets the temporary tag state
   */
  const [tempTag, setTempTag] = useState('');

  /**
   * React State Hook to allow the website to send API call first before full webpage render
   * 
   * @param isLoading (Boolean) The loading state of the webpage
   * @function setLoading Sets the loading state
   */
  const [isLoading, setLoading] = useState(false)

/**
 * The API call to begin receiving data from the database
 * @param {Number} pgNum The page to traverse to in the database, starts from 0.
 * @param {String} algo The image type to filter for(must be "BW", "FILTER", "STYLE", or "NONE")
 * @param {String} tag The tag from the image to filter for
 * @returns A Promise object that must be processed to fully receive data
 */
async function dbData (pgNum, algo, tag) {
  //Tracking 
  console.log("trying to get data");

  //The form to send data with the specific form data.
  const form = new FormData();
  form.append("userId", "philter2021@gmail.com");
  form.append("limit", 3);
  form.append("ascending", "TRUE");
  form.append("pageNumber", pgNum);
  form.append("algorithm", algo);
  form.append("tag", tag);
  return axios({
      url: "http://127.0.0.1:5000/get-image-cluster",
      data: form,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      mode: "cors",
    });
}

//The React Effect Hook that calls the API on webpage render or on state change for variales(slideNum, tag, and name)
useEffect(() => {dbData(slideNum, name, tag).then((response) => {setResponseData(response.data) }).finally(setLoading(true))},[slideNum, name, tag])

//Used to log and track the necessary information for bugs
console.log("track")
console.log(responseData)
console.log("Page Number " + slideNum)
console.log("Algorithm " + name)
console.log("Tag(s): " + tag)


/**
 * Sets the tempTag state hook. Used in Tag search field.
 * @param {String} tag The string to set the state to
 */
const handleTypeTag = (tag) => {
  setTempTag(tag.target.value)
}

/**
 * Sets the tempName state hook
 * @param {String} nam The string to set the state to
 */
const handleTypeName = (nam) => {
  setTempName(nam.target.value)
}

/**
 * Sets the filterSearchEnable to 1 or 0 based on current value and sets 
 * filter value to none to clear the field.
 */
const toggleMode = () => {
  {(filterSearchEnable == 0) ? setFilterSearch("1") : setFilterSearch("0")}
  setTag('none')
}

/**
 * Sets the tagSearchEnable to 1 or 0 based on current value.
 * Used in Tag filter button.
 */
const toggleTagMode = () => {
  {(tagSearchEnable == 0) ? setTagIcon("1") : setTagIcon("0")}
}

/**
 * Used to go to the previous page of the database or if the value
 * is at zero, it stays at zero.
 * Used in left-slider button
 */
const prevSlide = () => {
  (setSlideIndex((slideNum == 0) ? 0 : slideNum - 1));
}

/**
 * Used to go to the next page of the database or if the value
 * will reach the max page, null, keeps the page number the same.
 * Used in right-slider button
 */
const nextSlide = () => {
  setSlideIndex((responseData['nextPage'] == null) ? slideNum : slideNum + 1)
}

/**
 * Used for the "search" button. 
 */
const formSubmit = () => {
  {
    //If the tempName is nothing, set to 'NONE' or keep current value
    setName((tempName == "") ? 'NONE' : tempName);
    //If the filterSearchEnable is 0, also set to 'NONE'
    if (filterSearchEnable == "0"){
      setName("NONE")
    }
    //If the tempTag is nothing, set to "NONE" or keep current value
    setTag((tempTag == "") ? 'NONE' : tempTag);
    //If the Seach for Tag button is 0(disable), set the search value to "NONE"
    if (tagSearchEnable == "0"){
      setTag("NONE")
    }
    //Resets the gallery to first page
    setSlideIndex(0);
  }
}

/**
 * Used to set the color mode for the Search for Tags button to red or green
 * @param {Number} variable 
 * @returns String value of 'red' or 'green'
 */
const useModeValue = (variable) => {
  return ((variable == 0) ? 'red' : 'green' )
}

return (
<Layout title="gallery">
   <Head>
      <title>Philter | Gallery</title>
      <meta name ="keywords" content ="gallery"/>
    </Head>
    {/* Container begins here */}
    <Container maxW = "container.sm"> 
      <Heading as="h3" fontSize={20} mb={4}>
        Gallery
      </Heading>
      {/* Stack of vertical inputs for Image Type and Tag */}
      <Stack direction='column' backgroundColor="" spacing="3" textColor="white">
        {/*Radio button input group that changes tempName to an Image Type on clicking a radio button*/}
      <RadioGroup defaultValue='None' onChange={(r) => {setTempName(r); console.log(r)}}>
        <Radio value ='None' paddingLeft={4}>None</Radio>
        <Radio value ='BW' paddingLeft={4} >Black and White</Radio>
        <Radio value = 'Filter' paddingLeft={4}>Filter</Radio>
        <Radio value = 'Style' paddingLeft={4}>Style</Radio>
      </RadioGroup>
      {/*Search For Tags bar that uses a ternary operator for disabled or enabled state, and changes tempTag to the specified Tag */}
      {(tagSearchEnable=="0") ? "" : <Input placeholder='Search for Tags' textColor='white' borderRadius = {30} marginBottom={-1} value={tempTag} onChange={handleTypeTag} opacity={(tagSearchEnable == 0) ? "0" : "100"}/>}
      {/*Search button to change name and tag states to do the API call for data from database */}
      <Button aria-label="Search" borderRadius={15} onClick={formSubmit}>
        Search
      </Button>
      {/* Stack of horizontal radios for choosing Tag or name */}
      <Stack direction='row' marginLeft={4}>
      {/*Filter button with words "Search by Tag(s)?: " followed by an icon. Used for enabling and disabling the Tag search bar and clears the search*/}
     <Button
      aria-label="Tag Button Selector"
      height = {50}
      borderRadius = {25}
      opacity={1}
      rightIcon={(tagSearchEnable == 0) ? <CloseIcon/> : <CheckIcon/>}
      colorScheme={useModeValue(tagSearchEnable)}
      onClick={() => {toggleTagMode(); setTag("");}}
      >
        Search by Tag(s)? : 
     </Button>
      </Stack>
      </Stack >{/* End Stack for both inputs and radios */}
      {/*SimpleGrid that divides the gallery into three spaces: left-slider button, gallery images, right-slider button. */}
      <SimpleGrid columns="3" gridTemplateColumns="100px 408px 100px" bgColor="white" height={860} borderRadius = {25} marginTop={1}>
        {/* Left Slider Button to move current gallery page to previous page in database*/}
    <IconButton
       aria-label="SLider-left"
      colorScheme={'blue'}
      height = {75}
      borderRadius = {90}
      opacity={0.75}
      icon={<ChevronLeftIcon/>} 
      fontSize="30"
      marginTop={370}
      onClick={prevSlide}
      >
     </IconButton>
     {/* 3 vertical gallery images that take in various values to display data and the image*/}
    <Container marginTop={4} marginLeft={59} textColor='black'>
      {console.log("somwhere" + responseData)}
      {/**First Gallery Image that utilizes booleans to prevent the website from crashing due to rendering null values */}
    {isLoading && responseData && responseData.genList && (responseData.genList.length >= 1) && 
    <GalleryImage 
    src={responseData.genList[0].url} 
    name={responseData.genList[0].title} 
    description={responseData.genList[0].description} 
    tags={responseData['tagList'][0]} 
    algo={responseData['algoList'][0]} 
    baseSrc={responseData['baseList'][0]}
    id ={responseData['id'][0]}/>}
    {/**If the page is empty, the last page is reached and displays "YOu Have Reached the Last Page to user" */}
    {isLoading && responseData && responseData.genList  && (responseData.genList.length == 0) && 'You Have Reached The Last Page'}
    <br/>
    {/**Second Gallery Image that utilizes booleans to prevent the website from crashing due to rendering null values */}
    {isLoading && responseData && responseData.genList  && (responseData.genList.length >= 2) && 
    <GalleryImage src={responseData.genList[1].url} 
    name={responseData.genList[1].title} 
    description={responseData.genList[1].description} 
    tags={responseData['tagList'][1]} 
    algo={responseData['algoList'][1]} 
    baseSrc={responseData['baseList'][1]}
    id ={responseData['id'][1]}/>}
    <br/>
    {/**First Gallery Image that utilizes booleans to prevent the website from crashing due to rendering null values */}
    {isLoading && responseData && responseData.genList  && (responseData.genList.length >= 3) && 
    <GalleryImage src={responseData.genList[2].url} 
    name={responseData.genList[2].title} 
    description={responseData.genList[2].description} 
    tags={responseData['tagList'][2]} 
    algo={responseData['algoList'][2]} 
    baseSrc={responseData['baseList'][2]}
    id ={responseData['id'][2]}/>}
    <br/> 
    <Container marginLeft={78} fontWeight={700} textShadow>
    </Container>
    </Container>
    {/* Right slider button to move current gallery page to next page in database*/}
    <IconButton
      aria-label="SLider-right"
      colorScheme={'blue'}
      height = {75}
      borderRadius = {90}
      opacity={0.75}
      icon={<ChevronRightIcon/>}
      fontSize="30"
      marginTop={370}
      onClick={nextSlide}
      >
      </IconButton>
  </SimpleGrid>
        </Container>
    </Layout>
  )
}

export default Gallery

```




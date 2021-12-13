# Gallery Page

### Gallery will save all your new images!

This is our import React library

```Javascript
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
```
When user clicks "save" in other pages, all the saved images will be stored and available to view for the user in the gallery page. User can navigate through saved images using image slider.

restoration.js
```Javascript

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
    //If the Seach for Tag button is 0(disable), 
    if (tagSearchEnable == "0"){
      setTag("NONE")
    }
    //Resets the gallery to first page
    setSlideIndex(0);
  }
}

//
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
      {/* Stack of vertical inputs for Tag and Name */}
      <Stack direction='column' backgroundColor="" spacing="3" textColor="white">
      <RadioGroup defaultValue='None' onChange={(r) => {setTempName(r); console.log(r)}}>
        <Radio value ='None' paddingLeft={4}>None</Radio>
        <Radio value ='BW' paddingLeft={4} >Black and White</Radio>
        <Radio value = 'Filter' paddingLeft={4}>Filter</Radio>
        <Radio value = 'Style' paddingLeft={4}>Style</Radio>
      </RadioGroup>
      {(tagSearchEnable=="0") ? "" : <Input placeholder='Search for Tags' textColor='white' borderRadius = {30} marginBottom={-1} value={tempTag} onChange={handleTypeTag} opacity={(tagSearchEnable == 0) ? "0" : "100"}/>}
      {/*Search button to call function for database */}
      <Button aria-label="Search" borderRadius={15} onClick={formSubmit}>
        Search
      </Button>
      {/* Stack of horizontal radios for choosing Tag or name */}
      <Stack direction='row' marginLeft={4}>
      {/*Filter button with words "Search by Tag(s)?: " followed by an icon */}
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
        {/* Left Slider Button */}
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
     {/* Component For Loop for Gallery Slider*/}
    <Container marginTop={4} marginLeft={59} textColor='black'>
      {console.log("somwhere" + responseData)}
    {isLoading && responseData && responseData.genList && (responseData.genList.length >= 1) && 
    <GalleryImage 
    src={responseData.genList[0].url} 
    name={responseData.genList[0].title} 
    description={responseData.genList[0].description} 
    tags={responseData['tagList'][0]} 
    algo={responseData['algoList'][0]} 
    baseSrc={responseData['baseList'][0]}
    id ={responseData['id'][0]}/>}
    {isLoading && responseData && responseData.genList  && (responseData.genList.length == 0) && 'You Have Reached The Last Page'}
    <br/>
    {isLoading && responseData && responseData.genList  && (responseData.genList.length >= 2) && 
    <GalleryImage src={responseData.genList[1].url} 
    name={responseData.genList[1].title} 
    description={responseData.genList[1].description} 
    tags={responseData['tagList'][1]} 
    algo={responseData['algoList'][1]} 
    baseSrc={responseData['baseList'][1]}
    id ={responseData['id'][1]}/>}
    <br/>
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
    {/* Right slider button */}
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

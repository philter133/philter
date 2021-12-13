import { Container, 
  Heading, 
  SimpleGrid,
  Button, 
  IconButton,
  Input,
  Stack,
  Box,  } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Head from 'next/head'
import { CheckIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import GalleryImage from '../components/GalleryImage'
import axios from 'axios'

const Gallery = () => {

  const [responseData, setResponseData] = useState(null)
  const [name, setName] = useState('none');
  const [tag, setTag] = useState('none');
  const [filterSearchEnable, setFilterSearch] = useState("1");
  const [tagSearchEnable, setTagIcon] = useState("0");
  const [slideNum, setSlideIndex] = useState(0);
  const [tempName, setTempName] = useState('');
  const [tempTag, setTempTag] = useState('');
  const [isLoading, setLoading] = useState(false)



async function dbData (pgNum, algo, tag) {
  console.log("trying to get data");
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

useEffect(() => {dbData(slideNum, name, tag).then((response) => {setResponseData(response.data) }).finally(setLoading(true))},[slideNum, name, tag])


console.log("track")
console.log(responseData)
console.log("Page Number " + slideNum)
console.log("Algorithm " + name)
console.log("Tag(s): " + tag)


//
const handleTypeTag = (tag) => {
  setTempTag(tag.target.value)
}

//
const handleTypeName = (nam) => {
  setTempName(nam.target.value)
}

//
const toggleMode = () => {
  {(filterSearchEnable == 0) ? setFilterSearch("1") : setFilterSearch("0")}
  setTag('none')
}

//
const toggleTagMode = () => {
  {(tagSearchEnable == 0) ? setTagIcon("1") : setTagIcon("0")}
}

//
const prevSlide = () => {
  (setSlideIndex((slideNum == 0) ? 0 : slideNum - 1));
}

//
const nextSlide = () => {
  setSlideIndex((responseData['nextPage'] == null) ? slideNum : slideNum + 1)
}

const formSubmit = () => {
  {
    setName((tempName == "") ? 'NONE' : tempName);
    if (filterSearchEnable == "0"){
      setName("NONE")
    }
    setTag((tempTag == "") ? 'NONE' : tempTag);
    if (tagSearchEnable == "0"){
      setTag("NONE")
    }
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
      <Input placeholder='Search for Image Type' textColor='white' borderRadius = {30} marginBottom={-1} value={tempName} onChange={handleTypeName}/>
      {(tagSearchEnable=="0") ? "" : <Input placeholder='Search for Tags' textColor='white' borderRadius = {30} marginBottom={-1} value={tempTag} onChange={handleTypeTag} opacity={(tagSearchEnable == 0) ? "0" : "100"}/>}
      {/*Possible Search button to call function for database */}
      <Button aria-label="Search" borderRadius={15} onClick={formSubmit}>
        Search
      </Button>
      {/* Stack of horizontal radios for choosing Tag or name */}
      <Stack direction='row' marginLeft={4}>
        {/*Filter button with words "Search by Name?: " followed by an icon */}
      <Button
      aria-label="Image Type Button Selector"
      height = {50}
      borderRadius = {25}
      opacity={1}
      rightIcon={(filterSearchEnable == 0) ? <CloseIcon/> : <CheckIcon/>}
      colorScheme={useModeValue(filterSearchEnable)}
      onClick={toggleMode}
      >
        Search by Type? : 
     </Button>
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
    baseSrc={responseData['baseList'][0]}/>}
    {isLoading && responseData && responseData.genList  && (responseData.genList.length == 0) && 'You Have Reached The Last Page'}
    <br/>
    {isLoading && responseData && responseData.genList  && (responseData.genList.length >= 2) && 
    <GalleryImage src={responseData.genList[1].url} 
    name={responseData.genList[1].title} 
    description={responseData.genList[1].description} 
    tags={responseData['tagList'][0]} 
    algo={responseData['algoList'][1]} 
    baseSrc={responseData['baseList'][1]}/>}
    <br/>
    {isLoading && responseData && responseData.genList  && (responseData.genList.length >= 3) && 
    <GalleryImage src={responseData.genList[2].url} 
    name={responseData.genList[1].title} 
    description={responseData.genList[1].description} 
    tags={responseData['tagList'][0]} 
    algo={responseData['algoList'][2]} 
    baseSrc={responseData['baseList'][2]}/>}
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
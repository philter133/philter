# Developer Page

### Meet our handsome developers!

This is our import React library

```Javascript
import { Container, Heading, SimpleGrid, Divider, Image } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
```
Contains the description of the developers for the project.

developer.js
```Javascript
const Developer = () => (
<Layout title="Developer"> 
    <Container maxW = "container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Developers
      </Heading>
      <SimpleGrid 
      columns = "2" 
      spacing="20px" 
      backgroundColor = "white" 
      spacingX = "5px" 
      maxW = "1000"
      textColor = "black"
      gridTemplateColumns = "250px 455px"
      borderRadius = {30}
      >
        <Image
          boxSize = "250px"
          objectFit = "cover"
          padding = "4"
          src = "/images/SriDev1.jpg"
          alt = "Sri"
          backgroundSize = "500px"
          backgroundColor = "white"
          paddingLeft = {5}
          borderRadius = {45}
          marginTop = {2}
          marginLeft = {1}
          />
        <Container fontFamily={"Righteous, cursive"} backgroundColor = "" textColor = "black" padding="5" h="266px" fontSize={12}>
          <Heading fontFamily={"Righteous, cursive"}fontSize={22} paddingBottom={4} paddingTop={5}>
          Sriram Govindan
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure   
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        </SimpleGrid>
        <Container h="50px"/>
        <SimpleGrid 
      columns = "2" 
      spacing="20px" 
      backgroundColor = "white" 
      spacingX = "5px" 
      maxW = "1000"
      textColor = "black"
      gridTemplateColumns = "455px 250px"
      borderRadius = {30}
      >
        <Container fontFamily={"Righteous, cursive"} backgroundColor = "" textColor = "black" padding="5" h="266px"  fontSize={12}>
          <Heading fontFamily={"Righteous, cursive"} fontSize={22} paddingBottom={4} paddingTop={5}>
          Hyeonmin Song
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        <Image
          boxSize = "250px"
          objectFit = "cover"
          padding = "4"
          src = "/images/LukeDev2.jpg"
          alt = "Luke"
          backgroundSize = "200px"
          backgroundColor = ""
          paddingRight = {4}
          borderRadius = {45}
          marginLeft = {-4}
          marginTop = {2}
          />
        </SimpleGrid>

        <Divider orientation="horizontal" color = "black" h="50px"/>
        
        <SimpleGrid 
      columns = "2" 
      spacing="20px" 
      backgroundColor = "white" 
      spacingX = "5px" 
      maxW = "1000"
      textColor = "black"
      gridTemplateColumns = "250px 455px"
      borderRadius = {30}
      >
        <Image
          boxSize = "250px"
          objectFit = "cover"
          padding = "4"
          src = "/images/ChauDev.jpg"
          alt = "Chau"
          backgroundSize = "500px"
          backgroundColor = "white"
          paddingLeft = {5}
          borderRadius = {45}
          marginTop = {2}
          marginLeft = {1}
          />
        <Container fontFamily={"Righteous, cursive"} backgroundColor = "" textColor = "black" padding="5" h="266px"  fontSize={12}>
          <Heading ffontFamily={"Righteous, cursive"} ontSize={22} paddingBottom={4} paddingTop={5}>
          Patrick Chau
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        </SimpleGrid>
        <Container h="50px"/>
        <SimpleGrid 
      columns = "2" 
      spacing="20px" 
      backgroundColor = "white" 
      spacingX = "5px" 
      maxW = "1000"
      textColor = "black"
      gridTemplateColumns = "455px 250px"
      borderRadius = {30}
      >
        <Container bfontFamily={"Righteous, cursive"} ackgroundColor = "" textColor = "black" padding="5" h="266px"  fontSize={12}>
          <Heading fontFamily={"Righteous, cursive"} fontSize={22} paddingBottom={4} paddingTop={5}>
          Ahmed Moaz
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        <Image
          boxSize = "250px"
          objectFit = "cover"
          padding = "4"
          src = "/images/AhmedDev3.jpg"
          alt = "Ahmed"
          backgroundSize = "200px"
          backgroundColor = ""
          paddingRight = {4}
          borderRadius = {45}
          marginLeft = {-4}
          marginTop = {2}
          />
        </SimpleGrid>
      </Container>
</Layout>
)

export default Developer

```
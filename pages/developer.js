/**
 * The static-developer page giving the names and descriptions of the various
 * developers that worked on the project. There are 4 boxes, that show a styled image
 * and the name+descriptions of the developers.
 * Utilizes NextJS and Chakra-UI.
 */
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Image,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";

//The Developers
const Developer = () => (
  <Layout title="Developer">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Developers
      </Heading>
      {/**First SimpleGrid to split a section into 2 columns for image and description+name */}
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="black"
        gridTemplateColumns="250px 455px"
        borderRadius={30}
      >
        {/**Sriram's Styled Image */}
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/images/SriDev1.jpg"
          alt="Sri"
          backgroundSize="500px"
          backgroundColor="white"
          paddingLeft={5}
          borderRadius={45}
          marginTop={2}
          marginLeft={1}
        />
        {/**Sriram's Description */}
        <Container
          fontFamily={"Righteous, cursive"}
          backgroundColor=""
          textColor="black"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"Righteous, cursive"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
          >
            Sriram Govindan
          </Heading>
          <h1>
            Software Engineering Student at San Jose State University, graduates
            2023.
          </h1>
          <h1>
            Machine Learning Engineer enthusiastic about Statistical Machine
            Learning and Computer Vision.
          </h1>
          Worked on the backend and ML.
        </Container>
      </SimpleGrid>
      <Container h="50px" />
      {/**Second SimpleGrid to split a section into 2 columns for description+name then image */}
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="black"
        gridTemplateColumns="455px 250px"
        borderRadius={30}
      >
        {/**Hyeonmin's Description */}
        <Container
          fontFamily={"Righteous, cursive"}
          backgroundColor=""
          textColor="black"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"Righteous, cursive"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
          >
            Hyeonmin Song
          </Heading>
          <h1>
            Software Engineering Student at San Jose State University, graduates
            2023.
          </h1>
          <h1>
            Have a passion for web development and building applications from
            the ground up! Specialize mainly in web architecture and full-stack
            development.
          </h1>
          Worked on front-end and API call.
        </Container>
        {/**Hyeonmin's Styled Image */}
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/images/LukeDev2.jpg"
          alt="Luke"
          backgroundSize="200px"
          backgroundColor=""
          paddingRight={4}
          borderRadius={45}
          marginLeft={-4}
          marginTop={2}
        />
      </SimpleGrid>

      <Divider orientation="horizontal" color="black" h="50px" />
      {/**Third SimpleGrid to split a section into 2 columns for image and description+name */}
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="black"
        gridTemplateColumns="250px 455px"
        borderRadius={30}
      >
        {/**Patrick's Styled image */}
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/images/ChauDev.jpg"
          alt="Chau"
          backgroundSize="500px"
          backgroundColor="white"
          paddingLeft={5}
          borderRadius={45}
          marginTop={2}
          marginLeft={1}
        />
        {/**Patrick's Description */}
        <Container
          fontFamily={"Righteous, cursive"}
          backgroundColor=""
          textColor="black"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"Righteous, cursive"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
          >
            Patrick Chau
          </Heading>
          <h1>
            Software Engineering Student at San Jose State University, graduates
            2023.
          </h1>
          <h1>
            New to web-development but is willing and interested to learn and
            try out new things.
          </h1>
          <h1>Worked on front-end and API calls.</h1>
        </Container>
      </SimpleGrid>
      <Container h="50px" />
      {/**Fourth SimpleGrid to split a section into 2 columns for image and description+name */}
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="black"
        gridTemplateColumns="455px 250px"
        borderRadius={30}
      >
        {/**Ahmed's Description */}
        <Container
          fontFamily={"Righteous, cursive"}
          backgroundColor=""
          textColor="black"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"Righteous, cursive"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
          >
            Ahmed Moaz
          </Heading>
          <h1>
            San Jose State University senior Software Engineering student,
            expected graduation Fall 2022
          </h1>
          <h1>
            Interesed in web-development with concentration on system design and
            interface development
          </h1>
          Worked on front-end, styling and API calls
        </Container>
        {/**Ahmed's Description */}
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/images/AhmedDev3.jpg"
          alt="Ahmed"
          backgroundSize="200px"
          backgroundColor=""
          paddingRight={4}
          borderRadius={45}
          marginLeft={-4}
          marginTop={2}
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Developer;

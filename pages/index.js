import Head from 'next/head'
import { Heading, Link, Box, Container, Image, useColorModeValue, Button} from "@chakra-ui/react";
import NextLink from 'next/link'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';


export default function Home() {
  return (
    <>
    <Head>
      <title>Philter | Home</title>
      <meta name ="keywords" content ="Home"/>
    </Head>
   <Layout>
  <Container> 
    <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} maxW={800} align="center">
    <Heading as="h2" variant="page-tile">
          Philter
        </Heading>
    </Box>

    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
      </Box>
      <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
    </Box>
    </Box>
    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Philter Section
        </Heading>
        <Paragraph>
        <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sample1.png"
            alt="Profile image"
          />
          Put image here
          </Paragraph>
          
        <Box align="center" my={4}>
          <NextLink href="/philter">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Create your own
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Style Adopter Section
        </Heading>
        <Paragraph>
        <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sample1.png"
            alt="Profile image"
          /> 
          Put image here
          </Paragraph>
          
        <Box align="center" my={4}>
          <NextLink href="/adopter">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Create your own
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Image Restoration Page
        </Heading>
        <Paragraph>
        <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sample1.png"
            alt="Profile image"
          />
           Put image here
          </Paragraph>
          
        <Box align="center" my={4}>
          <NextLink href="/restoration">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Create your own 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
    </Layout>
    </>
  )
}

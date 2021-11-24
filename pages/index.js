import Head from 'next/head'
import { Heading, Link, Box, Container, Image, useColorModeValue, Button} from "@chakra-ui/react";
import NextLink from 'next/link'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function Home() {
  return (
   
  <Container> 
    <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} maxW={800} align="center">
      Home Page
    </Box>

    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-tile">
          Philter
        </Heading>
        <p>This is philter app</p>
      </Box>
      <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
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
    </Box>
    </Box>
    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Philter Section
        </Heading>
        <Paragraph>
          Where Image will be 
          </Paragraph>
          
        <Box align="center" my={4}>
          <NextLink href="/developer">
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
          Where Image will be 
          </Paragraph>
          
        <Box align="center" my={4}>
          <NextLink href="/developer">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Create your own
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Image Restoration Section
        </Heading>
        <Paragraph>
          Where Image will be 
          </Paragraph>
          
        <Box align="center" my={4}>
          <NextLink href="/developer">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Create your own 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

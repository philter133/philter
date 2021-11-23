import Head from 'next/head'
import { Heading, Link, Text, Code, Flex, Box, Container } from "@chakra-ui/react";
import NextLink from 'next/link'

export default function Home() {
  return (
  <Container> 
    <Box borderRadius="lg" bg="red" p={3} mb={6} maxW={800} align="center">
      Home Page
    </Box>

    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-tile">
          Philter
        </Heading>
        <p>This is philter app</p>
      </Box>
    </Box>
    </Container>   
  )
}

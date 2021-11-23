import Head from 'next/head'
import { Heading, Link, Text, Code, Flex, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Philter App</title>
      </Head>
      <main>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px" mt="10">
      <Heading as="h1" size="2xl" mb="2" >
          <Link color="blue.500" href="http://localhost:3000/">Philter</Link>
      </Heading>
      </Flex>
        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px" mt="10">

          <Box as="a" href="http://localhost:3000/" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">Developer Page &rarr;</Heading>
              <Text fontSize="lg">Check out our Developer Page</Text>
          </Box>

          <Box as="a" href="http://localhost:3000/" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">Style Adopter Page &rarr;</Heading>
              <Text fontSize="lg">Check out our Style Adopter Page</Text>
          </Box>

        <Box as="a" href="http://localhost:3000/" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
        <Heading as="h3" size="lg" mb="2">Philter Page &rarr;</Heading>
        <Text fontSize="lg">Check out our Philter Page</Text>
        </Box>

        <Box as="a" href="http://localhost:3000/" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
        <Heading as="h3" size="lg" mb="2">Image Restoration Page &rarr;</Heading>
        <Text fontSize="lg">Check out our Image Restoration Page</Text>
        </Box>

        <Box as="a" href="http://localhost:3000/" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
        <Heading as="h3" size="lg" mb="2">Gallery Page &rarr;</Heading>
        <Text fontSize="lg">Check out our Gallery Page</Text>
        </Box>

        </Flex>
      </main>
    </div>
  )
}

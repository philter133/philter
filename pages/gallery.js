import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Head from 'next/head'

const Gallery = () => (
<Layout title="gallery">
   <Head>
      <title>Philter | Gallery</title>
      <meta name ="keywords" content ="gallery"/>
    </Head>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Gallery
      </Heading>
        </Container>
    </Layout>
)

export default Gallery
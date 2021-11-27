import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Head from 'next/head'

const Restoration = () => (
<Layout title="restoration">
<Head>
      <title>Philter | Image Restorator</title>
      <meta name ="keywords" content ="restoration"/>
    </Head>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Restoration
      </Heading>
        </Container>
    </Layout>
)

export default Restoration
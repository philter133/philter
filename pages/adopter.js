import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Head from 'next/head'

const Adopter = () => (
<Layout title="adopter">
<Head>
      <title>Philter | Style Adopter</title>
      <meta name ="keywords" content ="adopter"/>
    </Head>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Adopter
      </Heading>
        </Container>
    </Layout>
)

export default Adopter
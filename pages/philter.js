import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Head from 'next/head'

const Philter = () => (
<Layout title="philter">
<Head>
      <title>Philter | Philter</title>
      <meta name ="keywords" content ="philter"/>
    </Head>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Philter
      </Heading>
        </Container>
    </Layout>
)

export default Philter
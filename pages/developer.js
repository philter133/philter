import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Head from 'next/head'

const Developer = () => (
<Layout title="Developer">
<Head>
      <title>Philter | Developer</title>
      <meta name ="keywords" content ="developer"/>
    </Head>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Developer
      </Heading>
        </Container>
    </Layout>
)

export default Developer
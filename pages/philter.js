import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { images: data }
  }
}

const Philter= ({images}) => (
<Layout title="philter">
<Head>
      <title>Philter | Philter</title>
      <meta name ="keywords" content ="philter"/>
    </Head>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        philter
      </Heading>

      <div>
      <h1>All Images</h1>
      {images.map(image => (
        <div key={image.id}>
          <a>
            <h3>{ image.name }</h3>
          </a>
        </div>
      ))}
    </div>

        </Container>
    </Layout>
)

export default Philter
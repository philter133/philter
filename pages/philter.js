//Fetching data here 
//1.the user’s network connection: avoid re-fetching data that is already available
//2 what to do while waiting for the server response
//3.how to handle when data is not available (server error, or no data)
//4.how to recover if integration breaks (endpoint unavailable, resource changed, etc)

import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Head from 'next/head'
import axios from 'axios'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //http://127.0.0.1:5000/apply-filter
  return {
    props: { images: data }
  }
}
var state = {

  file:null

}

function handleFiles(e) {

  // console.log(e.target.files, "$$$$");
  // console.log(e.target.files[0], "$$$$");

  let file = e.target.files[0]

  //for multiple files, add all

  this.setState({file: file})
}

function handleUpload(e) {
  console.log(this.state, "THE STATE ---- $$$$");

  let file = this.state.file

  let formdata = new FormData()

  formdata.append('image',file)
  formdata.append('name', "Philter" )

  axios({
    url: '',
    method: "get",
    headers:{
      authorization: 'your token'
    },
    data: formdata //pass here
  }),then((res)=>{
      //handle
  },(err) => {
    //error
  })
}

const Philter= ({images}) => (
<Layout title="philter">
<Head>
      <title>Philter | Philter</title>
      <meta name ="keywords" content ="philter"/>
    </Head>
    <Container>
      <div>
      <h1>The Form </h1>
      <form>
        <div>
          <label>Select File</label>
          <input type ='file' multiple name='file' onChange={(e)=>this.handleFiles(e)}/>
        </div>
        </form>
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
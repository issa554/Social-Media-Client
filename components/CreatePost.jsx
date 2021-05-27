
import {useState} from 'react'
import { gql  , useMutation } from "@apollo/client";

import { FETCH_POSTS_QUERY } from '../util/graphql';
const CreatePost = () => {
    const [body , setBody] = useState('df bagttttttttttttttt')
    const [createPost, { loading }] = useMutation(CREATE_POST, {
    
      onError(err) {
      console.log(err)
      
      },
      variables: {body}
    });
   
    return (
      <div className="bg-green-300  m-5 rounded w-4/5 ">
   <form class=" m-10  flex p-2 ">
  <div class="mb-6 w-2/3">
    <div class="h-full  mt-0 mb-0">
      <textarea value={body} onChange={(e)=>setBody(e.target.value)} class="h-full w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
    </div>
  </div>
  

  <div class=" mt-auto mb-auto">
     <div>
         <button onClick={createPost} class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
         Post !!
         </button>
      </div>
    </div>
  </form>
 </div>
    )
}

export default CreatePost


const CREATE_POST = gql`
mutation createPost($body: String!) {
    createPost(
        body:$body
  
  ){
    body
    username
    createdAt
  }
}
`;
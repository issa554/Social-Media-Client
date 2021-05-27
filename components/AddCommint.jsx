import {useState} from 'react'
import {  AnnotationIcon } from '@heroicons/react/outline'
import { gql , useMutation } from '@apollo/client'
const AddCommint = ({id}) => {
    const [body , setBody] = useState('')
    const [AddCommint] = useMutation(ADD_COMMINT, {
        onError(err) {
      
         console.log(err)
        },
        variables: { postid: id , body}
        });
    return (
        <div className="flex">
            <button onClick={AddCommint}  className="bg-blue-500 group-hover:animate-bounce hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <AnnotationIcon className="h-5 w-5  text-green-500"/>  
</button>
<input 
value={body}
onChange={(e)=>{setBody(e.target.value)}}
class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"   label="Email"
          placeholder="Commint..."
          type="text" />   
        </div>
    )
}

export default AddCommint



const ADD_COMMINT = gql`
mutation createComment($postid: String!, $body: String!) {
    createComment(postid:$postid 
     body:$body){
         id
     }
}
`;
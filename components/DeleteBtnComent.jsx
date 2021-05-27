
import {useMutation , gql} from '@apollo/client'
import {useState} from 'react'
import { TrashIcon} from '@heroicons/react/outline'


const DeleteBtn = ({id , commentid}) => {
    const [open , setOpen] = useState(false)
    const [deleteComment] = useMutation(DELETE_COM_MUTATION, {
   
        onError(err) {
      
         console.log(err)
        },
        variables: { postid: id , commentid:commentid}
        });
    return (
        <div>
              <button onClick={deleteComment} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <TrashIcon className="h-5 w-5 text-red-500"/>       
</button>
<div className={`${!open && "hidden"} red-500 fixed inset-0 z-50 overflow-auto bg-smoke-light flex`}>
      <div className="relative p-8 bg-red-500 w-full max-w-md m-auto flex-col flex rounded-lg">
      <div>dfyhnyntgn</div>
      <span className="absolute top-0 right-0 p-4">     
        <button  onClick={()=>{ deletePost}}>Yes</button><hr />
        <button onClick={()=>{setOpen(!open)}} >no</button>
     </span>
     </div>
   </div>
        </div>
    )
}

export default DeleteBtn


const DELETE_COM_MUTATION = gql`
 mutation deleteComment($postid: String! $commentid:String!) {
    deleteComment(postid: $postid , commentid:$commentid){
        id
    } }


`
